//Packages
import React from "react";
import { useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";

//Local files
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./containers/Home/Home";
import CaughtPokemons from "./containers/CaughtPokemons/CaughtPokemons";
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
