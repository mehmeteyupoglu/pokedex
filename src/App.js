import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./containers/Home/Home";
import CaughtPokemons from "./containers/CaughtPokemons/CaughtPokemons";
import PokedexDetails from "./containers/PokedexDetails/PokedexDetails";

function App() {
  return (
    <div className="App">
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
