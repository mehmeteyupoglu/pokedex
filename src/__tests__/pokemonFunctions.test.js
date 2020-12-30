const {
  getAllPokemon,
  getIndividualPokemons,
} = require("../helper/pokemonFunctions");

test("Testing whether async getAllPokemon function retrieves data from api  ", () => {
  const number = 20;
  const url = `https://pokeapi.co/api/v2/pokemon?offset=300&limit=${number}`;

  return getAllPokemon(url).then((data) => {
    expect(data.results).toHaveLength(number);
    expect(data.results).toBeTruthy();
    expect(data.results).not.toBeNull();
    expect(data.results).not.toBeUndefined();
    expect(data.results[0]).toHaveProperty("name", "delcatty");
    expect(data.results[0]).toHaveProperty(
      "url",
      "https://pokeapi.co/api/v2/pokemon/301/"
    );
  });
});

test("Testing whether async getIndividualPokemons function retrieves data from api  ", () => {
  const url = `https://pokeapi.co/api/v2/pokemon/301/`;

  return getIndividualPokemons(url).then((data) => {
    expect(data).toBeTruthy();
    expect(data).not.toBeNull();
    expect(data).not.toBeUndefined();
    expect(data).toHaveProperty("name", "delcatty");
    expect(data).toHaveProperty("base_experience", 140);
    expect(data).toHaveProperty("height", 11);
    expect(data).toHaveProperty("id", 301);
    expect(data).toHaveProperty("is_default", true);
  });
});
