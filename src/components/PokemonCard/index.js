import React from "react";

import CardHeader from "./CardHeader";
import CardSubtitle from "./CardSubtitle";
import CardText from "./CardText";
import CardImage from "./CardImage";
import CardActions from "./CardActions";

export default function PokemonCard() {
  return (
    <div>
      <CardHeader />
      <CardSubtitle />
      <CardImage />
      <CardText />
      <CardActions />
    </div>
  );
}
