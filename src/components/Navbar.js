import React, { useState } from "react";
import { Navbar, NavbarBrand, Button, Nav, Badge } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { navbar, darkNavbar } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export default function CustomNavbar({ props }) {
  const [dark, setDark] = useState(false);

  const dispatch = useDispatch();

  const isDark = useSelector((state) => state.appReducer.isDark);

  return (
    <div>
      <Navbar color="dark" dark style={isDark ? darkNavbar : navbar}>
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
            <div style={{ marginRight: "2rem" }}>
              <Button
                color="danger"
                style={{ cursor: "pointer", marginRight: "1rem" }}
                tag={Link}
                to="/caught-pokemons"
              >
                Caught Pokemons
              </Button>

              <Badge
                pill
                color="light"
                onClick={() => dispatch({ type: "CHANGE_THEME" })}
              >
                <FontAwesomeIcon
                  icon={isDark ? faSun : faCloudMoon}
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
