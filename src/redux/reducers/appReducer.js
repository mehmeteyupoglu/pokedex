//Used in various places to let the components know whether the app is in dark mode or not.

const initialState = {
  isDark: false,
  itemId: null,
  notification: false,
  modal: false,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return {
        ...state,
        isDark: !state.isDark,
      };
    case "SET_ID":
      return {
        ...state,
        itemId: action.payload,
      };
    case "SET_NOTIFICATION":
      return {
        ...state,
        notification: !state.notification,
      };
    case "SET_MODAL":
      return {
        ...state,
        modal: !state.modal,
      };
    default:
      return state;
  }
};
