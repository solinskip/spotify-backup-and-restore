import * as actionsTypes from '../actions/actionsTypes';

const initialState = {
    isLoading: false,
    accountInformation: {
        userId: '',
        username: '',
        numberOfPlaylists: null,
        numberOfTracks: null,
    },
    apiResponse: {
        playlists: null,
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionsTypes.API_FETCH_START:
            return {...state, isLoading: true};
        case actionsTypes.API_FETCH_STOP:
            return {...state, isLoading: false};
        case actionsTypes.GET_ACCOUNT_INFORMATION_SUCCESS:
            let numberOfTracks = 0;
            for (const [, value] of Object.entries(state.apiResponse.playlists.data.items)) {
                numberOfTracks += value.tracks.total;
            }
            return {
                ...state,
                accountInformation: {
                    username: action.payload.data.display_name,
                    userId: action.payload.data.id,
                    numberOfPlaylists: state.apiResponse.playlists.data.total,
                    numberOfTracks: numberOfTracks
                }
            };
        case actionsTypes.GET_PLAYLISTS_SUCCESS:
            return {
                ...state,
                apiResponse: {
                    playlists: action.payload
                }
            };
        case actionsTypes.GET_PLAYLIST_SUCCESS:
            return action.payload;
        default:
            return state;
    }
};

export default reducer;