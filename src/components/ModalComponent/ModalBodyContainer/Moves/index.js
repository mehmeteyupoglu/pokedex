import React from "react";

export default function Moves({ pokemon, renderMoves }) {
  return (
    <div>
      <p className="text-capitalize">
        <strong>Moves: </strong>
        {renderMoves(pokemon.moves)}
      </p>
    </div>
  );
}
