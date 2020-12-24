import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
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

import poke from "../assets/pokemon.png";

function Pokedex({ props, pokemon }) {
  const pokemons = useSelector((state) => state.pokemonReducer);
  const dispatch = useDispatch();

  const renderAbilities = (arr, index) => {
    let abilities = arr.map((item) => {
      return item.ability.name;
    });

    return abilities.join(", ");
  };
  console.log("Pokemon store: ", pokemons);
  return (
    <div>
      <Container>
        <Row className="d-flex justify-content-between flex-wrap">
          {pokemon.map((item, index) => {
            return (
              <div key={index}>
                <Col>
                  <Card style={cardStyle}>
                    <CardBody
                      style={{
                        display: "flex",

                        justifyContent: "space-between",
                      }}
                    >
                      <Alert color="info ">
                        <img width="30%" src={poke} alt={item.name} />
                      </Alert>
                    </CardBody>
                    <CardBody>
                      <CardSubtitle
                        tag="h6"
                        className="mb-2 text-muted text-capitalize"
                      >
                        {item.name}
                      </CardSubtitle>
                    </CardBody>
                    <img
                      width="60%"
                      src={item.sprites.front_default}
                      alt={`Pokemon: ${item.name}`}
                      className="rounded"
                      style={{
                        margin: "auto",
                        border: "1px solid rgb(0 0 0 / 13%)",
                      }}
                    />
                    <CardBody
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                      tag="h6"
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          fontSize: "1em",
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
                        <Button
                          color="danger mb-10"
                          size="sm"
                          outline
                          onClick={() =>
                            dispatch({
                              type: "RELEASE_POKEMON",
                              payload: item.id,
                            })
                          }
                        >
                          Pokédex
                        </Button>
                        <Button
                          color="success"
                          size="sm"
                          onClick={() =>
                            dispatch({
                              type: "CATCH_POKEMON",
                              payload: item,
                            })
                          }
                        >
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
  "&:hover": {
    backgroundColor: "blue",
  },
};

export default Pokedex;
