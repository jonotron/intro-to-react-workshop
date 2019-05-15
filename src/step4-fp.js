import React from 'react'
import { useState } from 'react'
import ReactDOM from 'react-dom'
import 'milligram'

const name = 'Jonathan'

function App() {
  const [water, setWater] = useState(0)
  // What is this? This is a function that returns a function.
  // The onClick handler of our button is expecting a function that it will call.
  // Our incWater function makes a function that will call setWater and add the amount to it
  // Functional programming!
  const incWater = amount => () => setWater(water + amount)

  return (
    <div className="App">
      <h1>{name + `'s`} Water Tracker</h1>

      <button onClick={incWater(-4)}>-4</button>
      <button onClick={incWater(-1)}>-1</button>
      <button onClick={incWater(1)}>+1</button>
      <button onClick={incWater(4)}>+4</button>

      <p>{water} 💧</p>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)

// TODO: Can you add a function and a button that clears the water count back to 0?
