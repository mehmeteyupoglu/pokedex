//Packages
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Card,
  CardBody,
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

import { catchAndRelease } from "../constants";
import { cardStyle, darkCardStyle } from "../style";

import CardHeader from "../PokemonCard/CardHeader";
import CardSubheader from "../PokemonCard/CardSubheader";
import CardImage from "../PokemonCard/CardImage";
import CardText from "../PokemonCard/CardText";
import CardActions from "../PokemonCard/CardActions";
import Notification from "../Notification";
import ModalComponent from "../ModalComponent";

const { checkDarkState } = require("../utils");

function Pokedex({ props, pokemonData }) {
  const appReducer = useSelector((state) => state.appReducer);

  const { isDark, notification, itemId, modal } = appReducer;

  console.log("app reducer", appReducer);
  console.log("modal ", modal);

  return (
    <div>
      <Container>
        <Notification notification={notification} isDark={isDark} />
        <Row className="d-flex flex-wrap">
          {pokemonData.map((item, index) => {
            return (
              <div key={index}>
                <Col>
                  <Card
                    style={checkDarkState(isDark, darkCardStyle, cardStyle)}
                  >
                    <CardHeader item={item} isDark={isDark} />
                    <CardSubheader item={item} />

                    <CardImage
                      item={item.sprites.front_default}
                      isDark={isDark}
                    />
                    <CardBody tag="h6">
                      <CardText item={item} />
                      <CardActions
                        item={item}
                        catchAndRelease={catchAndRelease}
                      />
                    </CardBody>
                  </Card>
                </Col>
              </div>
            );
          })}
        </Row>
        {pokemonData
          .filter((item) => {
            return item.id === itemId;
          })
          .map((pokemon, index) => {
            return (
              <ModalComponent
                pokemon={pokemon}
                index={index}
                isDark={isDark}
                modal={modal}
              />
            );
          })}
      </Container>
    </div>
  );
}

export default Pokedex;
