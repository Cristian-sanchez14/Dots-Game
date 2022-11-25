/*
 * DOTS: Level Two
 *
 */

let score = 0
let ball = document.querySelectorAll('.js-ball')
let scoreDisplay = document.querySelector('.js-score')
let levelWinner = document.querySelector('.level-winner')

const levelTwo = document.querySelectorAll('.js-ball')
for (let i = 0; i < levelTwo.length; i++) {
  levelTwo[i].addEventListener('click', function () {
    score += 10
    scoreDisplay.innerText = score
    if (score >= 100) document.querySelector('.level-winner').style.opacity = 1
  })
}
