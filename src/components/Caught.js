import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardSubtitle,
  Alert,
  Button,
  Container,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

import {
  filteredPokemons,
  renderAbilities,
  renderTypes,
  renderMoves,
  catchAndRelease,
} from "../helper/pokemonFunctions";

import poke from "../assets/pokemon.png";

import { cardStyle } from "./style";

import { useSelector, useDispatch } from "react-redux";

export default function Caught() {
  const pokemonStore = useSelector((state) => state.pokemonReducer);
  const dispatch = useDispatch();
  return (
    <div>
      <Row className="d-flex flex-wrap">
        {pokemonStore.map((item, index) => {
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
                    src={item.img}
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
                      {/* <Button
                        color={catchAndRelease.catch.color}
                        size="sm"
                        onClick={() =>
                          dispatch({
                            type: catchAndRelease.catch.type,
                            payload: item,
                          })
                        }
                      >
                        Catch
                      </Button> */}
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </div>
          );
        })}
      </Row>
    </div>
  );
}
