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

export const changeTheme = (content) => {
  return {
    type: "CHANGE_THEME",
    payload: content,
  };
};

export const setId = (content) => {
  return {
    type: "SET_ID",
    payload: content,
  };
};

export const setNotification = (content) => {
  return {
    type: "SET_NOTIFICATION",
    payload: content,
  };
};

export const setModal = (content) => {
  return {
    type: "SET_MODAL",
    payload: content,
  };
};
