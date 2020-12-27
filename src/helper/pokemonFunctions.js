//RETRIEVE DATA FROM THE API

export async function getAllPokemon(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        resolve(data);
      });
  });
}

export async function getIndividualPokemons(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        resolve(data);
      });
  });
}

//Filters pokemons for pokedex modal
export function filterPokemons(id, pokemons) {
  const filteredPokemons = pokemons.filter((item) => {
    return item.id === id;
  });
}

// Renders types, abiilities, moves of pokemons and list them

export const check = (id, pokemonStore) => {
  var found = false;
  for (var i = 0; i < pokemonStore.length; i++) {
    if (pokemonStore[i].id == id) {
      found = true;
      break;
    }
  }

  return found;
};

export const catchAndRelease = {
  catch: {
    type: "CATCH_POKEMON",
    color: "success",
    text: "Catch",
  },
  release: {
    type: "RELEASE_POKEMON",
    color: "info",
    text: "Release",
  },
};
