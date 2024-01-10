// 1 - Chiedi all’utente la sua email
// 2 - Controlla che sia nella lista di chi può accedere
// 3 - Stampa un messaggio appropriato sull’esito del controllo 

// creating an array 
let emailAllowed = ["pippo@gmail.com", "pluto@gmail.com"]

let writtenEmail = document.getElementById("writtenEmail") 

let checkingEmail = false 

let divContainer = document.getElementById("appendVerification")



let btnCheck = document.getElementById("btnCheck")

btnCheck.addEventListener("click", function(){
    
    let titleText = document.querySelectorAll(".classText")

    for (let i = 0; i < titleText.length; i++){
        titleText[i].remove()
    }

    let emailValue = writtenEmail.value 

    for (let i = 0; i < emailAllowed.length; i++){
        if(emailValue === "pippo@gmail.com"){
            checkingEmail = true 
        } else if (emailValue === "pluto@gmail.com"){
            checkingEmail = true 
        } 
    }
    
    if(checkingEmail==true){
        let youreAllowed = document.createElement("div")
        divContainer.append(youreAllowed) 
        youreAllowed.innerHTML += `Succeful Login!`
        youreAllowed.className = "allowed classText"
    } else {
        let youreNotAllowed = document.createElement("div")
        divContainer.append(youreNotAllowed) 
        youreNotAllowed.innerHTML += 'You re not allowed!'
        youreNotAllowed.className = "not-allowed classText"
    }
    

})


