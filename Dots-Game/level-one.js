/*
 * DOTS: Level One
 *
 */

let score = 0
let ball = document.querySelector('.js-ball')
let scoreDisplay = document.querySelector('.js-score')
let levelWinner = document.querySelector('.level-winner')

ball.addEventListener('click', function () {
  score += 10
  scoreDisplay.innerText = score
  if (score >= 100) document.querySelector('.level-winner').style.opacity = 1
})

// When the user clicks on the ball, it should increment their score by 10 points. When the user reaches 100 points, they've beat the level and can move on!
