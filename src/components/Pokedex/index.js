//Packages
import React from "react";
import { useSelector } from "react-redux";
import { Card, CardBody, Container, Row, Col } from "reactstrap";

//Local Files
import { catchAndRelease } from "../constants";
import {
  cardBottomStyle,
  cardStyle,
  darkCardStyle,
} from "../PokemonCard/style";

//Components
import CardHeader from "../PokemonCard/CardHeader";
import CardImage from "../PokemonCard/CardImage";
import CardText from "../PokemonCard/CardText";
import CardActions from "../PokemonCard/CardActions";
import Notification from "../Notification";
import ModalComponent from "../ModalComponent";
import { colStyle } from "../PokemonCard/style";

import { checkDarkState } from "../utils";

function Pokedex({ props, pokemonData }) {
  const appReducer = useSelector((state) => state.appReducer);
  const { isDark, notification, itemId, modal } = appReducer;

  return (
    <div>
      <Container>
        <Notification notification={notification} isDark={isDark} />
        <Row className="d-flex flex-wrap">
          {pokemonData.map((item, index) => {
            return (
              <Col key={index} lg="4" md="6" style={colStyle}>
                <Card style={checkDarkState(isDark, darkCardStyle, cardStyle)}>
                  <CardHeader item={item} isDark={isDark} />

                  <CardImage item={item.sprites.front_default} />
                  <div style={cardBottomStyle}>
                    <CardText item={item} />
                    <CardActions
                      item={item}
                      catchAndRelease={catchAndRelease}
                    />
                  </div>
                </Card>
              </Col>
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
