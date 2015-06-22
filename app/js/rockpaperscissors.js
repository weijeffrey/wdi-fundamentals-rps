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
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move||getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move||randomPlay()
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    
if(((playerMove=="rock")&&(computerMove=="scissors"))||((playerMove=="paper")&&(computerMove=="rock"))||((playerMove=="scissors")&&(computerMove=="paper"))) {
        winner = 'player';
    } else {
        if (playerMove == computerMove) {
            winner = 'tie';
        } else {
            winner = 'computer';
        }
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    
    var playerWins = 0;
    var computerWins = 0;
    
    while ((playerWins <5) && (computerWins <5)) {
    
    var playerMove = getPlayerMove();
    var computerMove = getComputerMove();
    var winner = getWinner(playerMove, computerMove);
        
    if (winner == 'player') {
        playerWins +=1;
        console.log ('You Won! Computer chose ' + computerMove);
    } else{
        if (winner == 'computer'){
            computerWins +=1;
            console.log ('You Lost! Computer chose ' + computerMove);
        } else {
            console.log ("It's a tie!");
        } 
    } console.log (playerWins, computerWins);
    } return [playerWins, computerWins];
}
 
playToFive();

