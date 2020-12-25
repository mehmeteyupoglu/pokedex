import React from "react";
import { useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./containers/Home/Home";
import CaughtPokemons from "./containers/CaughtPokemons/CaughtPokemons";
import PokedexDetails from "./containers/PokedexDetails/PokedexDetails";
import { app, appDark } from "./appStyle";

function App() {
  const isDark = useSelector((state) => state.appReducer.isDark);
  return (
    <div style={isDark ? appDark : app}>
      <Navbar />
      <div className="mt-10">
        <Switch>
          <Route path="/caught-pokemons">
            <CaughtPokemons />
          </Route>
          <Route path="/details">
            <PokedexDetails />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
