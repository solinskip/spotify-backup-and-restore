import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {Provider} from "react-redux";
import accessTokenReducer from "./store/reducers/accessTokenReducer";
import apiReducer from "./store/reducers/apiReducer";
import AuthContextProvider from "./context/Auth/AuthContext";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    accessToken: accessTokenReducer,
    api: apiReducer
});

const logger = store => {
    return next => {
        return action => {
            // console.log('[Middleware] Dispatching', action);
            const result = next(action);
            // console.log('[Middleware] next state', store.getState());
            return result;
        }
    }
};


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <AuthContextProvider>
                <App/>
            </AuthContextProvider>
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
