//Used to keep dex record, caught pokemons and favorite pokemons

const initialState = [];

export const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CATCH_POKEMON":
      if (state.length > 0) {
        const existsInArray = state.some(
          (item) => item.id === action.payload.id
        );
        if (existsInArray) {
          return state;
        }
      }
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          weight: action.payload.weight,
          height: action.payload.height,
          img: action.payload.sprites.front_default,
          abilities: action.payload.abilities,
          isFavorite: false,
        },
      ];

    case "RELEASE_POKEMON":
      return state.filter((pokemon) => {
        return pokemon.id !== action.payload;
      });

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
