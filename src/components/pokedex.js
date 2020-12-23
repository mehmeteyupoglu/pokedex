import React, { useEffect, useState } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardHeader,
  CardTitle,
  CardSubtitle,
  Alert,
  Button,
  Container,
  Row,
  Col,
  Spinner,
} from "reactstrap";

import axios from "axios";

function Pokedex({ props, pokemon }) {
  const renderAbilities = (arr, index) => {
    let abilities = arr.map((item) => {
      return item.ability.name;
    });

    return abilities.join(", ");
  };
  console.log("Pokedex prop: ", pokemon);
  return (
    <div>
      <Container>
        <Row className="d-flex justify-content-between flex-wrap">
          {pokemon.map((item, index) => {
            return (
              <div key={index}>
                <Col>
                  <Card style={cardStyle}>
                    <CardBody>
                      <Alert color="info text-capitalize">{item.name}</Alert>
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
                    <CardBody
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                        className="blockquote "
                      >
                        <p>
                          <strong>Weight: </strong>
                          {item.weight}
                        </p>
                        <p>
                          <strong>Height: </strong>
                          {item.height}
                        </p>
                      </div>

                      <div className="blockquote ">
                        <p className="text-capitalize">
                          <strong>Abilities: </strong>
                          {renderAbilities(item.abilities)}
                        </p>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Button color="info mb-10" size="sm" outline>
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

const cardStyle = {
  margin: "10px",
  height: "35rem",
  width: "20rem",
  boxShadow: "1px 1px 2px gray",
  border: "none",
  cursor: "pointer",
  ":hover": {
    color: "black",
  },
};

export default Pokedex;
