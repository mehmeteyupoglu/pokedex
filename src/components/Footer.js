import React from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  Col,
  Row,
  Container,
  NavbarText,
} from "reactstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { footer, darkFooter } from "./style";

export default function CustomNavbar({ props }) {
  const isDark = useSelector((state) => state.appReducer.isDark);

  return (
    <div>
      <Navbar color="dark" dark style={isDark ? darkFooter : footer}>
        <Container>
          <Row className="d-flex justify-content-center">
            <Col className="col-md-auto">
              <NavbarText>
                Deployed with{" "}
                <span
                  className="font-weight-bold mr-2
            "
                  style={{
                    color: "white",
                  }}
                >
                  Netlify
                </span>
                <p>
                  Created by{" "}
                  <a href="https://github.com/mehmeteyupoglu" target="_blank">
                    Mehmet Eyupoglu
                  </a>
                </p>
              </NavbarText>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </div>
  );
}
