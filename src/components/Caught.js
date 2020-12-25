// Import packages

import React, { useState } from "react";
import { Link } from "react-router-dom";
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
import { faStar } from "@fortawesome/free-solid-svg-icons";

// Import local files
import { renderAbilities, catchAndRelease } from "../helper/pokemonFunctions";
import poke from "../assets/pokemon.png";
import { cardStyle, darkCardStyle, styledButton } from "./style";

export default function Caught() {
  const pokemonStore = useSelector((state) => state.pokemonReducer);
  const isDark = useSelector((state) => state.appReducer.isDark);
  const dispatch = useDispatch();

  return (
    <div>
      <hr color={isDark ? "#505863" : null} />
      {pokemonStore.length < 1 ? (
        <h4>
          There is currently no pokemons here.{" "}
          <span tag={Link} to="/">
            Go and catch
          </span>{" "}
          some.
        </h4>
      ) : (
        <Row className="d-flex flex-wrap">
          {pokemonStore.map((item, index) => {
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
                      src={item.img}
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
                          color={catchAndRelease.release.color}
                          size="sm"
                          onClick={() =>
                            dispatch({
                              type: "RELEASE_POKEMON",
                              payload: item.id,
                            })
                          }
                        >
                          Release
                        </Button>
                        <div
                          style={styledButton}
                          onClick={() => {
                            dispatch({
                              type: item.isFavorite
                                ? "REMOVE_FROM_FAVORITES"
                                : "ADD_TO_FAVORITES",
                              payload: item.id,
                            });
                          }}
                        >
                          <FontAwesomeIcon
                            icon={faStar}
                            color={item.isFavorite ? "orange" : "gray"}
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
      )}
    </div>
  );
}
