import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "reactstrap";

export default function NavbarButton() {
  //Current path is needed for dynamic button. See Catch and Caught buttons below
  const currentPath = useLocation();

  const path = currentPath.pathname;

  if (path === "/caught-pokemons") {
    return (
      <div>
        <Button color="danger" style={btnStyle} tag={Link} to="/">
          Catch Pokemons
        </Button>
      </div>
    );
  }
  return (
    <div>
      <Button color="danger" style={btnStyle} tag={Link} to="/caught-pokemons">
        Caught Pokemons
      </Button>
    </div>
  );
}

const btnStyle = {
  cursor: "pointer",
  marginRight: "1rem",
};
