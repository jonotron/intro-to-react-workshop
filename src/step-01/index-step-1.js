// This is an import statement, it's how you bring modules into your file
// this one is importing React which we need for the fancy JSX syntax we are using
import React from 'react'
// React is the core library that powers react, ReactDOM is the library that allows
// you to use react with a web page in the browser.
import ReactDOM from 'react-dom'
// milligram is a small css library that gives some basic responsive styling
// just so our app doesn't look terrible
import 'milligram'

const name = 'Jonathan'
// this is a simple javascript object, we'll store our states in it
const stats = {
  water: 2
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
      <h1>{name + `'s`} Water Tracker</h1>

      <p>2 glasses of water</p>
      {/* Replace the hard coded 2 with an expression that will evaluate to the amount of water */}
    </div>
  )
}

// This is some code to attach our App component onto our DOM so we can see it
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)

// NEXT: Once you're, you can move onto the next file, index-step-2.js
//       Before you do, make sure the browser in code sandbox has the "current module view" toggled (blue)
