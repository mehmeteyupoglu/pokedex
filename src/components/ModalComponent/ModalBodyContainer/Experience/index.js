import React from "react";

export default function Experience({ pokemon }) {
  return (
    <div>
      <p className="text-capitalize">
        <strong>Experience: </strong>
        {pokemon.base_experience}
      </p>
    </div>
  );
}
