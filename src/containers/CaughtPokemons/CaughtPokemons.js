import React from "react";
import Caught from "../../components/Caught";
import { Container } from "reactstrap";

export default function CaughtPokemons() {
  return (
    <div>
      <Container>
        <h1>Caught Pokemons</h1>
        <Caught />
      </Container>
    </div>
  );
}
