import '../styles/Card.css';

export default function Card({
    pokemonName,
    imageURL
}) {

    return (
        <div className="card">
            <img src={imageURL}/>
            <p>{pokemonName}</p>
        </div>
    )
}