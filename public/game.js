
const blackCircle = document.querySelector('.blackCircle')
const redCircle = document.querySelector('.redCircle')
const blueCircle = document.querySelector('.blueCircle')
const blackScore = document.querySelector('.blackScore')
const redScore = document.querySelector('.redScore')
const blueScore = document.querySelector('.blueScore')

let cxRed = 50
let cyRed = 80

let blackScoreNumber = 0
let redScoreNumber = 0
let blueScoreNumber = 0

blackScore.innerHTML = `Black : ${blackScoreNumber}`
redScore.innerHTML = `Red : ${redScoreNumber}`
blueScore.innerHTML = `Blue : ${blueScoreNumber}`

const onClickBlack = () => {
    blackScoreNumber++
    alert('Black !, Score =' + blackScoreNumber)

    blackScore.innerHTML = `Black : ${blackScoreNumber}`
}
const onClickRed = () => {
    redScoreNumber++
    alert('Red !, Score=' + redScoreNumber)

    console.log(redScoreNumber)
    redScore.innerHTML = `Red : ${redScoreNumber}`
}
const onClickBlue = () => {
    blueScoreNumber++
    alert('Blue !, Score=' + blueScoreNumber)

    blueScore.innerHTML = `Blue : ${blueScoreNumber}`
}


blackCircle.addEventListener('click', onClickBlack, { passive: true })
redCircle.addEventListener('click', onClickRed, { passive: true })
blueCircle.addEventListener('click', onClickBlue, { passive: true })

window.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp':
            console.log('up')
            if (cyRed > 80) {
                cyRed = cyRed - 10
                redCircle.setAttribute('cy', cyRed)
            }
            console.log(cyRed)
            break;
        case 'ArrowDown':
            if (cyRed <= 500) {
                console.log('down')
                cyRed = cyRed + 10
                redCircle.setAttribute('cy', cyRed)
            }
            console.log(cyRed)
            break;
        case 'ArrowLeft':
            if (cxRed > 10) {
                console.log('left')
                cxRed = cxRed - 2
                redCircle.setAttribute('cx', cxRed + '%')
            }
            break;
        case 'ArrowRight':
            if (cxRed < 90) {
                console.log('right')
                cxRed = cxRed + 2
                redCircle.setAttribute('cx', cxRed + '%')
            }
            break;
    }
})

