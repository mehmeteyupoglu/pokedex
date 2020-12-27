import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "reactstrap";
import { cardActionStyle } from "./style";

export default function CardActions({ item, catchAndRelease }) {
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
  return (
    <div>
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
        >
          Catch
        </Button>
      </div>
    </div>
  );
}
