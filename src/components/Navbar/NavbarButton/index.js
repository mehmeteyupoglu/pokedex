//Packages
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "reactstrap";

//Local files
import { btnStyle } from "./style";

export default function NavbarButton() {
  //Current path is needed for dynamic button. See Catch and Caught buttons below
  const currentPath = useLocation();
  const path = currentPath.pathname;

  const dynamicButtons = () => {
    if (path === "/caught-pokemons") {
      return {
        to: "/",
        text: "Catch Pokemons",
      };
    }
    return {
      to: "/caught-pokemons",
      text: "Caught Pokemons",
    };
  };

  return (
    <div>
      <Button
        color="danger"
        style={btnStyle}
        tag={Link}
        to={dynamicButtons().to}
      >
        {dynamicButtons().text}
      </Button>
    </div>
  );
}
