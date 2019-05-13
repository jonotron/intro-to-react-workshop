import React from 'react'

import TotalScore from './TotalScore'

export default class ScoreBoard extends React.Component {
  /* 
  if you don't need to do anything in the constructor, you can
  also define your intial state like this. It's called a 
  static class property assignment. It's much easier than the constructor
  */
  state = {
    scores: [
      { jonathan: 4, chad: 3, kaileen: 6 },
      { jonathan: 2, chad: 6, kaileen: 5 }
    ]
  }

  /*
  This is the cleanest way to define your handling functions
  It's called a static class property assignment. Basically,
  it's an arrow function that is defined at instatiation time
  and since arrow functions don't have their own scope, like
  regular functions do, `this` refers the the context of the
  arrow function which is the class itself. You could read more
  about this, but generally this is the easiest way to create handler
  functions in your component classes
  NOTE: static class property assignments are a new feature of javascrpt
  and you need a compiler to deal with them for you.
  */
  addRound = () => {
    const newRound = { jonathan: 0, chad: 0, kaileen: 0 }
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
            <th>Jonathan</th>
            <th>Chad</th>
            <th>Kaileen</th>
          </tr>
        </thead>
        <tbody>
          {scores.map((score, i) => (
            <tr key={i}>
              {/* TODO: 
            Let's add a bit of fun functionality... replace these scores
            with the Score component I made at the bottom of this file
            */}
              <td>Round {i + 1}</td>
              <td>
                <Score
                  player="jonathan"
                  index={i}
                  score={score.jonathan}
                  onChangeScore={this.changeScore}
                />
              </td>
              <td>
                <Score
                  player="chad"
                  index={i}
                  score={score.chad}
                  onChangeScore={this.changeScore}
                />
              </td>
              <td>
                <Score
                  player="kaileen"
                  index={i}
                  score={score.kaileen}
                  onChangeScore={this.changeScore}
                />
              </td>
            </tr>
          ))}
          <tr>
            <td colspan="4">
              <button onClick={this.addRound}>
                Add round {scores.length + 1}
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

  /*
  Sneaking in a little handler for you.
  */
  changeScore = (index, player, score) => {
    /* WTF is this JSON.parse JSON.stringify business?
     This turns our scores state into a string, and then back into an
     array. It's a quick (and dirty) way to copy an array or object.
     Why do this???? we need to call setState to get the component
     to re-render, and we want to avoid setting state directly
     in-case we cause unintended side-effects
    */
    const scores = JSON.parse(JSON.stringify(this.state.scores))
    scores[index][player] += score
    this.setState({ scores: scores })
  }
}

/*
Hello there. This is a new little component I made for you. It adds some 
buttons so we can increase the score for a player.
You use it like this:
<Score 
  player="jonathan" 
  index={i} 
  score={score.jonathan} 
  onChangeScore={this.changeScore} 
/>

Why do we need to pass in an `onChageScore` function like we do?
This is so we can supply the Score component the functionality
we need. This is an example of a controlled component. A controlled
component is one where all the controll is given to it from it's parent.
*/
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
