//Packages

import React, { useState } from "react";
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
} from "reactstrap";

//Local Files
import poke from "../assets/pokemon.png";
import {
  renderAbilities,
  renderTypes,
  renderMoves,
  catchAndRelease,
} from "../helper/pokemonFunctions";

import {
  cardStyle,
  darkCardStyle,
  darkModalBody,
  modalBody,
  darkModalHeader,
} from "./style";

function Pokedex({ props, pokemonData }) {
  const isDark = useSelector((state) => state.appReducer.isDark);
  const dispatch = useDispatch();
  const [notification, setNotification] = useState(false);
  const [currentId, setId] = useState(0);
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  //When you catch a pokemon this functions handles the notification
  const showNotification = () => {
    setNotification(true);

    setTimeout(function () {
      setNotification(false);
    }, 750);
  };

  return (
    <div>
      <Container>
        <Modal isOpen={notification}>
          <Alert color={isDark ? "dark" : "success"}>
            Caught Successfully!
          </Alert>
        </Modal>
        <Row className="d-flex flex-wrap">
          {pokemonData.map((item, index) => {
            return (
              <div key={index}>
                <Col>
                  <Card style={isDark ? darkCardStyle : cardStyle}>
                    <CardBody
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Alert color={isDark ? "secondary" : "info"}>
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
                        border: "1px solid ",
                        borderColor: isDark ? "#505863" : "rgb(0 0 0 / 13%)",
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
                        {/* Update redux when the pokemon catched. dex record is set in redux */}
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
          .map((pokemon, index) => {
            return (
              <Modal isOpen={modal} toggle={toggle} key={index}>
                <ModalHeader
                  toggle={toggle}
                  className="text-muted text-capitalize"
                  style={isDark ? darkModalHeader : null}
                >
                  {pokemon.name}
                </ModalHeader>
                <ModalBody style={isDark ? darkModalBody : modalBody}>
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
              </Modal>
            );
          })}
      </Container>
    </div>
  );
}

export default Pokedex;
