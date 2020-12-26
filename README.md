# Pokédex App

Click [here](https://pokedextr.netlify.app/) to see the app

## General Information and Features

- Pokédex App lists certain pokemons using the [Pokemon Api](https://pokeapi.co).
- For each pokemon, you can see a photo, abilities, weight and height information.
- For future information related to a certain pokemon, click `pokedex `button to see more features of that pokemon.
- You can catch pokemons with the `catch` button.
- Click `caught pokemons` button in navbar to see the pokemons you caught.
- Once in the caught pokemons page, you can release pokemons or favorite them with the related buttons.
- All the activities in the app is stored in the local storage. The data persists on refresh page!

## UI/UX Considerations

- Optimum click principle is adopted for UX. The user does not have to move the mouse too much to do activities throught the page.
- Instead of going to a different route, pokedex is available in a modal, which is much more performant.
- The buttons are colored in line with pokemon anime's certain colors: `red`, `blue`, `gray`.
- Only for `catch` button a green color is preffered to make a contrast with `pokedex` button and to help user think intuitively.

## Get Started

To setup the project, run the following on your terminal in the order:

```
git clone https://github.com/mehmeteyupoglu/pokedex.git
```

```
cd pokedex
```

```
yarn install
```

```
yarn start
```

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
