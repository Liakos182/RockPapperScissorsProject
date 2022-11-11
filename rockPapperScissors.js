/*The programme should initiate when the player presses a button,
the event triggered by that should call the rest of the fuctions*/ 
let Rock = document.getElementById('Rock');
let Paper = document.getElementById('Paper');
let Scissors = document.getElementById('Scissors');
let totalScorePlayer = document.getElementById('totalScorePlayer');
let totalScoreComputer = document.getElementById('totalScoreComputer');
let screen = document.getElementById('round');
let Reset = document.getElementById('Reset');
let evilAi = undefined;
let playersSelection = undefined;
let playerScore = 0;
let homeScore = 0;
let roundNumber = 1
getComputerChoice();
Rock.addEventListener('click',playerSelectedRock);
Paper.addEventListener('click',playerSelectedPaper);
Scissors.addEventListener('click',playerSelectedScissors);
Reset.addEventListener('click',Endgame);
document.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'r'||e.key.toLowerCase() === 'q') {
        playerSelectedRock() ;
    }else if(e.key.toLowerCase() === 'p'||e.key.toLowerCase() === 'a'){
        playerSelectedPaper();
    }else if(e.key.toLowerCase() === 's'||e.key.toLowerCase() === 'z'){
        playerSelectedScissors();
    }
});


function playerSelectedRock(playersChoise){
    getComputerChoice();
    playersSelection = "rock";
    showcase();
    playRound();
    winner();
    
   
}
function playerSelectedPaper(playersChoise){
    getComputerChoice();
    playersSelection = "paper";
    showcase();
    playRound();
    winner();
    
   
}
function playerSelectedScissors(playersChoise){
    getComputerChoice();
    playersSelection = "scissors";
    showcase();
    playRound();
    winner();
   
}

function getComputerChoice(randomNumber){
    randomNumber = Math.floor(Math.random()*3)
    if (randomNumber === 0) {
        evilAi = "rock";
        //let showCase = document.getElementById('computerDisplay');
        //showCase.innerHTML = '<img id = "computerImage" src="../RockPapperScissorsProject/images/rock2.jpeg" alt="">';
    } else if (randomNumber === 1 ){
        evilAi = "paper";
        //let showCase = document.getElementById('computerDisplay');
        //showCase.innerHTML = '<img id = "computerImage" src="../RockPapperScissorsProject/images/papper.png" alt="">';
    } else {
        evilAi = "scissors";
        //let showCase = document.getElementById('computerDisplay');
        //showCase.innerHTML = '<img id = "computerImage"src="../RockPapperScissorsProject/images/scissors 2.png" alt="">';
    }
    return evilAi;
}
//this function display the computer choise to the div
function showcase(){
if (evilAi === "rock") {
    let showCase = document.getElementById('computerDisplay');
    showCase.innerHTML = '<img id = "computerImage" src="../RockPapperScissorsProject/images/rock2.jpeg" alt="">';
} else if (evilAi === "paper" ){
    let showCase = document.getElementById('computerDisplay');
    showCase.innerHTML = '<img id = "computerImage" src="../RockPapperScissorsProject/images/papper.png" alt="">';
} else {
    let showCase = document.getElementById('computerDisplay');
    showCase.innerHTML = '<img id = "computerImage" src="../RockPapperScissorsProject/images/scissors 2.png" alt="">';
}
}
function playRound(){
    /*the firt if does the draw,computer and player have the same*/
    
    if( evilAi === playersSelection){
        
        //playerScore += 0
        //homeScore += 0
        screen.innerHTML =`<h1> Round  ` + roundNumber +`  Draw</h1>`;
        totalScorePlayer.innerHTML =playerScore ;
        totalScoreComputer.innerHTML =homeScore;
        roundNumber +=  1;
        return roundNumber;
        /*the next else if will be the computer wins*/ 
    }else if ((evilAi === "paper") && (playersSelection === "rock")){
        homeScore += 1;
        screen.innerHTML =`<h1> Round  ` + roundNumber +`  You loose</h1>`;
        totalScorePlayer.innerHTML = playerScore  ;
        totalScoreComputer.innerHTML = homeScore ;
        roundNumber +=  1;
        return  homeScore, roundNumber;
    }else if ((evilAi === "rock") && (playersSelection === "scissors")){
        homeScore += 1;
        screen.innerHTML =`<h1> Round  ` + roundNumber +`  You loose</h1>`;
        totalScorePlayer.innerHTML = playerScore ;
        totalScoreComputer.innerHTML = homeScore ;
        roundNumber +=  1;
        return homeScore, roundNumber;
    
    }else if ((evilAi === "scissors") && (playersSelection === "paper")){
        homeScore +=1;
        screen.innerHTML =`<h1> Round  ` + roundNumber +`  You loose</h1>`;
        totalScorePlayer.innerHTML = playerScore   ;
        totalScoreComputer.innerHTML = homeScore   ;
        roundNumber +=  1;
        return homeScore, roundNumber;
        
        /*The next 3 else ifs is for the player winning */
    }else if ((playersSelection === "paper") && (evilAi === "rock")){
        playerScore += 1;
        screen.innerHTML =`<h1> Round  ` + roundNumber +`  You win!</h1>`;
        totalScorePlayer.innerHTML = playerScore   ;
        totalScoreComputer.innerHTML = homeScore  ;
        roundNumber +=  1;
        return playerScore, roundNumber;
    }else if ((playersSelection === "rock") && ( evilAi=== "scissors")){
        playerScore += 1;
        screen.innerHTML =`<h1> Round  ` + roundNumber +`  You win!</h1>`;
        totalScorePlayer.innerHTML = playerScore  ;
        totalScoreComputer.innerHTML = homeScore ;
        roundNumber +=  1;
        return playerScore, roundNumber ;
    }else if ((playersSelection === "scissors") && (evilAi === "paper")){
        playerScore += 1;
        screen.innerHTML =`<h1> Round  ` + roundNumber +`  You win!</h1>`;
        totalScorePlayer.innerHTML = playerScore   ;
        totalScoreComputer.innerHTML = homeScore ;
        return playerScore, roundNumber;
    }

}
//this fuction will check if there was a winer on the given round
function winner(){
    if (playerScore === 5){
        screen.innerHTML = '<h1>You win!Well done you Cheeky Scrub!</h1>';
        setTimeout(Endgame,1000);
        return;
    }else if (homeScore === 5){
        screen.innerHTML = '<h1>You loose, better luck next time</h1>';
        setTimeout(Endgame,1000);
        return;
    }else{
        return;
    }
}
function Endgame(){
        playerScore = 0;
        totalScorePlayer.innerHTML = playerScore   ;
        homeScore = 0;
        totalScoreComputer.innerHTML = homeScore ;
        roundNumber = 1
        screen.innerHTML ="<h1>Best of five wins!</h1>";
        let img = document.getElementById("computerImage");
        img.remove();
}
/*the getComputerChoise Fuction creates a random number form 0 to 2
 and stores it in the randomNumber var, that with the if it checks it value
 and sets the evilAi var to a string of rock papper or scissors- none of these
 vars are global so am thinking how am I goning to use them further on

 
 function game(){
    alert("In order to defeat the evil AI and save the world you have defeat in a dramatic rock pappers scissors game in a best of 5 game")
 for (let i = 1;i <=5; i++){
    function getComputerChoice(randomNumber, evilAi){
    randomNumber = Math.floor(Math.random()*3)
    if (randomNumber === 0) {
        evilAi = "rock";
    } else if (randomNumber === 1 ){
        evilAi = "papper";
    } else {
        evilAi = "scissors";
    }
    return evilAi;
}

let computerSelection = getComputerChoice();

/* we are going to fetch the players choise by using a function called 
getPlayersChoise. It will promt a text and recieve a an answer and store 
it in a var as a string, then we will go on to check the string trim it etc
and at the end of the function return an answer all in lower case like we 
did for the computer */
/*I have great trouble with stirng.lenght returning undefiend I have no idea why*/ 


