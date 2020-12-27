//Packages
import React, { useState, useEffect } from "react";
import { Container, Spinner, Row, Col } from "reactstrap";

//Local Files
import Pokedex from "../../components/Pokedex";
import {
  getAllPokemon,
  getIndividualPokemons,
} from "../../helper/pokemonFunctions";
import { spinnerStyle, styledContainer } from "./style";

export default function Home(props) {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const number = 20;
  const initialUrl = `https://pokeapi.co/api/v2/pokemon?offset=300&limit=${number}`;

  //Retrives data with the help of helper functions and fetchData()
  useEffect(() => {
    async function fetchData() {
      try {
        let response = await getAllPokemon(initialUrl);
        let pokemon = await loadPokemon(response.results);
        console.log("pokemon", pokemon);
        setLoading(false);
      } catch (error) {
        console.log("error", error);
      }
    }
    fetchData();
  }, []);

  //Sets the retrived data to the components state
  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      data.map(async (pokemon) => {
        let pokemonData = await getIndividualPokemons(pokemon.url);
        return pokemonData;
      })
    );
    setPokemonData(_pokemonData);
  };

  if (loading) {
    return (
      <div>
        <Container style={styledContainer}>
          <Row>
            <Col>
              <Spinner style={spinnerStyle} type="grow" color="danger" />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
  return (
    <div>
      <Pokedex pokemonData={pokemonData} />
    </div>
  );
}
