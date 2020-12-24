import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Button,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

import { Link } from "react-router-dom";

export default function CustomNavbar({ props }) {
  const [dark, setDark] = useState(false);

  return (
    <div>
      <Navbar
        color="dark"
        dark
        style={{ boxShadow: "1px 3px 10px gray", marginBottom: "3rem" }}
      >
        <div className="container ">
          <NavbarBrand tag={Link} to="/">
            <img src="https://img.icons8.com/color/48/000000/camera-pokemon.png" />{" "}
            <span
              className="font-weight-bold mr-2
            "
            >
              Pokédex
            </span>
            App
          </NavbarBrand>
          <Nav navbar>
            <div style={{ marginRight: "0.5rem" }}>
              <Button
                size="sm"
                style={{ marginRight: "1.5rem" }}
                outline
                color="danger"
              >
                <NavLink tag={Link} to="/caught-pokemons">
                  Caught Pokemons
                </NavLink>
              </Button>
              <Button size="sm" outline onClick={() => setDark(!dark)}>
                <NavLink>{dark ? "Dark" : "Light"}</NavLink>
              </Button>
            </div>
          </Nav>
        </div>
      </Navbar>
    </div>
  );
}
