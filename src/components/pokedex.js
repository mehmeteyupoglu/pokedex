import React, { useEffect, useState } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardHeader,
  CardTitle,
  CardSubtitle,
  Button,
  Container,
  Row,
  Col,
  Spinner,
} from "reactstrap";

import axios from "axios";

function Pokedex({ props, pokemon }) {
  console.log("Pokedex prop: ", pokemon);
  return (
    <div>
      <Container>
        <Row className="d-flex flex-wrap">
          {pokemon.map((item) => {
            return (
              <div className="d-flex flex-wrap">
                <Col>
                  <Card
                    style={{
                      margin: "10px",
                      height: "35rem",
                      width: "20rem",
                      boxShadow: "1px 1px 2px gray",
                      border: "none",
                    }}
                  >
                    <CardBody>
                      <CardHeader className="text-capitalize">
                        {item.name}
                      </CardHeader>
                    </CardBody>
                    <img
                      width="80%"
                      src={item.sprites.front_default}
                      alt={`Pokemon: ${item.name}`}
                      className="rounded"
                      style={{
                        border: "1px solid rgb(0 0 0 / 13%)",
                        margin: "auto",
                      }}
                    />
                    <CardBody>
                      <CardText>Weight: {item.weight}</CardText>
                      <CardText>Height: {item.height}</CardText>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Button color="primary" size="sm" outline>
                          Details
                        </Button>
                        <Button color="success" size="sm">
                          Catch
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </div>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default Pokedex;
