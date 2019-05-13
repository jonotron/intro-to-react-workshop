import React from 'react'
import ReactDOM from 'react-dom'

import 'milligram'

const scores = [
  { jonathan: 4, chad: 3, kaileen: 6 },
  { jonathan: 3, chad: 6, kaileen: 5 }
]

/*
  So our previous TotalScore component doesn't really save us a lot of code,
  but it is reusable, which is great. Now we can add functionality to it.
 */
function TotalScoreOld(props) {
  return (
    <span>
      {props.scores.reduce((acc, score) => acc + score[props.player], 0)}
    </span>
  )
}

/*
This new TotalScore component is better! It also figures out who is winning.
You'll now see a "*" next to the winning score. We calculate the `totals` for everyone, 
figure out what score is the `max` and display the `playerScore` and a `*` 
if the `playerScore` is also the `max` score. 

Don't worry too much about the calculations that are going on, 
that's not the point of this. You could calculate these values however you want, 
which *is* the point of components. As a user of the `<TotalScore>` component, 
I don't really care how it's calculated. We updated the component with some new features 
and we didn't have to change anything about how we used it.

You'll notice the `{isMax ? '*' : ''}` line. It's just javascript. 
Using a ternary operator is fairly common in React as a way of conditionally rendering something. 
You might also see this little hack `{isMax && '*'}`. That's essentially the same thing, 
but be careful when using this because if `isMax` was variable containing JSX, 
you'd render the JSX (which might not be what you expected).
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

  return (
    <span>
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
            {/* TODO: Replace these with the new improved TotalScore */}
            <th>
              <TotalScoreOld scores={scores} player="jonathan" />
            </th>
            <th>
              <TotalScoreOld scores={scores} player="chad" />
            </th>
            <th>
              <TotalScoreOld scores={scores} player="kaileen" />
            </th>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
