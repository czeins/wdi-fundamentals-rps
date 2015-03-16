////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////


function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    if (move === null) {
        return getInput();
    } else {
        return move;
    }
}

function getComputerMove(move) {
if (move !== null) {
return move;
}
else {
 randomPlay();
}
}


function getWinner(getplayerMove,getcomputerMove) {
    var winner;
    if(playermove === computerMove) {
        console.log("It's a tie!");
    } else if(playermove === "rock") {
            if(computermove === "paper") {
            return playerWins; 
            } else {
            return computerWins; ;
            }
            
    } else if(playermove === "paper") {
            if(computermove === "rock") {
            return computerWins; 
            } else {
            return playerWins; 
            }
    }
    else if(playermove === "scissors") {
            if(computermove === "rock") {
            return computerWins;
            } else {
            return playerWins; {
            }
}
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}

