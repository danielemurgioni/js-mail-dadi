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

let sixfaceDice = Math.floor((Math.random() * 6)+1);

console.log(sixfaceDice)