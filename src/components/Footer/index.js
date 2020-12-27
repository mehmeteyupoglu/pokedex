//Packages
import React from "react";
import { Navbar, Col, Row, Container, NavbarText } from "reactstrap";
import { useSelector } from "react-redux";

//Local files
import { footer, darkFooter } from "../style";

export default function CustomNavbar({ props }) {
  const isDark = useSelector((state) => state.appReducer.isDark);

  return (
    <div>
      <Navbar color="dark" dark style={isDark ? darkFooter : footer}>
        <Container>
          <Row className="d-flex justify-content-center">
            <Col className="col-md-auto">
              <NavbarText>
                <p>
                  Created by{" "}
                  <span
                    className="font-weight-bold mr-2
            "
                    style={{
                      color: "white",
                    }}
                  >
                    <a href="https://github.com/mehmeteyupoglu" target="_blank">
                      Mehmet Eyupoglu
                    </a>
                  </span>{" "}
                </p>
              </NavbarText>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </div>
  );
}
