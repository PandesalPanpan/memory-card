import '../styles/Card.css';

export default function Card({
    pokemonName,
    imageURL,
    shufflePokemons,
    selectPokemon
}) {

    return (
        <div className="card" onClick={() => {
            shufflePokemons();
            selectPokemon(pokemonName)
        }}>
            <img src={imageURL} draggable={false}/>
            <p>{pokemonName}</p>
        </div>
    )
}