const {
  checkDarkState,
  renderAbilities,
  renderTypes,
  renderMoves,
  isPokemonCaught,
} = require("../components/utils");

test(" checks if the state is dark", () => {
  let isDark = true;
  const lightMode = {
    backgroundColor: "rgb(0 0 0 / 13%)",
    minHeight: "100vh",
  };

  const darkMode = {
    backgroundColor: "#0d1117",
    minHeight: "100vh",
    color: "#f0f6fc",
  };
  expect(checkDarkState(isDark, darkMode, lightMode)).toBe(darkMode);

  isDark = false;
  expect(checkDarkState(isDark, darkMode, lightMode)).toBe(lightMode);
});

test(" Renders abilities from an array and returns a string separated with comas", () => {
  const arr = [
    {
      ability: {
        name: "cute-charm",
        url: "https://pokeapi.co/api/v2/ability/56/",
      },
    },
    {
      ability: {
        name: "normalize",
        url: "https://pokeapi.co/api/v2/ability/96/",
      },
    },
  ];

  expect(renderAbilities(arr)).toMatch("cute-charm, normalize");
  const emptyArr = [];

  expect(renderAbilities(emptyArr)).toBeNull();
});

test(" Renders types from an array and returns a string separated with comas", () => {
  const arr = [
    {
      type: { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" },
    },
    {
      type: { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" },
    },
  ];

  expect(renderTypes(arr)).toMatch("dark, ghost");
  const emptyArr = [];

  expect(renderTypes(emptyArr)).toBeNull();
});

test(" Renders moves from an array and returns a string separated with comas", () => {
  const arr = [
    {
      move: { name: "headbutt", url: "https://pokeapi.co/api/v2/move/29/" },
    },
    {
      move: { name: "tackle", url: "https://pokeapi.co/api/v2/move/33/" },
    },
    {
      move: { name: "body-slam", url: "https://pokeapi.co/api/v2/move/34/" },
    },
  ];

  expect(renderMoves(arr)).toMatch("headbutt, tackle, body-slam");
  const emptyArr = [];

  expect(renderMoves(emptyArr)).toBeNull();
});

test("Tests if the pokemon is caught by the user checking the store", () => {
  const pokemons = [
    {
      name: "delcatty",
      id: 301,
    },
    {
      name: "sableye",
      id: 302,
    },
  ];

  const id1 = 301;
  const id2 = 300;
  expect(isPokemonCaught(id1, pokemons)).toBeTruthy();
  expect(isPokemonCaught(id2, pokemons)).toBeFalsy();
});
