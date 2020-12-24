import React, { useState, useEffect } from "react";
import { Spinner } from "reactstrap";

import Pokedex from "../../components/Pokedex";
import {
  getAllPokemon,
  getIndividualPokemons,
} from "../../helper/pokemonFunctions";

export default function Home() {
  const [pokemonData, setPokemonData] = useState([]);
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

  console.log("pokemons ", pokemonData);

  return (
    <div>
      {loading ? (
        <Spinner
          style={{ width: "8rem", height: "8rem" }}
          type="grow"
          color="info"
        />
      ) : (
        <Pokedex pokemonData={pokemonData} />
      )}
    </div>
  );
}
