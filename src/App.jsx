import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Game from './components/Game'
import Scoreboard from './components/Scoreboard'

function App() {
  // TODO: Write the scoring logic here

  return (<>
    <Scoreboard/>
    <Game />
  </>
  )
}

export default App
