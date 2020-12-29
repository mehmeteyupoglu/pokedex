//RETRIEVE DATA FROM THE API
const fetch = require("node-fetch");

async function getAllPokemon(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

async function getIndividualPokemons(url) {
  return new Promise((resolve, reject) => {
    console.log("url ", url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log("resolved in getIndividual ", data);
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

module.exports = {
  getIndividualPokemons,
  getAllPokemon,
};
