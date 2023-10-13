// Game logic 
var computerScore = document.getElementById("computerScore");
var yourScore = document.getElementById("yourScore");
var rock = document.getElementById("rock");
var scissors = document.getElementById("scissors");
var paper = document.getElementById("paper");
var playAgain = document.getElementById("playAgain");
var nextButton = document.getElementById("nextButton");
var playAgainHurrayPage = document.getElementById("playAgainHurrayPage");

var user_choice_fun = "null";

function refresh() {
    location.reload();
}

rock.addEventListener("click", function() {
    computerTurn("rock");
});

scissors.addEventListener("click", function() {
    computerTurn("scissors");
});

paper.addEventListener("click", function() {
    computerTurn("paper");
});

playAgain.addEventListener("click", function() {
    refresh();

});

nextButton.addEventListener("click", function() {
    var hideAll = document.getElementById("main-playground");
    hideAll.classList.add("inactive");

    var hurrayPage = document.getElementById("hurrayPage");
    hurrayPage.classList.remove("inactive");

    nextButton.classList.add("inactive");
});

playAgainHurrayPage.addEventListener("click", function() {
    refresh();

});

function computerTurn(user_choice) {
    user_choice_fun = user_choice;
    var rps = ["rock", "paper", "scissors"];
    var randomIndex = Math.floor(Math.random() * rps.length);
    var comp_choice = rps[randomIndex];
    evaluateResult(user_choice_fun, comp_choice);
}

function evaluateResult(user_choice_fun, comp_choice) {
    var element = document.getElementById("game-play-area");
    element.classList.add("inactive");

    if (user_choice_fun === comp_choice) {
        // Handle tie-hide case here

        var element = document.getElementById("result");
        element.classList.remove("inactive");

        var element = document.getElementById("user-choice-button");
        element.classList.add(`${user_choice_fun}`);

        var element = document.getElementById("comp-choice-button");

        element.classList.add(`${comp_choice}`);

        nextButton.classList.remove("inactive");

        var element = document.getElementById("youL");
        element.innerText = "TIE UP";
        var element = document.getElementById("tie-hide");
        element.classList.add("inactive");
    } else if (
        (user_choice_fun === "rock" && comp_choice === "scissors") ||
        (user_choice_fun === "scissors" && comp_choice === "paper") ||
        (user_choice_fun === "paper" && comp_choice === "rock")
    ) {
        // Handle user win case here

        var element = document.getElementById("result");
        element.classList.remove("inactive");

        var element = document.getElementById("user-choice-button");
        element.classList.add(`won-${user_choice_fun}`);

        var element = document.getElementById("comp-choice-button");

        element.classList.add(`${comp_choice}`);

        nextButton.classList.remove("inactive");

        updateyourScore();
    } else {
        // Handle computer win case here

        var element = document.getElementById("result");
        element.classList.remove("inactive");

        var element = document.getElementById("user-choice-button");
        element.classList.add(`${user_choice_fun}`);

        var element = document.getElementById("comp-choice-button");

        element.classList.add(`won-${comp_choice}`);

        nextButton.classList.remove("inactive");

        var element = document.getElementById("youL");
        element.innerText = "YOU LOST";

        updateComputerScore();
    }

    console.log(user_choice_fun);
    console.log(comp_choice);

    showingUpdateComputerScore();
    showingUpdateyourScore();
    if (computerScoreRetrieve > yourScoreRetrieve) {
        nextButton.classList.add("inactive");
    } else if (computerScoreRetrieve === yourScoreRetrieve) {
        nextButton.classList.add("inactive");
    } else {
        nextButton.classList.remove("inactive");
    }
}

function storeDataComputer(computerScoreValue) {
    localStorage.setItem("computerScore", computerScoreValue);
}

function retrieveDataComputer() {
    var storedComputerScore = localStorage.getItem("computerScore");
    if (storedComputerScore !== null) {
        return parseInt(storedComputerScore);
    } else {
        return 0;
    }
}

// Retrieve the computer's score
var computerScoreRetrieve = retrieveDataComputer();

function showingUpdateComputerScore() {
    computerScore.textContent = computerScoreRetrieve;
}

showingUpdateComputerScore();

function updateComputerScore() {
    var newComputerScore = computerScoreRetrieve ? computerScoreRetrieve + 1 : 1;
    // Update the displayed score
    computerScoreRetrieve = newComputerScore;
    showingUpdateComputerScore();
    // Store the updated score in local storage
    storeDataComputer(newComputerScore);
}

// Your score
function storeDatayour(yourScoreValue) {
    localStorage.setItem("yourScore", yourScoreValue);
}

function retrieveDatayour() {
    var storedyourScore = localStorage.getItem("yourScore");
    if (storedyourScore !== null) {
        return parseInt(storedyourScore);
    } else {
        return 0; // Return 0 if no score is stored
    }
}

// Retrieve the your's score
var yourScoreRetrieve = retrieveDatayour();

function showingUpdateyourScore() {
    yourScore.textContent = yourScoreRetrieve;
}

showingUpdateyourScore();

function updateyourScore() {
    var newyourScore = yourScoreRetrieve ? yourScoreRetrieve + 1 : 1;
    // Update the displayed score
    yourScoreRetrieve = newyourScore;
    showingUpdateyourScore();
    // Store the updated score in local storage
    storeDatayour(newyourScore);
}

function savePageStateToCache() {
    sessionStorage.setItem("cachedPageState", document.documentElement.innerHTML);
}