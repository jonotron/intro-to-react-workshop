import React from 'react'
import ReactDOM from 'react-dom'

import 'milligram'

const scores = [
  { jonathan: 4, chad: 3, kaileen: 6 },
  { jonathan: 3, chad: 6, kaileen: 5 }
]

/*
This is another component! They are really easy to make and re-use.
This is using a parameter called props. Props are how data is passed into
your component at run time. Scroll down to see how TotalScore is used...

<TotalScore scores={scores} player="jonathan" />

the attributes `scores` and `player` are the props.
They receive the array `scores` and the string `"jonathan"`
You have to use {scores} because the scores array is javascript.
You can use just "jonathan" because "jonathan" is just a string. If we stored
"jonathan" in a variable called `player1` we would have to use {player1}.
 */
function TotalScore(props) {
  // want to see what props is for yourself, just log it like this:
  //console.log(props)
  return (
    <span>
      {props.scores.reduce((acc, score) => acc + score[props.player], 0)}
    </span>
  )
}

function App() {
  return (
    <div className="App">
      <h1>My Board Game Scorer</h1>

      <table>
        <thead>
          <tr>
            <th />
            <th>Jonathan</th>
            <th>Chad</th>
            <th>Kaileen</th>
          </tr>
        </thead>
        <tbody>
          {scores.map((score, i) => (
            <tr key={i}>
              <td>Round {i + 1}</td>
              <td>{score.jonathan}</td>
              <td>{score.chad}</td>
              <td>{score.kaileen}</td>
            </tr>
          ))}
        </tbody>

        <tfoot>
          <tr>
            <th>Total</th>
            <th>
              <TotalScore scores={scores} player="jonathan" />
            </th>
            {/* TODO: Replace the contents of these `th` elements 
                 to use our new TotalScore component */}
            <th>{scores.reduce((acc, score) => acc + score.chad, 0)}</th>
            <th>{scores.reduce((acc, score) => acc + score.kaileen, 0)}</th>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)

// TODO:
// Replace the contents of the `th` elements with appropriate use of TotalScore component
