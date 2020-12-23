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

export default function CustomNavbar({ props }) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  return (
    <div>
      <Navbar
        color="dark"
        dark
        style={{ boxShadow: "1px 3px 10px gray", marginBottom: "3rem" }}
      >
        <div className="container ">
          <NavbarBrand>
            <img src="https://img.icons8.com/color/48/000000/camera-pokemon.png" />{" "}
            Pokédex
          </NavbarBrand>
          <Nav navbar>
            <div style={{ marginRight: "0.5rem" }}>
              <Button size="sm" style={{ marginRight: "1.5rem" }} outline>
                <NavLink href="/caught-pokemons/">See Caught Items</NavLink>
              </Button>
              <Button size="sm" outline>
                <NavLink href="/caught-pokemons/">Dark</NavLink>
              </Button>
            </div>
          </Nav>
        </div>
      </Navbar>
    </div>
  );
}
