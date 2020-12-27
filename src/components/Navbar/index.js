//Packages
import React from "react";
import { Navbar, NavbarBrand, Button, Nav, Badge } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

//Local files
import { navbar, darkNavbar } from "../style";
import cameraPokemon from "../../assets/cameraPokemon.png";

const checkDarkState = require("../utils");

export default function CustomNavbar({ props }) {
  const dispatch = useDispatch();
  const isDark = useSelector((state) => state.appReducer.isDark);

  //Current path is needed for dynamic button. See Catch and Caught buttons below
  const currentPath = useLocation();

  const handleClick = () => {
    dispatch({ type: "CHANGE_THEME" });
  };

  return (
    <div>
      <Navbar
        color="dark"
        dark
        style={checkDarkState(isDark, darkNavbar, navbar)}
      >
        <div className="container ">
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
          <Nav navbar>
            <div style={{ marginRight: "2rem" }}>
              {currentPath.pathname === "/caught-pokemons" ? (
                <Button color="danger" style={btnStyle} tag={Link} to="/">
                  Catch Pokemons
                </Button>
              ) : (
                <Button
                  color="danger"
                  style={btnStyle}
                  tag={Link}
                  to="/caught-pokemons"
                >
                  Caught Pokemons
                </Button>
              )}

              <Badge pill color="light" onClick={() => handleClick()}>
                <FontAwesomeIcon
                  icon={checkDarkState(isDark, faSun, faMoon)}
                  color="orange"
                  style={{ cursor: "pointer", fontSize: "1rem" }}
                />
              </Badge>
            </div>
          </Nav>
        </div>
      </Navbar>
    </div>
  );
}

const btnStyle = {
  cursor: "pointer",
  marginRight: "1rem",
};
