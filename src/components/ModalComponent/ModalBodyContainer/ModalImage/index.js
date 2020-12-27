import React from "react";

export default function ModalImage({ pokemon }) {
  return (
    <div>
      <img
        src={pokemon.sprites.front_default}
        alt={`Pokemon: ${pokemon.name}`}
        className="rounded"
      />
    </div>
  );
}
