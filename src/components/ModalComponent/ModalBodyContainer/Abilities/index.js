import React from "react";

export default function Abilities({ pokemon, renderAbilities }) {
  return (
    <div>
      <p className="text-capitalize">
        <strong>Abilities: </strong>
        {renderAbilities(pokemon.abilities)}
      </p>
    </div>
  );
}
