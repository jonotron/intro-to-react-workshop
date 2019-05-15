import React from 'react'
import ReactDOM from 'react-dom'
import 'milligram'
import { stat } from 'fs'

const name = 'Jonathan'
let stats = {
  water: 2
}

// Let's add some functionality!
// We'll add a button that increments our water count
// Try it out below... check out the console under the browser on the right
// What is going on? Why does this not work?

// this is a little function that increments our water count
function incWater() {
  stats.water = stats.water + 1
  // console.log displays stuff in the console tab (handy for debugging)
  console.log(stats)
}

function App() {
  return (
    <div className="App">
      <h1>{name + `'s`} Water Tracker</h1>

      <button onClick={incWater}>+1</button>

      <p>{stats.water} 💧</p>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)

// React's paradigm, UI is a function of state
