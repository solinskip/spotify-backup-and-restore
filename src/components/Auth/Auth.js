import React, {useContext, useEffect, useMemo} from "react";
import Querystring from "querystring";
import Config from '../../constants/Config';
import {useDispatch, useSelector} from "react-redux";
import {Description} from "./Styles";
import {AuthContext} from "../../context/Auth/AuthContext";
import Chip from '../../components/UI/Chip/Chip'
import Button from "../UI/Button/Button";
import {Center} from "../../styles";

const Auth = () => {
    const accessToken = useSelector(state => state.accessToken);
    const {setIsAuthenticated} = useContext(AuthContext);
    const dispatch = useDispatch();
    const channel = useMemo(() => new BroadcastChannel('access-token'), []);

    useEffect(() => {
        channel.onmessage = message => dispatch({type: 'SET_ACCESS_TOKEN', accessToken: message.data});
        return channel.close;
    }, [channel, dispatch]);
    useEffect(() => {
        if (accessToken !== '') {
            setIsAuthenticated(true);
        }
    }, [setIsAuthenticated, accessToken]);

    const authHandler = () => {
        const set = {
            client_id: Config.clientId,
            redirect_uri: Config.redirectUri,
            scope: 'playlist-read playlist-read-private playlist-modify-public playlist-modify-private user-library-read user-library-modify',
            response_type: 'token',
            show_dialog: 'true'
        };

        // Convert object to a query string
        const urlParamsString = Querystring.stringify(set);

        window.open(
            `https://accounts.spotify.com/authorize?${urlParamsString}`,
            "Spotify",
            `menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=480, height=900 left=1000 top=0`
        );
    }

    return (
        <Center>
            <Description>
                Backup your Spotify playlists in<Chip label="JSON" className='green'/>format or restore from file.
            </Description>
            <Button variant="contained" color="primary" onClick={authHandler}>Login to Spotify</Button>
        </Center>
    );
}

export default Auth;