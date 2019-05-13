import React from 'react'

import TotalScore from './TotalScore'

/*
We need to add state to our component.
You can think of "state" as literally the state of your application. 
That means, the data your application is helping to track as well as the 
state of the UI itself. How many players are there, what are their names, 
what are the scores for round 1, are we in the process of typing a players name. 
These are all examples of state. When state changes, so should the app.

Up until now we've been using what is often called "stateless functional components". 
We'll go over what that means in a bit, but essentially you can think of 
them as plain functions.You give it data, it gives you some computed result.
You give it props, it gives you some DOM elements.

Now we need to use a "stateful" component.Stateful components are classes 
that have all sorts of capabilities that you can use to manage more 
complicated state needs.
*/
export default class ScoreBoard extends React.Component {
  /* a stateful component needs to be delcared as a class (extending React.Component)
  You then define your initial state in the constructor.
  */
  constructor(props) {
    super(props)
    // this is our state instance property. It's a property of the component instance
    // and always available to the render function.
    // Note, this is the only time you can directly set the state object
    // once the component is initialized, you need to use this.setState
    this.state = {
      round: 2,
      scores: [
        { jonathan: 4, chad: 3, kaileen: 6 },
        { jonathan: 2, chad: 6, kaileen: 5 }
      ]
    }
  }

  render() {
    const scores = this.state.scores
    const round = this.state.round

    return (
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
          {scores.map((score, i) => (
            <tr key={i}>
              <td>Round {i + 1}</td>
              <td>{score.jonathan}</td>
              <td>{score.chad}</td>
              <td>{score.kaileen}</td>
            </tr>
          ))}
          <tr>
            <td colspan="4">
              <button
                onClick={() => {
                  /* 
                    This is how you can update the state. Calling setState and passing in the 
                    new state object. You don't have to pass in the whole object, just the part
                    of the object that you want to update. setState is what triggers React to
                    re-render the component.

                    TODO:
                    Rather than updating this round counter, use setState to update the scores
                    array. Hint: a modern javascript way to create a new array from an old array is
                    with the spread operator. E.g. var newArr = [...oldArr, newItem] will create a
                    new array with all the `oldArr` values + the `newItem`.
                  */
                  this.setState({ round: round + 1 })
                }}
              >
                Add round {round + 1}
              </button>
            </td>
          </tr>
        </tbody>

        <tfoot>
          <tr>
            <th>Total</th>
            <th>
              <TotalScore scores={scores} player="jonathan" />
            </th>
            <th>
              <TotalScore scores={scores} player="chad" />
            </th>
            <th>
              <TotalScore scores={scores} player="kaileen" />
            </th>
          </tr>
        </tfoot>
      </table>
    )
  }
}
