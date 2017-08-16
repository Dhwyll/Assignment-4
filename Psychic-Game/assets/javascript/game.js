// Hangman JavaScript
// This game at this point does no validity checking
// Thus, you can duplicate guesses and try non-letter guesses
// This would be simple to do with some input handling, but that's not really the point of this exercise, is it?

// Functions first

function randLetter() {

var letters =
    ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var letter = letters[Math.floor(Math.random()*letters.length)];

return letter

}

// Variables second

var refUserChoice = document.getElementById("userChoice");						// Reference to the User's Choice to make the code line a bit smaller
var refTaunts = document.getElementById("taunts");								// Reference to the Taunts section to make the code line a bit smaller
var refGuessesMade = document.getElementById("guessesMade");					// Reference to the Guesses Made list to make the code line a bit smaller
var refGuessesLeft = document.getElementById("guessesLeft");					// Reference to the Guesses Left to make the code line a bit smaller
var refGameWins = document.getElementById("gameWins");							// Reference to the Game Wins to make the3 code line a bit smaller
var refGameLosses = document.getElementById("gameLosses");						// Reference to the Game Losses to make the3 code line a bit smaller
var computerChoice = randLetter();												// Computer chooses a letter
var choiceTally = [];
var wins = 0;
var losses = 0;
console.log("Before starting, Computer Choice is " + computerChoice);

// Start the game
document.onkeyup = function(event) {
	var userGuess = event.key;													// Get the user's guess
	choiceTally.push(userGuess);												// Push the user's guess onto Choice Tally

	if (choiceTally.length === 9) {												// If the number of guesses is 8...
		if (userGuess === computerChoice) {										// Then if the user guessed correctly...
			refTaunts.innerHTML = "You read my mind! &nbspI was thinking "
				+ computerChoice + "!";											// Say you won...
			refGameWins.innerHTML = ++wins;										// Increment the Wins and push to page...
			choiceTally = [];													// Clear the Choice Tally...
			refGuessesMade.innerHTML = choiceTally;								// And push to page...
			computerChoice = randLetter();										// Get a new Computer Choice...
console.log("Before starting, Computer Choice is " + computerChoice);
			refGuessesLeft.innerHTML = 9;										// And reset Guesses Left.
		}

			else {																// Then you lost...
				refGameLosses.innerHTML = ++losses;								// Increment the Losses and push to page...
				refTaunts.innerHTML = "You lose! &nbsp;Try again!"				// Uupdate Taunt...
				computerChoice = randLetter();									// Get a new Computer Choice...
console.log("Before starting, Computer Choice is " + computerChoice);
				choiceTally = [];												// Clear the Choice Tally...
				refGuessesMade.innerHTML = choiceTally;							// And push to page...
				refGuessesLeft.innerHTML = 9;									// And reset Guesses Left.
		
			}
	}
		else {
			if (userGuess === computerChoice) {									// If the user guessed correctly...
				refTaunts.innerHTML = "You read my mind! &nbspI was thinking "
					+ computerChoice + "!";										// Say you won...
				refGameWins.innerHTML = ++wins;									// Increment the Wins and push to page...
				choiceTally = [];												// Clear the Choice Tally...
				refGuessesMade.innerHTML = choiceTally;							// And push to page...
				computerChoice = randLetter();									// Get a new Computer Choice...
console.log("Before starting, Computer Choice is " + computerChoice);
				refGuessesLeft.innerHTML = 9;									// And reset Guesses Left.
			}
			else {																// Otherwise...
				refGuessesMade.innerHTML = choiceTally;							// Display the new Choice Tally
				refTaunts.innerHTML = "You're picking up static."				// Taunt the user
				refGuessesLeft.innerHTML = 9 - choiceTally.length;				// Decrement Guesses Left and push to page
			}
		}
}