/*let playersChoise = prompt("What do you pick?rock?papper? Or scissors?")
let n = playersChoise.length;
n -= 1;
function getPlayersChoise(playersChoise1){
    playersChoise1 = "" ;
    let letter = "";
    /*This is prob a noob way to find a answer to the case insensitive log in
    it turns any capital letter in rock papper or scissor in to lower case and then
    compares it to the desiered answers, if they are difrent then it gives an alert
    asking for the user to refresh the page-it might be overengineered but hey am trying
    ps. i love you
    ps2 i found that string.lenght dosesnt work for me in a fuction because it returns undefiend
    but it works in global scope,this is also something to figure out*/
/*for (let i = 0; i <=n; i++) {
   letter = playersChoise.charAt(i);
   playersChoise1 += letter.toLocaleLowerCase();
}
if ((playersChoise1 === "rock") || (playersChoise1 === "papper") || (playersChoise1 === "scissors")){
    return playersChoise1
}else {
    alert("you have entered an invalid choise please refresh the page")
}
}
let playersSelection = getPlayersChoise();/*


/* time to write the actual game algorith, am thinking of using the if
thingy creating a  text output,the score var is for the next best of question */

/*function playRound(){
    /*the firt if does the draw,computer and player have the same*/
    
    /*if( computerSelection === playersSelection){
        alert("Draw!!!Both you and computer are weak,no one wins");
        playerScore += 0
        computerScore += 0
        return playerScore, computerScore;
        /*the next else if will be the computer wins*/ 
    /*}else if ((computerSelection === "papper") && (playersSelection === "rock")){
        computerScore += 1;
        alert("Evil AI wins, rock looses to papper");
        return computerScore;
    }else if ((computerSelection === "rock") && (playersSelection === "scissors")){
        computerScore += 1;
        alert("Evil AI wins, scissors looses to rock");
        return computerScore;
    }else if ((computerSelection === "scissors") && (playersSelection === "papper")){
        computerScore += 1;
        alert("Evil AI wins, papper looses to scissors");
        return computerScore;
        /*The next 3 else ifs is for the player winning */
    /*}else if ((playersSelection === "papper") && (computerSelection === "rock")){
        playerScore += 1;
        alert("Congadulations!papper wins rock!Evil AI loooses");
        return playerScore;
    }else if ((playersSelection === "rock") && ( computerSelection=== "scissors")){
        playerScore += 1;
        alert("Congadulations!rock wins scissor!Evil AI loooses");
        return playerScore;
    }else if ((playersSelection === "scissors") && (computerSelection === "papper")){
        playerScore += 1;
        alert("Congadulations!scissors wins papper!Evil AI loooses");
        return playerScore;
    }

}

playRound();


/*if (playerScore > computerScore){
    alert("you win!the world is saved");
}else if (playerScore < computerScore){
    alert("you lost the world is doomed")
}else{
    alert("its a draw,I gues the world is still doomed")
}
alert(`the score is you: ${playerScore}, evil Ai ${computerScore}`)
}*/