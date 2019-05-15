import React from 'react'
import { useState } from 'react'
import ReactDOM from 'react-dom'
import 'milligram'

const name = 'Jonathan'

// Lots of stuff going on here!
// I've reorganized the buttons a bit, added a "Log Day" button
// and created a table with daily logs of water.
// When you press the "Log Day" button, it commits whatever the current water state is
// to the stats array.
function App() {
  // state can be anything, in this case
  // the stats state variable is an array
  const [stats, setStats] = useState([
    { day: 3, water: 0 },
    { day: 2, water: 3 },
    { day: 1, water: 7 }
  ])
  const [water, setWater] = useState(0)
  const incWater = amount => () => setWater(water + amount)

  // the logWater function adds the current water amount
  // to the stats and clears the water state
  const logWater = () => {
    setWater(0) // Question: Why does this not reset the water to 0 before adding the newRecord?
    // Hint: UI is a ___blank___ of ____blank____
    const day = stats[0].day + 1
    const newRecord = { day: day, water: water }
    setStats([newRecord, ...stats])
  }

  const red = '#880000'
  const green = '#008800'
  const white = '#ffffff'
  const style = {
    padding: '0 10px',
    backgroundColor: water >= 8 ? green : red,
    color: white
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
      <span style={style}>{water}</span> 💧
      <button className="button" onClick={incWater(1)}>
        +1
      </button>
      <button className="button" onClick={incWater(4)}>
        +4
      </button>
      <button className="button" onClick={() => logWater(water)}>
        ✅ Log Day
      </button>
      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>Water</th>
          </tr>
        </thead>

        <tbody>
          {/* This is new... here we are using the array .map 
            function to iterate over the stats array. Think of it as
            for every item in `stats` call the supplied function with
            that item */}
          {stats.map(record => (
            <tr key={record.day}>
              <td>{record.day}</td>
              {/* our first custom component! We pass the amount prop like this */}
              <td>
                <WaterCount amount={record.water} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// This is our first custom component.
// It just renders the amount provided to it via props
// props is an object where each property is one of the
// attributes passed to it when it was used. See above
function WaterCount(props) {
  return <span>{props.amount}</span>
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)

// TODO: Update the WaterCount component to use the custom dynamic style
//       that we set above. I.e. it should be green if 8 or more
