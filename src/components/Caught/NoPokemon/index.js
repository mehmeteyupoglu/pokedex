import React from "react";
import { Link } from "react-router-dom";
// import { noPokemonStyle } from "./style";

export default function NoPokemon({ isDark }) {
  return (
    <div>
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
