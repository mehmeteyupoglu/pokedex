import React, { useState, useEffect } from "react";
import { Spinner, Container } from "reactstrap";
import Pokedex from "./components/Pokedex";
import Navbar from "./components/Navbar";
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
      try {
        let response = await getAllPokemon(initialUrl);
        console.log(response);
        let pokemon = await loadPokemon(response.results);
        console.log(pokemon);
        setLoading(false);
      } catch (error) {
        console.log("error", error);
      }
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
            color="info"
            style={{ width: "10rem", height: "10rem" }}
            className="align-self-center"
          />
        </div>
      ) : (
        <div>
          <Navbar />
          <div className="mt-10">
            <Pokedex pokemon={pokemonData} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
