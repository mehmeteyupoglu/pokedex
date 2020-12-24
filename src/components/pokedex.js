import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
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
  PopoverHeader,
  PopoverBody,
  UncontrolledPopover,
} from "reactstrap";

import poke from "../assets/pokemon.png";
import {
  filteredPokemons,
  renderAbilities,
  renderTypes,
  renderMoves,
  catchAndRelease,
} from "../helper/pokemonFunctions";

import { cardStyle } from "./style";

function Pokedex({ props, pokemonData, buttonLabel, className }) {
  const pokemonStore = useSelector((state) => state.pokemonReducer);
  const dispatch = useDispatch();
  console.log("pokemonStore: ", pokemonStore);

  const [notification, setNotification] = useState(false);

  const [currentId, setId] = useState(0);
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  console.log(currentId);

  const showNotification = () => {
    setNotification(true);

    setTimeout(function () {
      setNotification(false);
    }, 1750);
  };

  return (
    <div>
      <Container>
        <Modal isOpen={notification}>
          <Alert color="success">Caught Successfully!</Alert>
        </Modal>
        <Row className="d-flex flex-wrap">
          {pokemonData.map((item, index) => {
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
                          onClick={() => {
                            setModal(true);
                            setId(item.id);
                          }}
                        >
                          Pokédex
                        </Button>

                        <Button
                          id={item.id}
                          color={catchAndRelease.catch.color}
                          size="sm"
                          onClick={() => {
                            dispatch({
                              type: catchAndRelease.catch.type,
                              payload: item,
                            });
                            showNotification();
                          }}
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
        {pokemonData
          .filter((item) => {
            return item.id === currentId;
          })
          .map((pokemon) => {
            return (
              <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader
                  toggle={toggle}
                  className="mb-2 text-muted text-capitalize"
                >
                  {pokemon.name}
                </ModalHeader>
                <ModalBody
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "0.75rem",
                  }}
                >
                  <img
                    src={pokemon.sprites.front_default}
                    alt={`Pokemon: ${pokemon.name}`}
                    className="rounded"
                  />
                  <div
                    style={{
                      marginLeft: "2rem",
                    }}
                  >
                    <p className="text-capitalize">
                      <strong>Abilities: </strong>
                      {renderAbilities(pokemon.abilities)}
                    </p>
                    <p className="text-capitalize">
                      <strong>Types: </strong>
                      {renderTypes(pokemon.types)}
                    </p>
                    <p className="text-capitalize">
                      <strong>Moves: </strong>
                      {renderMoves(pokemon.moves)}
                    </p>
                    <p className="text-capitalize">
                      <strong>Experience: </strong>
                      {pokemon.base_experience}
                    </p>
                    <p>
                      <strong>Weight: </strong>
                      {pokemon.weight}
                    </p>
                    <p>
                      <strong>Height: </strong>
                      {pokemon.height}
                    </p>
                  </div>
                </ModalBody>
                <ModalFooter></ModalFooter>
              </Modal>
            );
          })}
        ;
      </Container>
    </div>
  );
}

export default Pokedex;
