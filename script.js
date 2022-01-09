let userNum;
let userChoice ="";
const avilChoice = ["r", "p", "s", "rock", "paper", "scissors"];
let repeat = true;
let win = 0;
let draw = 0;
let lose = 0;
const initialMsg = "Make your move! (please enter r, p, or s.)";
const errorMsg = "***ERROR*** Must select from r, p, or s.";
let isFirstRun = true;
let answer = true;
let computer;

function playGame() {
    do {
        if (isFirstRun) {
            userChoice = prompt(initialMsg).toLowerCase();
            isFirstRun = false;
        } else {
            userChoice = prompt(errorMsg).toLowerCase();
        }
    } while (avilChoice.includes(userChoice)===false);
}

function resetGame() {
    isFirstRun = true;
}

function userInput() {
    userNum = userChoice;
    if (userNum === "r") {
        userNum = 1;
    }   else if (userNum === "s") {
        userNum = 2;
    }   else {
        userNum = 3;
    }
}

function computerNum() {
    computer = Math.floor(3*Math.random()+1);
}

function compare() {
    if (computer - userNum === (1 || -1)) {
        win++;
        console.log("yah, you win!")
    } else if (computer - userNum === 0) {
        draw++;
        console.log("oh, a draw!")
    } else {
        lose++;
        console.log("oops, you lose.")
    }
}

function result() {
    switch (computer) {
        case 1: 
            computer = "rock";
            break;
        case 2: 
            computer = "scissors";
            break;
        case 3:    
            computer = "paper";
    }
    alert("Computer picked " + computer + ". Your score: Win: " + win + "; Lose: " + lose + "; Draw: " + draw + ".");
}

function end() {
    alert("Thanks for playing! Your final score: Win: " + win + "; Lose: " + lose + "; Draw: " + draw + ".");
}

do {
    playGame();
    userInput();
    computerNum();
    compare();
    result();
    answer = confirm("do you want to play one more game?");
    resetGame();
} while (answer === true);

end();
