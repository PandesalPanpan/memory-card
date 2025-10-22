import { useState } from 'react'
import './App.css'
import Game from './components/Game'
import Scoreboard from './components/Scoreboard'

function App() {
  // Logic in collecting all clicked pokemons
  const [selectedPokemons, setSelectedPokemons] = useState([]);
  const currentScore = selectedPokemons.length;
  
  const selectPokemon = (pokemonName) => {
    if (selectedPokemons.includes(pokemonName)) {      
      setSelectedPokemons([]);
      return;
    }
    setSelectedPokemons([...selectedPokemons, pokemonName])
  }

  return (<>
    <Scoreboard/>
    <Game selectPokemon={selectPokemon}/>
  </>
  )
}

export default App
