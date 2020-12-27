import React from "react";

import CardHeader from "./CardHeader";
import CardText from "./CardText";
import CardImage from "./CardImage";
import CardActions from "./CardActions";

export default function PokemonCard() {
  return (
    <div>
      <CardHeader />
      <CardImage />
      <CardText />
      <CardActions />
    </div>
  );
}
