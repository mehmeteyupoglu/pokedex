// Import packages
import React from "react";
import { Card, CardBody, Button, Row, Col } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

// Import local files
import { catchAndRelease } from "../constants";
import { cardStyle, darkCardStyle, styledButton } from "../style";
import { cardActionStyle } from "../PokemonCard/CardActions/style";

// Components
import NoPokemon from "./NoPokemon";
import CardHeader from "../PokemonCard/CardHeader";
import CardSubheader from "../PokemonCard/CardSubheader";
import CardImage from "../PokemonCard/CardImage";
import CardText from "../PokemonCard/CardText";

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
          <div key={index}>
            <Col>
              <Card style={checkDarkState(isDark, darkCardStyle, cardStyle)}>
                <CardHeader item={item} isDark={isDark} />
                <CardSubheader item={item} />

                <CardImage item={item.img} isDark={isDark} />
                <CardBody tag="h6">
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
  );

  return (
    <div>
      <h1>Caught Pokemons</h1>
      <hr color={checkDarkState(isDark, "#505863", null)} />

      {pokemonStore.length < 1 ? noPokemon : pokemonsCaught}
    </div>
  );
}
