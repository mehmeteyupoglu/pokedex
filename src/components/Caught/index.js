// Import packages
import React from "react";
import { Card, CardBody, Button, Row, Col } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

// Import local files
import { catchAndRelease } from "../constants";
import { styledButton } from "../style";
import {
  cardBottomStyle,
  cardStyle,
  darkCardStyle,
} from "../PokemonCard/style";
import { cardActionStyle } from "../PokemonCard/CardActions/style";
import { colStyle } from "../PokemonCard/style";

// Components
import NoPokemon from "./NoPokemon";
import CardHeader from "../PokemonCard/CardHeader";
import CardImage from "../PokemonCard/CardImage";
import CardText from "../PokemonCard/CardText";
import { caughtStyle } from "./style";

const { checkDarkState, renderAbilities } = require("../utils");

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

  const noPokemon = (
    <div>
      <NoPokemon isDark={isDark} />
    </div>
  );

  const pokemonsCaught = (
    <Row className="d-flex flex-wrap">
      {pokemonStore.map((item, index) => {
        return (
          <Col key={index} lg="4" md="6" style={colStyle}>
            <Card style={checkDarkState(isDark, darkCardStyle, cardStyle)}>
              <CardHeader item={item} isDark={isDark} />

              <CardImage item={item.img} isDark={isDark} />

              <div style={cardBottomStyle}>
                <CardText item={item} />

                <div style={cardActionStyle}>
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
                  <div style={styledButton} onClick={() => handleToggle(item)}>
                    <FontAwesomeIcon
                      icon={faStar}
                      color={checkFavorite(item)}
                    />
                  </div>
                </div>
              </div>
            </Card>
          </Col>
        );
      })}
    </Row>
  );

  return (
    <div style={caughtStyle}>
      <h1>Caught Pokemons</h1>
      <hr color={checkDarkState(isDark, "#505863", null)} />

      {pokemonStore.length < 1 ? noPokemon : pokemonsCaught}
    </div>
  );
}
