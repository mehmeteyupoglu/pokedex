// Import packages

import React from "react";
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
import {
  renderAbilities,
  catchAndRelease,
} from "../../helper/pokemonFunctions";
import poke from "../../assets/pokemon.png";
import { cardStyle, darkCardStyle, styledButton } from "../style";
// import { checkDarkState } from "./utils";

const checkDarkState = require("../utils");

export default function Caught() {
  //Reach data from Redux
  const pokemonStore = useSelector((state) => state.pokemonReducer);
  const isDark = useSelector((state) => state.appReducer.isDark);
  const dispatch = useDispatch();

  const handleClick = (item, type) => {
    dispatch({
      type,
      payload: item.id,
    });
  };

  const handleToggle = (item) => {
    dispatch({
      type: item.isFavorite ? "REMOVE_FROM_FAVORITES" : "ADD_TO_FAVORITES",
      payload: item.id,
    });
  };

  const checkFavorite = (item) => (item.isFavorite ? "orange" : "gray");

  return (
    <div>
      <hr color={checkDarkState(isDark, "#505863", null)} />
      {pokemonStore.length < 1 ? (
        <div style={{ minHeight: "60vh" }}>
          <h4>
            There is currently no pokemons here.{" "}
            <span tag={Link} to="/">
              Go and catch
            </span>{" "}
            some.
          </h4>
        </div>
      ) : (
        <Row className="d-flex flex-wrap">
          {pokemonStore.map((item, index) => {
            return (
              <div key={index}>
                <Col>
                  <Card
                    style={checkDarkState(isDark, darkCardStyle, cardStyle)}
                  >
                    <CardBody
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Alert
                        color={checkDarkState(isDark, "secondary", "info")}
                      >
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
                        borderColor: checkDarkState(
                          "#505863",
                          "rgb(0 0 0 / 13%)"
                        ),
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
                        {/* Update redux when the pokemon released */}
                        <Button
                          color={catchAndRelease.release.color}
                          size="sm"
                          onClick={() =>
                            handleClick(item, catchAndRelease.release.type)
                          }
                        >
                          {catchAndRelease.release.text}
                        </Button>

                        {/* Update redux when the pokemon is marked/unmarked as favorite */}
                        <div
                          style={styledButton}
                          onClick={() => handleToggle(item)}
                        >
                          <FontAwesomeIcon
                            icon={faStar}
                            color={checkFavorite(item)}
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
