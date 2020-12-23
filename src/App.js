import React, { useState, useEffect } from "react";
import { Spinner, Row, Col } from "reactstrap";
import Pokedex from "./components/pokedex";
import "./App.css";
import {
  getAllPokemon,
  getIndividualPokemons,
} from "./helper/pokemonFunctions";

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const initialUrl = "https://pokeapi.co/api/v2/pokemon";

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(initialUrl);
      console.log(response);
      let pokemon = await loadPokemon(response.results);
      console.log(pokemon);
      setLoading(false);
    }
    fetchData();
  }, []);

  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      data.map(async (pokemon) => {
        let pokemonData = await getIndividualPokemons(pokemon.url);
        return pokemonData;
      })
    );
    setPokemonData(_pokemonData);
  };
  console.log(pokemonData);
  return (
    <div className="App">
      {loading ? (
        <div className="d-flex align-items-center">
          <Spinner
            type="grow"
            color="secondary"
            style={{ width: "10rem", height: "10rem" }}
            className="align-self-center"
          />
        </div>
      ) : (
        <Pokedex pokemon={pokemonData} />
      )}
    </div>
  );
}

export default App;
