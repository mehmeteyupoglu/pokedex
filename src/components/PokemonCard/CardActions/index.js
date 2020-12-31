//Packages
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";

//Local Files
import { cardActionStyle } from "./style";

import { isPokemonCaught } from "../../utils";

export default function CardActions({ item, catchAndRelease }) {
  const pokemonStore = useSelector((state) => state.pokemonReducer);
  const dispatch = useDispatch();

  const setModal = () => {
    dispatch({
      type: "SET_MODAL",
    });
  };

  const setId = (item) => {
    dispatch({
      type: "SET_ID",
      payload: item.id,
    });
  };

  const setNotification = () => {
    dispatch({
      type: "SET_NOTIFICATION",
    });
  };

  const handleClick = (item) => {
    dispatch({
      type: catchAndRelease.catch.type,
      payload: item,
    });
  };

  const showNotification = () => {
    setNotification();

    setTimeout(function () {
      setNotification();
    }, 750);
  };

  const disableButton = (item) => {
    let id = item.id;
    let result = isPokemonCaught(id, pokemonStore);
    return result ? true : false;
  };
  return (
    <div style={cardActionStyle}>
      <Button
        color="danger mb-10"
        size="sm"
        onClick={() => {
          setId(item);
          setModal();
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
          handleClick(item);
          showNotification();
        }}
        disabled={disableButton(item)}
      >
        Catch
      </Button>
    </div>
  );
}
