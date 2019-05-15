import React from 'react'
import { useState } from 'react'
import ReactDOM from 'react-dom'
import 'milligram'

const name = 'Jonathan'

function App() {
  // this is the useState hook that react provides
  // it gives you a state variable and a function to update it
  // optionally you can set a default value
  const [water, setWater] = useState(0)

  return (
    <div className="App">
      <h1>{name + `'s`} Water Tracker</h1>

      {/* This is an arrow function. It's a little version of a function that you can define
           in one line. Handy for click handlers like this */}
      <button onClick={() => setWater(water + 1)}>+1</button>

      <p>{water} 💧</p>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)

// TODO: Make a button that lets you decrease the water
// TODO: Make another button that lets you drink a whole jug of water
// Advanced TODO: Make a generic function that your buttons can call
//     that will update by any amount of water
