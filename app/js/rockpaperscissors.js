////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////


function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
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
    return move || getInput();
}

function getComputerMove(move) {
    return move || randomPlay();
}

function getWinner(playerMove, computerMove) {
    var winner;
    if (playerMove === computerMove) {
        console.log("It's a tie!");
    } else if (playerMove === "rock") {
            if(computerMove === "paper") {
            console.log("Winner!");
            winner = 'playerWins'
            return winner; 
            } else {
            console.log("Loser!");
            winner = 'computerWins'
            return winner; 
            }
            
    } else if(playerMove === "paper") {
            if(computerMove === "rock") {
            console.log("Loser!");
            winner = 'computerWins'
            return winner; 
            } else {
            console.log("Winner!");
            winner = 'playerWins'
            return winner; 
            }
    }
    else if(playerMove === "scissors") {
            if(computerMove === "rock") {
            console.log("Loser!");
            winner = 'computerWins'
            return winner; 
            } else {
            console.log("Winner!");
            winner = 'playerWins'
            return winner; 
            }
}
    return winner;
}

  function playToFive() {
    console.log("Let's play Rock Paper Scissors");
    var playerWins = 0;
    var computerWins = 0;
    
    // This function should continue to play Rock Paper Scissors until either the player or the computer has won five times.
    // After each 'round', display some text in the console indicating who played what, who won, and what the current scoreboard looks like.
    // For example,
    
    while (computerWins < 5 && playerWins < 5) {
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        winner = getWinner(playerMove, computerMove);

        if (winner === 'computerWins') {
            computerWins++;
            console.log("Player chose " + playerMove + " while Computer chose " + computerMove);
            console.log("The score is currently " + playerWins + " to " + computerWins + "\n");
        } else if (winner === 'playerWins') {
            playerWins++;
            console.log("Player chose " + playerMove + " while Computer chose " + computerMove);
            console.log("The score is currently " + playerWins + " to " + computerWins + "\n");
        }
    }

    return [playerWins, computerWins];
}

playToFive();

