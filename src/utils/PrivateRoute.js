import React, {useContext} from "react";
import {Redirect, Route} from "react-router-dom";
import {AuthContext} from "../context/Auth/AuthContext";

const PrivateRoute = ({component, ...rest}) => {
    const {isAuthenticated} = useContext(AuthContext);

    return (
        <Route {...rest} render={props => isAuthenticated
            ? <component {...props}/>
            : <Redirect to={{pathname: '/'}}/>
        }/>
    );
}

export default PrivateRoute;