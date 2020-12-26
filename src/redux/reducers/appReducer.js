//Used in various places to let the components know whether the app is in dark mode or not.

const initialState = {
  isDark: false,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return {
        ...state,
        isDark: !state.isDark,
      };
    default:
      return state;
  }
};
