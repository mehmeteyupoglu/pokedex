import { combineReducers, createStore } from "redux";
import { pokemonReducer } from "./reducers/pokeReducer";
import { appReducer } from "./reducers/appReducer";

export const store = createStore(
  combineReducers({ pokemonReducer, appReducer })
);
