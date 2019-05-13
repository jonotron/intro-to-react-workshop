import React from 'react'

import TotalScore from './TotalScore'

export default function ScoreBoard(props) {
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
        {props.scores.map((score, i) => (
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
            <TotalScore scores={props.scores} player="jonathan" />
          </th>
          <th>
            <TotalScore scores={props.scores} player="chad" />
          </th>
          <th>
            <TotalScore scores={props.scores} player="kaileen" />
          </th>
        </tr>
      </tfoot>
    </table>
  )
}
