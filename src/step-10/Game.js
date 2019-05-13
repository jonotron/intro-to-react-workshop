import React from 'react'
import ScoreBoard from './ScoreBoard'

class Game extends React.Component {
  state = {
    players: ['jonathan', 'kaileen'],
    newPlayer: ''
  }

  // This is another handler function, but it has an event parameter
  // any input event (onChange, onSubmit, etc) will generate a DOM event
  // this DOM event contains the element that caused the event (event.target)
  // which you can use to extract information from (e.g. event.target.value)
  //
  // TODO: fix this component to call the appropriate handlers in the render
  // function
  //
  // once you do that, try typeing. open the console to see what happens
  // as you type. What is happening?
  updateNewPlayer = event => {
    console.log(event.target.value)
    this.setState({ newPlayer: event.target.value })
  }

  // a function that adds the current newPlayer from state onto the
  // players array in state.
  addNewPlayer = event => {
    // this stops the form for navigating away
    event.preventDefault()
    // create a new players array from existing players and the new player
    const players = [...this.state.players, this.state.newPlayer]
    // update the state, also clear the newPlayer so we can add a new one.
    // what happens if you don't clear newPlayer?
    this.setState({ players: players, newPlayer: '' })
  }

  noop() {
    // do nothing
    alert('fix me!')
  }

  render() {
    return (
      <div>
        <form onSubmit={this.noop}>
          <input
            type="text"
            value={''}
            placeholder="New player"
            onChange={this.noop}
          />
          <button>Add Player</button>
        </form>

        <h2>The Scoreboard</h2>
        <ScoreBoard players={this.state.players} />
      </div>
    )
  }
}

export default Game
