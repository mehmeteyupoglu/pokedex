//Packages
import React, { useState, useEffect } from "react";
import { Container, Spinner, Row, Col } from "reactstrap";

//Local Files
import Pokedex from "../../components/Pokedex";
import { spinnerStyle, styledContainer } from "./style";

import {
  getAllPokemon,
  getIndividualPokemons,
} from "../../helper/pokemonFunctions";

export default function Home(props) {
  const [error, setError] = useState();
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

        setLoading(false);
      } catch (error) {
        setError(
          "Error while retrieving data " + error + ". Please check your network"
        );
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
        <Container
          style={styledContainer}
          className="d-flex align-items-center justify-content-center"
        >
          <Row>
            <Col>
              <Spinner
                style={spinnerStyle}
                type="grow"
                color={error ? "danger" : "info"}
              />
              {error && <p>{error}</p>}
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
