import React from "react";
import { imgContainerStyle, imgStyle } from "./style";

export default function CardImage({ item }) {
  return (
    <div style={imgContainerStyle}>
      <img
        width="60%"
        src={item}
        alt={`Pokemon: ${item}`}
        className="rounded"
        style={imgStyle}
      />
    </div>
  );
}
