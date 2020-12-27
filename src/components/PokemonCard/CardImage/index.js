import React from "react";
import { imgContainerStyle, imgStyle } from "./style";

export default function CardImage({ item, isDark }) {
  return (
    <div style={imgContainerStyle}>
      <img
        width="60%"
        src={item}
        alt={`Pokemon: ${item.name}`}
        className="rounded"
        style={imgStyle(isDark)}
      />
    </div>
  );
}
