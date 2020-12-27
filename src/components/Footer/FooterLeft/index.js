import React from "react";
import { Col, Row, NavbarText } from "reactstrap";

export default function FooterLeft() {
  return (
    <div>
      <Row>
        <Col className="col-md-auto">
          <NavbarText>
            <p>
              Created by{" "}
              <span
                className="font-weight-bold
            "
              >
                <a href="https://github.com/mehmeteyupoglu" target="_blank">
                  Mehmet Eyupoglu
                </a>
              </span>{" "}
            </p>
          </NavbarText>
        </Col>
      </Row>
    </div>
  );
}
