import '../styles/Card.css';

export default function Card({
    pokemonName,
    imageURL,
    shufflePokemons,
}) {

    return (
        <div className="card" onClick={() => shufflePokemons()}>
            <img src={imageURL} draggable={false}/>
            <p>{pokemonName}</p>
        </div>
    )
}