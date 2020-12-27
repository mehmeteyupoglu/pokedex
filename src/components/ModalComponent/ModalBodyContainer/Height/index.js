import React from "react";

export default function Height({ pokemon }) {
  return (
    <div>
      <p>
        <strong>Height: </strong>
        {pokemon.height}
      </p>
    </div>
  );
}
