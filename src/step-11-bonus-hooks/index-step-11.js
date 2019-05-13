import React from 'react'
import ReactDOM from 'react-dom'

import 'milligram'

import TotalScore from './TotalScore'
import Game from './Game'

/*
This is just some bonus content to show you how this would work
with the new React hooks (currently in Alpha - do not use in production)
*/
function App() {
  return (
    <div className="App">
      <h1>My Board Game Scorer</h1>
      <Game />
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
