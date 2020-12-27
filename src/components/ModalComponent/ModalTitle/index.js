import React from "react";
import { ModalHeader } from "reactstrap";
import { useDispatch } from "react-redux";
import { darkModalHeader } from "./style";

const { checkDarkState } = require("../../utils");

export default function ModalTitle({ pokemon, isDark }) {
  const dispatch = useDispatch();

  const toggle = () =>
    dispatch({
      type: "SET_MODAL",
    });
  return (
    <div>
      <ModalHeader
        toggle={toggle}
        className="text-muted text-capitalize"
        style={checkDarkState(isDark, darkModalHeader, null)}
      >
        {pokemon.name}
      </ModalHeader>
    </div>
  );
}
