
const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

let humanScoreNumber = 0
let machineScoreNumber = 0

//usando uma function normal
function playHuman(humanChoice) {

    platTheGame(humanChoice, playMachine())

    //console.log(humanChoice)
    //console.log('retorno ' + playMachine())
}

//usando uma arrowFunction
const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']

    //sorteia um numero aleatório entre 0 e 1 e arredonda para baixo
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

const platTheGame = (human, machine) => {

    console.log("humano: " + human + " Maquina: " + machine)

    if (human === machine) {
        result.innerHTML = "Deu empate"
    } else if ((human === 'paper' && machine === 'rock') ||
        (human === 'rock' && machine === 'scissors') ||
        (human === 'scissors' && machine === 'paper')) {
        
            humanScoreNumber++
            humanScore.innerHTML = humanScoreNumber
            result.innerHTML = "Vocẽ ganhou!!"

    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "Vocẽ perdeu para a alexa!"
    }
}

