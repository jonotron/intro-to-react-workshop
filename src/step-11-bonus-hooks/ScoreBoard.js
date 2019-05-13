import React from 'react'
import { useState } from 'react'

import TotalScore from './TotalScore'

export default function ScoreBoard(props) {
  const [scores, setScores] = useState([])

  const addRound = () => {
    setScores(prev => [...prev, {}])
  }

  const changeScore = (index, player, score) => {
    setScores(prev => {
      prev[index][player] = prev[index][player]
        ? prev[index][player] + score
        : score
      return prev
    })
  }

  return (
    <table>
      <thead>
        <tr>
          <th />
          {props.players.map(player => (
            <th key={player}>{player}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {scores.map((score, i) => (
          <tr key={i}>
            <td>Round {i + 1}</td>
            {props.players.map(player => (
              <td key={player}>
                <Score
                  player={player}
                  index={i}
                  score={score[player]}
                  onChangeScore={changeScore}
                />
              </td>
            ))}
          </tr>
        ))}
        <tr>
          <td colspan={props.players.length + 1}>
            <button onClick={addRound}>Add round {scores.length + 1}</button>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th>Total</th>
          {props.players.map(player => (
            <th key={player}>
              <TotalScore scores={scores} player={player} />
            </th>
          ))}
        </tr>
      </tfoot>
    </table>
  )
}

function Score(props) {
  return (
    <div>
      <button
        className="button-outline"
        onClick={() => props.onChangeScore(props.index, props.player, -1)}
      >
        -1
      </button>
      <span style={{ padding: '0 12px' }}>{props.score}</span>
      <button
        className="button-outline"
        onClick={() => props.onChangeScore(props.index, props.player, 1)}
      >
        +1
      </button>
    </div>
  )
}
