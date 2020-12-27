import React from "react";
import { Link } from "react-router-dom";

const checkDarkState = require("../../utils");

export default function NoPokemon({ isDark }) {
  return (
    <div style={{ minHeight: "60vh" }}>
      <h4>
        There is currently no pokemons here.{" "}
        <span tag={Link} to="/">
          Go and catch
        </span>{" "}
        some.
      </h4>
    </div>
  );
}
