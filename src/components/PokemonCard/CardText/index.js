import React from "react";
import { renderAbilities } from "../../utils";
import { textStyle, textHeader, textContainer } from "./style";

export default function CardText({ item }) {
  return (
    <div className="blockquote " style={textStyle}>
      <div style={textContainer}>
        <div style={textHeader}>Weight</div>: {(" ", item.weight)}
      </div>
      <div style={textContainer}>
        <div style={textHeader}>Height</div>: {(" ", item.height)}
      </div>
      <div style={textContainer}>
        <div style={textHeader}>Abilities</div>:{" "}
        <div className="text-capitalize ml-1">
          {renderAbilities(item.abilities)}
        </div>
      </div>
    </div>
  );
}
