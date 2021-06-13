import React, {Fragment, useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAccountInformation} from "../../store/actions/apiActions";
import {ButtonContainer, Information, Username} from "./Styles";
import BreakLine from "../UI/BreakLine/BreakLine";
import {saveAs} from 'file-saver';
import Chip from "../UI/Chip/Chip";
import Button from "../UI/Button/Button";
import axios from "axios";
import axiosSpotifyApi from "../../axios/spotifyApi";

const AccountInformation = () => {
    const accessToken = useSelector(state => state.accessToken);
    const accountInformation = useSelector(state => state.api.accountInformation);
    const apiResponse = useSelector(state => state.api.apiResponse);
    const dispatch = useDispatch();
    const importFileRef = useRef();

    useEffect(() => {
        dispatch(getAccountInformation(accessToken));
    }, [accessToken, dispatch])

    const openBrowseHandler = () => {
        importFileRef.current.click();
    };

    const arrayChunk = (array, chunkSize) => {
        const result = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            const chunk = array.slice(i, i + chunkSize);
            result.push(chunk);
        }
        return result;
    }

    const backupHandler = async () => {
        let fetchedPlaylist, backupPlaylist = {};
        const accountBackup = {playlists: [], followers: []};

        for (const [, item] of Object.entries(apiResponse.playlists.data.items)) {
            // Creates backup of playlist. Saves playlist name and songs it contains
            if (item.owner.display_name === accountInformation.username) {
                fetchedPlaylist = await axios.get(item.href, {
                    headers: {Authorization: `Bearer ${accessToken}`}
                });
                backupPlaylist = {
                    name: fetchedPlaylist.data.name,
                    id: fetchedPlaylist.data.id,
                    tracks: []
                };

                for (const [, item] of Object.entries(fetchedPlaylist.data.tracks.items)) {
                    backupPlaylist.tracks.push({
                        uri: item.track.uri
                    })
                }
                accountBackup.playlists.push(backupPlaylist);
            } else {
                // Creates backup of followed playlists
                accountBackup.followers.push({id: item.id});
            }
        }

        const blob = new Blob([JSON.stringify(accountBackup)], {type: 'application/json'});
        saveAs(blob, 'SpotifyBackup.json');
    }

    const restoreHandler = async (e) => {
        const accountBackup = await new Response(e.target.files[0]).json();
        let trackChunks;

        for (const [, playlist] of Object.entries(accountBackup.playlists)) {
            // Spotify add items endpoint accepts maximum of 100 tracks in one request
            trackChunks = arrayChunk(playlist.tracks.map(item => item.uri), 100);
            // Creates a playlist
            axiosSpotifyApi(`/users/${accountInformation.userId}/playlists`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                },
                data: {
                    name: playlist.name
                }
            }).then(response => {
                // Add tracks to playlist
                trackChunks.forEach((tracksChunk) => {
                    axiosSpotifyApi(`/playlists/${response.data.id}/tracks`, {
                        method: 'POST',
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                            'Content-Type': 'application/json'
                        },
                        data: {
                            uris: tracksChunk
                        }
                    });
                });
            })
        }
        // Add the current user as a follower of a playlist
        for (const [, follower] of Object.entries(accountBackup.followers)) {
            axiosSpotifyApi(`playlists/${follower.id}/followers`, {
                method: 'PUT',
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                }
            });
        }
    };

    return (
        <Fragment>
            <Username>{accountInformation.username}</Username>
            <BreakLine/>
            <Information>Number of playlists: <Chip label={accountInformation.numberOfPlaylists} className='purple'/></Information>
            <Information>Total number of tracks: <Chip label={accountInformation.numberOfTracks} className='purple'/></Information>
            <BreakLine/>
            <ButtonContainer>
                <input type='file' id='file' ref={importFileRef} onChange={(e) => restoreHandler(e)} style={{display: 'none'}}/>
                <Button variant="contained" color="primary" onClick={() => openBrowseHandler()}>Restore</Button>
                <Button variant="contained" color="secondary" onClick={() => backupHandler()}>Backup</Button>
            </ButtonContainer>
        </Fragment>
    );
}

export default AccountInformation;