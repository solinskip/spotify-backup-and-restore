import {useEffect, useReducer} from "react";
import axios from "axios";
import {Api} from "../axios/spotifyApi";

const apiReducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'ACCOUNT_INFORMATION':
           // return Api.get();
            return {name: 'Piotr'};
        default:
            throw new Error('Wrong action type!')
    }
}

const useApi = (props) => {
    const [state, dispatch] = useReducer(apiReducer, {name: ''});

    useEffect(() => {
        dispatch({type: props.type});
    }, [dispatch, props.type])

    return state.name;
}

export default useApi;