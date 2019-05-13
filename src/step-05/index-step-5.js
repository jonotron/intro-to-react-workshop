import React from 'react'
import ReactDOM from 'react-dom'

import 'milligram'

const scores = [
  { jonathan: 4, chad: 3, kaileen: 6 },
  { jonathan: 3, chad: 6, kaileen: 5 }
]

/*
Let's add some style!
Checkout the new style variable I've added below the calculations in this component
*/
function TotalScore(props) {
  const totals = {}
  props.scores.forEach(score => {
    Object.keys(score).forEach(player => {
      totals[player] = totals[player]
        ? totals[player] + score[player]
        : score[player]
    })
  })

  const max = Object.values(totals).reduce(
    (acc, value) => (acc > value ? acc : value),
    0
  )
  const playerScore = totals[props.player]
  const isMax = playerScore === max
  const style = { fontSize: 18, color: 'Black', textDecoration: 'underline' }
  // If you know CSS this should look familiar but not quite right. First of all,
  // it's in javascript, not CSS. Secondly, it's using a `style` attribute
  // of the `<span>` element.
  // This is a way of doing inline styles in React.
  // The `style` property is a special property of react that will take an object
  // and map it to the`style` attribute on the element for you.
  //
  // Since `style` is just an object, we can manipulate it with javascript
  // easily. Try to conditionally set the `color` property to 'green'
  // and the `fontSize` to '24'
  // TODO: Make the winning score big and green

  return (
    <span style={style}>
      {playerScore}
      {isMax ? '*' : ''}
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
            <th>
              <TotalScore scores={scores} player="chad" />
            </th>
            <th>
              <TotalScore scores={scores} player="kaileen" />
            </th>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
