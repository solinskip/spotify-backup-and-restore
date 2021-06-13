import React, {Fragment} from "react";
import {BrowserRouter, Route} from 'react-router-dom';
import Index from './pages/Index/Index';
import Callback from './pages/Callback/Callback';
import {GlobalStyle} from "./styles";


const App = () => {
    return (
        <Fragment>
            <BrowserRouter>
                <GlobalStyle setBackground={window.location.pathname === '/'}/>
                <Route path={'/callback'} component={Callback}/>
                <Route exact path={'/'} component={Index}/>
                {/*<PrivateRoute path={'/account-information'} component={AccountInformation}/>*/}
            </BrowserRouter>
        </Fragment>
    );
}

export default App;
