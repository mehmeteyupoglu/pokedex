//Packages
import React from "react";
import { useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";

//Local files
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import Home from "./containers/Home";
import CaughtPokemons from "./containers/CaughtPokemons/CaughtPokemons";
import { app, appDark } from "./appStyle";
const checkDarkState = require("../src/components/utils");

function App() {
  const isDark = useSelector((state) => state.appReducer.isDark);
  return (
    <div style={checkDarkState(isDark, appDark, app)}>
      <Navbar />
      <div className="mt-10">
        <Switch>
          <Route path="/caught-pokemons">
            <CaughtPokemons />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
