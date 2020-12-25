import { combineReducers, createStore } from "redux";
import { pokemonReducer } from "./reducers/pokeReducer";
import { appReducer } from "./reducers/appReducer";
import { loadState, saveState } from "./localStorage";
// import { throttle } from "lodash.throttle";

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

store.subscribe(() => {
  saveState({
    pokemonReducer: store.getState().pokemonReducer,
    appReducer: store.getState().appReducer,
  });
});
