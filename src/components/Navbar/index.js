//Packages
import React from "react";
import { Navbar } from "reactstrap";
import { useSelector } from "react-redux";

//Local files
import { navbar, darkNavbar } from "./style";
import { navbarRightStyle } from "./style";
import NavbarButton from "./NavbarButton";
import DarkModeButton from "./DarkModeButton";
import Brand from "./Brand";

import { checkDarkState } from "../utils";

export default function CustomNavbar() {
  const isDark = useSelector((state) => state.appReducer.isDark);

  return (
    <div>
      <Navbar
        color="dark"
        dark
        style={checkDarkState(isDark, darkNavbar, navbar)}
      >
        <div className="container ">
          <Brand />
          <div style={navbarRightStyle}>
            <NavbarButton />
            <DarkModeButton isDark={isDark} />
          </div>
        </div>
      </Navbar>
    </div>
  );
}
