import React from 'react'

import TotalScore from './TotalScore'

/*
We have a nice isolated component now, but it can't do anything.
Let's add a button to the footer to add a new round.

For now, we'll just increment a counter to see how this works.

Try clicking the button, what's happening? Why does the button not 
get updated to say "Add Round 4"? Try clicking it some more. What the heck?
*/
export default function ScoreBoard() {
  const scores = [
    { jonathan: 4, chad: 3, kaileen: 6 },
    { jonathan: 3, chad: 6, kaileen: 5 }
  ]

  let round = 2

  // the problem is that the `round` is declared when the function is executed
  // and the output of ScoreBoard is returned to React for it to stick in the browser
  // somewhere. Our onClick handler is executing, and working with the `round` variable
  // but nothing is telling React to re-render the component. React will not re-render
  // components unless you tell it to. Unlike other tools, React does NOT have two-way
  // data binding. This is a good thing!
  // We can re-render things with state changes
  return (
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
        <tr>
          <td colspan="4">
            <button
              onClick={() => {
                round = round + 1
                alert(round)
              }}
            >
              Add round {round + 1}
            </button>
          </td>
        </tr>
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
  )
}
