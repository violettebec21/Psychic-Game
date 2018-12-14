//Letter choices available/ similar to fridge game, list out all options
var psychicChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Setting all to zero
let wins = 0;
let losses = 0;
let guesses = 10;
let guessesLeft = 10;
let guessedLetters = [];
let game = 0;
var letterToGuess = null;

//Lets the computer select a random letter from the available choices
var computerGuess = psychicChoices[Math.floor(Math.random() * psychicChoices.length)];
//Allows the user 10 guesses
// guesses = guesses || 10
function updateGuessesLeft() {
    // Grabbing the HTML element and setting it equal to the guessesLeft. (i.e. guessesLeft will get displayed in HTML)
    document.querySelector('#guessLeft').innerHTML = "Guesses left: " + guessesLeft;
};

function updateLetterToGuess() {
    this.letterToGuess = this.psychicChoices[Math.floor(Math.random() * this.psychicChoices.length)];
};

function updateGuessesSoFar() {
    // Here we take the guesses the user has tried -- then display it as letters separated by commas. 
    document.querySelector('#let').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};
// Function will be called when we reset everything
var reset = function () {
    totalGuesses = 10;
    guessesLeft = 10;
    guessedLetters = [];
    updateLetterToGuess();
    updateGuessesLeft();
    updateGuessesSoFar();
}

//When key is released it becomes the users guess
document.onkeypress = function (event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    var check = psychicChoices.includes(userGuess);

    if (check === false) {
        alert("That was not a valid guess, try again");
        return false;
    } else if (check === true) {
        //If the Users choice was an alphabet letter then update guesses left and add users guess to the array of guessed letters
        guessesLeft--;
        guessedLetters.push(userGuess);
        updateGuessesLeft();
        updateGuessesSoFar();

        if (guessesLeft > 0) {
            if (userGuess == letterToGuess) {
                wins++;
                document.querySelector('#wins').innerHTML = "Wins: " + wins;
                userGuess = userGuess.toUpperCase();
                document.querySelector('.game').style.display = '';
                document.querySelector('.game').style.height = '4em';
                document.querySelector('.game').innerHTML = "Good guess! " + userGuess + " was the letter I was thinking of!";
                reset();
            }
        } else /*if (guessesLeft === 0) */{
            // Then we will loss and we'll update the html to display the loss 
            losses++;
            console.log(reset)
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            document.querySelector('.game').style.display = '';
            document.querySelector('.game').innerHTML = "Sorry, I was thinking of the letter " + letterToGuess;
            // Then we'll call the reset. 
            reset();

        }
        return false;
    } else {
        alert("Oops, we have an error");
    }

};