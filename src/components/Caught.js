// Import packages

import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardSubtitle,
  Alert,
  Button,
  Row,
  Col,
  Modal,
} from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCheck } from "@fortawesome/free-solid-svg-icons";

// Import local files
import { renderAbilities, catchAndRelease } from "../helper/pokemonFunctions";
import poke from "../assets/pokemon.png";
import { cardStyle, styledButton } from "./style";

export default function Caught() {
  const pokemonStore = useSelector((state) => state.pokemonReducer);
  const dispatch = useDispatch();
  const [notification, setNotification] = useState(false);

  const showNotification = () => {
    setNotification(true);

    setTimeout(function () {
      setNotification(false);
    }, 1000);
  };

  return (
    <div>
      <Row className="d-flex flex-wrap">
        {pokemonStore.map((item, index) => {
          return (
            <div key={index}>
              <Col>
                <Modal isOpen={notification}>
                  <Alert color="success text-capitalize">
                    {" "}
                    {item.isFavorite
                      ? item.name + " is removed from the favorites"
                      : item.name + " added to the favorites"}
                  </Alert>
                </Modal>
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
                      <Button
                        color={catchAndRelease.release.color}
                        size="sm"
                        onClick={() =>
                          dispatch({
                            type: catchAndRelease.release.type,
                            payload: item.id,
                          })
                        }
                      >
                        Release
                      </Button>
                      <div
                        style={styledButton()}
                        onClick={() => {
                          dispatch({
                            type: item.isFavorite
                              ? "REMOVE_FROM_FAVORITES"
                              : "ADD_TO_FAVORITES",
                            payload: item.id,
                          });
                          showNotification();
                        }}
                      >
                        <FontAwesomeIcon
                          icon={item.isFavorite ? faCheck : faPlus}
                        />
                      </div>
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
