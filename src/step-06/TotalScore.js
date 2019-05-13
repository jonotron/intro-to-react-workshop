import React from 'react'

function TotalScore(props) {
  const totals = {}
  props.scores.forEach(score => {
    Object.keys(score).forEach(player => {
      totals[player] = totals[player]
        ? totals[player] + score[player]
        : score[player]
    })
  })

  const max = Object.values(totals).reduce(
    (acc, value) => (acc > value ? acc : value),
    0
  )
  const playerScore = totals[props.player]
  const isMax = playerScore === max
  const style = { fontSize: 18, color: 'Black', textDecoration: 'underline' }
  if (isMax) {
    style.fontSize = 24
    style.color = 'Green'
  }

  return <span style={style}>{playerScore}</span>
}

export default TotalScore
