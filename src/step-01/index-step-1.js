// This is an import statement, it's how you bring modules into your file
// this one is importing React which we need for the fancy JSX syntax we are using
import React from 'react'
// React is the core library that powers react, ReactDOM is the library that allows
// you to use react with a web page in the browser.
import ReactDOM from 'react-dom'
// milligram is a small css library that gives some basic responsive styling
// just so our app doesn't look terrible
import 'milligram'

// this is a simple javascript object, we'll store the current scores in it
const scores = {
  jonathan: 4
}

// this is a React component, it's just a function that returns a DOM element
function App() {
  // our component uses JSX, which is an extension of javascript that allows
  // you to use HTML in your javascript. It has a few gotchas.
  // 1) You must always return a single element from a component. (but you can
  //    nest as deep as you want)
  // 2) comments are gross
  return (
    <div className="App">
      {/* this is a comment in jsx - we rarely use them*/}
      <h1>My Board Game Scorer</h1>

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
          <tr>
            <td>Score</td>
            {/*
              This 👇 is how you use javascript expressions in JSX. You just surround them with {}
              You can do any expression you can think of in javascript inside the {}. That's the power
              of JSX. It's just HTML + Javascript
            */}
            <td>{scores.jonathan}</td>
            <td>3</td>
            <td>6</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

// This is some code to attach our App component onto our DOM so we can see it
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)

// TODO: Add properties and values to the above scores object for chad and kaileen and replace those
//       hard coded scores with the scores from the scores object, just like {scores.jonathan}

// NEXT: Once you've done that, you can move onto the next file, index-step-2.js
//       Before you do, make sure the browser in code sandbox has the "current module view" toggled (blue)
