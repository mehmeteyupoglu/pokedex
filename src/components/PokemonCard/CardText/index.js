import React from "react";
import { renderAbilities } from "../../utils";
import { textStyle } from "./style";

export default function CardText({ item }) {
  return (
    <div className="blockquote " style={textStyle}>
      <p>
        <strong>Weight: </strong>
        {item.weight}
      </p>
      <p>
        <strong>Height: </strong>
        {item.height}
      </p>
      <p className="text-capitalize">
        <strong>Abilities: </strong>
        {renderAbilities(item.abilities)}
      </p>
    </div>
  );
}
