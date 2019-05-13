import React from 'react'
import ReactDOM from 'react-dom'

import 'milligram'
import ScoreBoard from './ScoreBoard'

const scores = [
  { jonathan: 4, chad: 3, kaileen: 6 },
  { jonathan: 3, chad: 6, kaileen: 5 }
]

/*
Where did the TotalScore component go? It's in the TotalScore.js file... go have a peek

TODO: Make a new file in the `step-6` directory called ScoreBoard, and see if you can
create your own component that renders the <table> (and everything in it) from below.
Also, move the scores into the new ScoreBoard component
*/
function App() {
  return (
    <div className="App">
      <h1>My Board Game Scorer</h1>

      <ScoreBoard scores={scores} />
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
