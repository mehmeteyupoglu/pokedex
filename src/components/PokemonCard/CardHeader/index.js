//Packages
import React from "react";
import { CardBody, Alert, CardSubtitle } from "reactstrap";

//Local Files
import poke from "../../../assets/pokemon.png";
import { headerStyle, alertStyle } from "./style";
const { checkDarkState } = require("../../utils");

export default function CardHeader({ item, isDark }) {
  console.log("item in card header", item);
  return (
    <div>
      <CardBody style={headerStyle}>
        <Alert
          color={checkDarkState(isDark, "dark", "info")}
          style={alertStyle}
        >
          <img width="30%" src={poke} alt={item.name} />
          <CardSubtitle tag="h6" className="text-dark text-uppercase">
            {item.name}
          </CardSubtitle>
        </Alert>
      </CardBody>
    </div>
  );
}
