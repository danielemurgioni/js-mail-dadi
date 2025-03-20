//MAIL

const invitedEmails = ["pippio@email.com", "franco@email.com", "mario@email.com", "checco@email.com"];

let userEmail = prompt("Scrivi qui la tua email");

for(let i=0; i<invitedEmails.length; i++){
    if(invitedEmails[i] != userEmail){ 
        invitedEmails[i] = false;
    }
    else{
        invitedEmails[i] = true;
    }
    console.log(invitedEmails[i])
}

//DICE GAME

const playerDice = Math.floor((Math.random() * 6)+1);

const computerDice = Math.floor((Math.random() * 6)+1);

if(playerDice>computerDice){
    console.log(`Your result is ${playerDice}, against ${computerDice}. You won!`)
}
else if(playerDice === computerDice){
    console.log(`Your result is ${playerDice}, against ${computerDice}. It's a draw!`)
}
else{
    console.log(`Your result is ${playerDice}, against ${computerDice}. You lose!`)
}