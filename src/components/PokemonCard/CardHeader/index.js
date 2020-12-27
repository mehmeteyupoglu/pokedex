//Packages
import React from "react";
import { CardBody, Alert } from "reactstrap";

//Local Files
import poke from "../../../assets/pokemon.png";
import { headerStyle } from "./style";
const { checkDarkState } = require("../../utils");

export default function CardHeader({ item, isDark }) {
  return (
    <div>
      <CardBody style={headerStyle}>
        <Alert color={checkDarkState(isDark, "secondary", "info")}>
          <img width="30%" src={poke} alt={item.name} />
        </Alert>
      </CardBody>
    </div>
  );
}
