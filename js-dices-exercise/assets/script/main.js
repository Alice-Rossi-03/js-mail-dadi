// random number generator function 
function RandomNumber(min,max){
    return Math.floor(Math.random()*(max-min + 1) + min )
}

// variables 
let playerMove = document.getElementById("playerMove")
let computerMove = document.getElementById("computerMove")

// how to get a random number 
let randomPlayerNumber = RandomNumber(1,6)
let randomComputerNumber = RandomNumber(1,6)

// button variable
let btnPlay = document.getElementById("btnPlay")

// result variables 
let playerWin = document.getElementById("playerWin")
let computerWin = document.getElementById("computerWin")
let itsTie = document.getElementById("itsTie")

// add event listener function 
btnPlay.addEventListener('click', function(){
    playerMove.innerHTML = `${randomPlayerNumber}`
    computerMove.innerHTML = `${randomComputerNumber}`

    if (randomPlayerNumber > randomComputerNumber){
        playerWin.classList.remove("d-none")
    } else if (randomPlayerNumber === randomComputerNumber){
        itsTie.classList.remove("d-none")
    } else {
        computerWin.classList.remove("d-none")
    }
})

