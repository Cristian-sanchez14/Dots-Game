/*
 * DOTS: Level Three
 *
 */

let ball = document.querySelectorAll('.js-ball')
let scoreDisplay = document.querySelector('.js-score')
let levelWinner = document.querySelector('.level-winner')

const levelThree = document.querySelectorAll('.js-ball')
for (let i = 0; i < levelThree.length; i++) {
  levelThree[i].addEventListener('click', function (event) {
    event.target.dataset.increment = Number(event.target.dataset.increment) + 10
    scoreDisplay.innerText = event.target.dataset.increment
    if (event.target.dataset.increment >= 100)
      document.querySelector('.level-winner').style.opacity = 1
  })
}
