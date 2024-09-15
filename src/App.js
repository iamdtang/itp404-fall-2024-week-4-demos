import { useState } from "react";
import $ from "jquery";

export function fetchPokemons() {
  return $.ajax({
    type: "GET",
    url: "https://pokeapi.co/api/v2/pokemon?limit=100",
  });
}

function App() {
  const [pokemons, setPokemons] = useState([]);

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          fetchPokemons().then((response) => {
            setPokemons(response.results);
          });
        }}
      >
        Show Pokemon
      </button>

      {pokemons.length > 0 && (
        <ul>
          {pokemons.map((pokemon) => {
            return <li key={pokemon.name}>{pokemon.name}</li>;
          })}
        </ul>
      )}
    </div>
  );
}

export default App;
