import React, {Fragment, useContext} from "react";
import Auth from "../../components/Auth/Auth";
import {Container, Title} from "./Styles";
import AccountInformation from "../../components/AccountInformation/AccountInformation";
import {AuthContext} from "../../context/Auth/AuthContext";

const Index = () => {
    const {isAuthenticated} = useContext(AuthContext);

    let content = <Auth/>;
    if (isAuthenticated) {
        content = <AccountInformation/>
    }

    return (
        <Fragment>
            <Title>Spotify backup & restore</Title>
            <Container>
                {content}
            </Container>
        </Fragment>
    );
}

export default Index;