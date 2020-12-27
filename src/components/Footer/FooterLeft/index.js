import React from "react";
import { Col, Row, NavbarText } from "reactstrap";
import { footerText } from "../style";

export default function FooterLeft() {
  return (
    <Row>
      <Col>
        <NavbarText>
          <div style={footerText}>
            Created by{" "}
            <span
              className="font-weight-bold 
            "
            >
              {" "}
              <a
                href="https://github.com/mehmeteyupoglu"
                target="_blank"
                className="ml-2"
              >
                Mehmet Eyupoglu
              </a>
            </span>{" "}
          </div>
        </NavbarText>
      </Col>
    </Row>
  );
}
