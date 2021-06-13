import * as actionsTypes from '../actions/actionsTypes';

const initialState = '';

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionsTypes.SET_ACCESS_TOKEN:
            return action.accessToken;
    }

    return state;
};

export default reducer;