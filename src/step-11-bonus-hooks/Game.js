import React from 'react'
import { useState } from 'react'

import ScoreBoard from './ScoreBoard'

function Game(props) {
  // useState hooks to get brand new copies of state and setting functions
  const [players, setPlayers] = useState([])
  const [newPlayer, setNewPlayer] = useState('')

  const addNewPlayer = event => {
    event.preventDefault() // stop the form from posting
    // use the callback version of setState to utilize the state
    setPlayers(previous => [...previous, newPlayer])
    setNewPlayer('')
  }

  return (
    <div>
      <form onSubmit={addNewPlayer}>
        <input
          type="text"
          value={newPlayer}
          onChange={e => setNewPlayer(e.target.value)}
          placeholder="New player"
        />
        <button>Add Player</button>
      </form>

      <h2>The Scoreboard</h2>
      <ScoreBoard players={players} />
    </div>
  )
}

export default Game
