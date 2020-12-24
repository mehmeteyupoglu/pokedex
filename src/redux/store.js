import { combineReducers, createStore } from "redux";
import { pokemonReducer } from "./reducers";

const reducers = combineReducers({
  pokemonReducer,
});

export const store = createStore(reducers);
