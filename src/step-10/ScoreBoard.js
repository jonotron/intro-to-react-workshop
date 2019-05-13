import React from 'react'

import TotalScore from './TotalScore'

/*
Ok, so I've cleaned up the component a bit for you to get 
things ready for the next step. Accepting input from the user!

We are now storing players as an array on the state.

I've also created a Game component. Go have a look at it.

TODO: Make this component work with players that are passed in
as props (i.e. it should not use players from it's own local state)
*/
export default class ScoreBoard extends React.Component {
  state = {
    // our score board is now initially empty.
    players: [],
    scores: []
  }

  addRound = () => {
    const newRound = {}
    const scores = [...this.state.scores, newRound]
    this.setState({ scores: scores })
  }

  render() {
    const scores = this.state.scores
    const round = this.state.round

    return (
      <table>
        <thead>
          <tr>
            <th />
            {this.state.players.map(player => (
              <th key={player}>{player}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {this.state.scores.map((score, i) => (
            <tr key={i}>
              <td>Round {i + 1}</td>
              {this.state.players.map(player => (
                <td key={player}>
                  <Score
                    player={player}
                    index={i}
                    score={score[player]}
                    onChangeScore={this.changeScore}
                  />
                </td>
              ))}
            </tr>
          ))}
          <tr>
            <td colspan={this.state.players.length + 1}>
              <button onClick={this.addRound}>
                Add round {this.state.scores.length + 1}
              </button>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th>Total</th>
            {this.state.players.map(player => (
              <th key={player}>
                <TotalScore scores={this.state.scores} player={player} />
              </th>
            ))}
          </tr>
        </tfoot>
      </table>
    )
  }

  /*
  Change score now supports displaying a score if a player is
  missing from the score record
  */
  changeScore = (index, player, score) => {
    const scores = JSON.parse(JSON.stringify(this.state.scores))
    scores[index][player] = scores[index][player]
      ? scores[index][player] + score
      : score

    this.setState({ scores: scores })
  }
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
