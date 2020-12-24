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
