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
  let abilities = arr.map((item) => {
    return item.ability.name;
  });

  return abilities.join(", ");
};

export const renderTypes = (arr, index) => {
  let types = arr.map((item) => {
    return item.type.name;
  });

  return types.join(", ");
};

export const renderMoves = (arr, index) => {
  let moves = arr.slice(0, 10).map((item) => {
    return item.move.name;
  });

  return moves.join(", ");
};
