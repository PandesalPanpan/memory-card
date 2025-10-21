import { useState } from 'react';
import Card from "./Card"
import pokemonList from "./pokemon-data.js"
import '../styles/Game.css';
import { shuffle } from "./data-util.js";

export default function Game() {
    // Each time a card is clicked reshuffle
    const [pokemons, setPokemons] = useState(pokemonList);

    const shufflePokemons = () => {
        setPokemons((prev) => shuffle(prev));
    }

    return (
        <div className="game-container">
            {pokemons.map((pokemon) => {
                return <Card 
                key={pokemon.name} 
                pokemonName={pokemon.name} 
                imageURL={pokemon.imageUrl}
                shufflePokemons={shufflePokemons}
                />
            })}
        </div>
    )
}