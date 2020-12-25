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

export function filterPokemons(id, pokemons) {
  const filteredPokemons = pokemons.filter((item) => {
    return item.id === id;
  });
}

export const renderAbilities = (arr, index) => {
  if (arr.length > 0) {
    let abilities = arr.map((item) => {
      return item.ability.name;
    });

    return abilities.join(", ");
  }
  return null;
};

export const renderTypes = (arr, index) => {
  if (arr.length) {
    let types = arr.map((item) => {
      return item.type.name;
    });

    return types.join(", ");
  }

  return null;
};

export const renderMoves = (arr, index) => {
  if (arr.length) {
    let moves = arr.map((item) => {
      return item.move.name;
    });

    return moves.join(", ");
  }

  return null;
};

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
