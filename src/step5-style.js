import React from 'react'
import { useState } from 'react'
import ReactDOM from 'react-dom'
import 'milligram'

const name = 'Jonathan'

// Styles are easy in React!
// If you are already using a stylesheet with classes, you can use them by adding
// the className attribute to your component. **Note**: This is different than `class` from HTML
// because `class` is a reserved word in Javascript (which JSX is a superset of)

function App() {
  const [water, setWater] = useState(0)
  const incWater = amount => () => setWater(water + amount)

  // You can also use custom styles really easily by making a `style` object and passing it to the
  // `style` prop on your component
  // Why do this as an object? So you can modify it easily. See if you can make the
  // background color green only if the water count is 8 or more.
  // Hint: Use a ternary operator to make it nice and succinct
  const red = '#880000'
  const green = '#008800'
  const style = {
    padding: '0 10px',
    backgroundColor: red,
    color: '#ffffff'
  }
  return (
    <div className="App">
      <h1>{name + `'s`} Water Tracker</h1>

      <button className="button button-outline" onClick={incWater(-4)}>
        -4
      </button>
      <button className="button button-outline" onClick={incWater(-1)}>
        -1
      </button>
      <button className="button" onClick={incWater(1)}>
        +1
      </button>
      <button className="button" onClick={incWater(4)}>
        +4
      </button>

      <p>
        <span style={style}>{water}</span> 💧
      </p>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
