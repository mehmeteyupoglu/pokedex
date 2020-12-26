//Packages
import { combineReducers, createStore } from "redux";
import { pokemonReducer } from "./reducers/pokeReducer";
import { appReducer } from "./reducers/appReducer";

//Local files
import { loadState, saveState } from "./localStorage";

const persistedState = loadState();

const rootReducer = combineReducers({
  pokemonReducer,
  appReducer,
});
export const store = createStore(
  rootReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//Subscibe to the state to keep data in localStorage
store.subscribe(() => {
  saveState({
    pokemonReducer: store.getState().pokemonReducer,
    appReducer: store.getState().appReducer,
  });
});
