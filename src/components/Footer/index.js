//Packages
import React from "react";
import { Navbar, Container } from "reactstrap";
import { useSelector } from "react-redux";

//Local files
import { footer, darkFooter } from "./style";
import FooterLeft from "./FooterLeft";

import { checkDarkState } from "../utils";

export default function Footer() {
  const isDark = useSelector((state) => state.appReducer.isDark);

  return (
    <div>
      <Navbar
        color="dark"
        dark
        style={checkDarkState(isDark, darkFooter, footer)}
      >
        <Container>
          <FooterLeft />
        </Container>
      </Navbar>
    </div>
  );
}
