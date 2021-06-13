import React from "react";
import {Chip as ChipMaterialUi} from "@material-ui/core";
import styled from "styled-components";

export default styled(ChipMaterialUi)`
  &.green {
    background-color: #26a328;
  },
  &.purple {
    background-color: #4e0b3e;
  },
  && {
    color: #fff;
    margin-left: 8px;
    margin-right: 8px;
    font-size: 0.8rem;
  }
`;