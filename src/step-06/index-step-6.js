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

  const logWater = amount => {
    const day = stats[0].day + 1
    setStats([{ day: day, water: amount }, ...stats])
    setWater(0)
  }

  const red = '#880000'
  const green = '#008800'
  const style = {
    padding: '0 10px',
    backgroundColor: water >= 8 ? green : red,
    color: '#ffffff'
  }
  return (
    <div className="App">
      <h1>{name + `'s`} Water Tracker</h1>

      <button className="button" onClick={incWater(1)}>
        +💧
      </button>
      <button className="button button-outline" onClick={incWater(-1)}>
        -💧
      </button>
      <button className="button" onClick={incWater(4)}>
        +💧💧💧💧
      </button>
      <button className="button button-outline" onClick={incWater(-4)}>
        -💧💧💧💧
      </button>
      <p>
        <span style={style}>{water}</span> 💧
      </p>

      <button className="button" onClick={() => logWater(water)}>
        Log Day
      </button>

      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Water</th>
          </tr>
        </thead>

        <tbody>
          {stats.map(record => (
            <tr key={record.day}>
              <td>{record.day}</td>
              <td>{record.water}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
