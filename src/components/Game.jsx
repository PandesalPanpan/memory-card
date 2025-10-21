import Card from "./Card"
import pokemonList from "./pokemon-data.js"
import '../styles/Game.css';

export default function Game() {
    
    return (
        <div className="game-container">
            {pokemonList.map((pokemon) => {
                return <Card key={pokemon.name} pokemonName={pokemon.name} imageURL={pokemon.imageUrl}/>
            })}
        </div>
    )
}