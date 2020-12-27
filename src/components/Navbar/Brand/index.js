import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import { Link } from "react-router-dom";

import cameraPokemon from "../../../assets/cameraPokemon.png";

export default function Brand() {
  return (
    <div>
      <NavbarBrand tag={Link} to="/">
        <img src={cameraPokemon} />{" "}
        <span
          className="font-weight-bold mr-2
            "
        >
          Pokédex
        </span>
        App
      </NavbarBrand>
    </div>
  );
}
