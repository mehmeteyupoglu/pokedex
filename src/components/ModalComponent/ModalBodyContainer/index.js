import React from "react";
import { ModalBody } from "reactstrap";
import { modalBody, darkModalBody } from "./style";
import ModalImage from "./ModalImage";
import Abilities from "./Abilities";
import Experience from "./Experience";
import Types from "./Types";
import Weight from "./Weight";
import Height from "./Height";
import Moves from "./Moves";

const {
  checkDarkState,
  renderAbilities,
  renderTypes,
  renderMoves,
} = require("../../utils");

export default function ModalBodyContainer({ pokemon, isDark }) {
  return (
    <div>
      <ModalBody style={checkDarkState(isDark, darkModalBody, modalBody)}>
        <ModalImage pokemon={pokemon} />

        <div
          style={{
            marginLeft: "2rem",
          }}
        >
          <Abilities pokemon={pokemon} renderAbilities={renderAbilities} />
          <Types pokemon={pokemon} renderTypes={renderTypes} />
          <Moves pokemon={pokemon} renderMoves={renderMoves} />
          <Experience pokemon={pokemon} />
          <Weight pokemon={pokemon} />
          <Height pokemon={pokemon} />
        </div>
      </ModalBody>
    </div>
  );
}
