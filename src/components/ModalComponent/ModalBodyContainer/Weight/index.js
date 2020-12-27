import React from "react";

export default function Weight({ pokemon }) {
  return (
    <div>
      <p>
        <strong>Weight: </strong>
        {pokemon.weight}
      </p>
    </div>
  );
}
