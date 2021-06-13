import React from "react";
import {Button as ButtonMaterialUi} from "@material-ui/core";

const Button = (props) => {
    return <ButtonMaterialUi {...props}>{props.children}</ButtonMaterialUi>;
};

export default Button;