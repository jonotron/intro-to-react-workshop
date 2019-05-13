import React from 'react'
import ReactDOM from 'react-dom'

import 'milligram'

import TotalScore from './TotalScore'
import ScoreBoard from './ScoreBoard'

function App() {
  return (
    <div className="App">
      <h1>My Board Game Scorer</h1>
      <ScoreBoard />
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
