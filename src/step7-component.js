import React from 'react'
import { useState } from 'react'
import ReactDOM from 'react-dom'
import 'milligram'

const name = 'Jonathan'

function App() {
  const [stats, setStats] = useState([
    { day: 3, water: 0 },
    { day: 2, water: 3 },
    { day: 1, water: 7 }
  ])
  const [water, setWater] = useState(0)
  const incWater = amount => () => setWater(water + amount)
  const message = 'My message'

  const logWater = () => {
    setWater(0)
    const day = stats[0].day + 1
    const newRecord = { day: day, water: water }
    setStats([newRecord, ...stats])
  }

  // We've added a simple change handler that just logs
  // the event for now. Go see where it's used on the input
  // element
  const handleChange = e => console.log(e.target.value)

  return (
    <div className="App">
      <h1>{name + `'s`} Water Tracker</h1>
      <button className="button button-outline" onClick={incWater(-4)}>
        -4
      </button>
      <button className="button button-outline" onClick={incWater(-1)}>
        -1
      </button>
      <WaterCount amount={water} /> 💧
      <button className="button" onClick={incWater(1)}>
        +1
      </button>
      <button className="button" onClick={incWater(4)}>
        +4
      </button>
      <div>
        {/*Here we have an input box. What happens when you type?
            (Check the console). Why is this happening?
            TODO: Fix this so the input updates as you type
            TODO: Make the logWater function also add the message
                  for the day and update the table to display the message*/}
        <input type="text" value={message} onChange={handleChange} />
        <button className="button" onClick={() => logWater(water)}>
          ✅ Log Day
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>Water</th>
          </tr>
        </thead>

        <tbody>
          {stats.map(record => (
            <tr key={record.day}>
              <td>{record.day}</td>
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

function WaterCount(props) {
  const red = '#880000'
  const green = '#008800'
  const white = '#ffffff'
  const style = {
    padding: '0 10px',
    backgroundColor: props.amount >= 8 ? green : red,
    color: white
  }
  return <span style={style}>{props.amount}</span>
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
