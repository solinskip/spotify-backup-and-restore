import * as actionsTypes from '../actions/actionsTypes';
import axiosSpotifyApi from "../../axios/spotifyApi";
import axios from "axios";

const apiFetchStart = () => ({
    type: actionsTypes.API_FETCH_START,
})
const apiFetchStop = () => ({
    type: actionsTypes.API_FETCH_STOP,
})
const getAccountInformationSuccess = response => ({
    type: actionsTypes.GET_ACCOUNT_INFORMATION_SUCCESS,
    payload: response
})
const getPlaylistsSuccess = response => ({
    type: actionsTypes.GET_PLAYLISTS_SUCCESS,
    payload: response
})
const getPlaylistSuccess = response => ({
    type: actionsTypes.GET_PLAYLIST_SUCCESS,
    payload: response
})

export const getAccountInformation = accessToken => async dispatch => {
    dispatch(apiFetchStart());

    try {
        const playlists = await axiosSpotifyApi.get('/me/playlists', {
            headers: {Authorization: `Bearer ${accessToken}`}
        })
        dispatch(getPlaylistsSuccess(playlists));

        const accountInformation = await axiosSpotifyApi.get('/me', {
            headers: {Authorization: `Bearer ${accessToken}`}
        })
        dispatch(getAccountInformationSuccess(accountInformation));

        dispatch(apiFetchStop());
    } catch (error) {
        console.log(error);
    }
}