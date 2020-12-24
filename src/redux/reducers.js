export const pokemonReducer = (state = ["pokemonReducerElement"], action) => {
  const item = action.payload;
  switch (action.type) {
    case "CATCH_POKEMON":
      return [
        ...state,
        {
          id: item.id,
          name: item.name,
          weight: item.weight,
          height: item.height,
          img: item.sprites.front_default,
          abilities: item.abilities,
        },
      ];
    default:
      return state;
  }
};
