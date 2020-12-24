const initialState = [];

export const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CATCH_POKEMON":
      alert("catch calisti");
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return item;
        }
        return {
          id: action.payload.id,
          name: action.payload.name,
          weight: action.payload.weight,
          height: action.payload.height,
          img: action.payload.sprites.front_default,
          abilities: action.payload.abilities,
          isFavorite: false,
        };
      });

    // case "RELEASE_POKEMON":
    //   return state.filter((pokemon) => {
    //     return pokemon.id === item;
    //   });
    case "ADD_TO_FAVORITES":
      return state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, isFavorite: true };
        }
        return item;
      });
    case "REMOVE_FROM_FAVORITES":
      return state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, isFavorite: false };
        }
        return item;
      });
    default:
      return state;
  }
};
