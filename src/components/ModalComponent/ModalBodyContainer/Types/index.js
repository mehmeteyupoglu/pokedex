import React from "react";

export default function Types({ pokemon, renderTypes }) {
  return (
    <div>
      <p className="text-capitalize">
        <strong>Types: </strong>
        {renderTypes(pokemon.types)}
      </p>
    </div>
  );
}
