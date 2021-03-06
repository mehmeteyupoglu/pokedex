const checkDarkState = (isDark, darkMode, lightMode) => {
  return isDark ? darkMode : lightMode;
};

const renderAbilities = (arr) => {
  if (arr.length > 0) {
    let abilities = arr.map((item) => {
      return item.ability.name;
    });

    return abilities.join(", ");
  }
  return null;
};

const renderTypes = (arr) => {
  if (arr.length) {
    let types = arr.map((item) => {
      return item.type.name;
    });

    return types.join(", ");
  }

  return null;
};

const renderMoves = (arr) => {
  if (arr.length) {
    let moves = arr.map((item) => {
      return item.move.name;
    });

    return moves.join(", ");
  }

  return null;
};

// const filterPokemons = (id, pokemons) => {
//   const filteredPokemons = pokemons.filter((item) => {
//     return item.id === id;
//   });
//   return filteredPokemons;
// };

const isPokemonCaught = (id, pokemonStore) => {
  var found = false;
  for (var i = 0; i < pokemonStore.length; i++) {
    if (pokemonStore[i].id == id) {
      found = true;
      break;
    }
  }

  return found;
};

module.exports = {
  checkDarkState,
  renderAbilities,
  renderTypes,
  renderMoves,
  isPokemonCaught,
};
