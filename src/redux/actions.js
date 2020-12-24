export const catchPokemon = (content) => {
  return {
    type: "CATCH_POKEMON",
    payload: content,
  };
};

export const releasePokemon = (content) => {
  return {
    type: "RELEASE_POKEMON",
    payload: content,
  };
};

export const addToFavorites = (content) => {
  return {
    type: "ADD_TO_FAVORITES",
    payload: content,
  };
};

export const removeFromFavorites = (content) => {
  return {
    type: "REMOVE_FROM_FAVORITES",
    payload: content,
  };
};
