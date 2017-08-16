// Hangman JavaScript

// Get a random word
// Set up the working section
// On keypress
	// Set the user's guess
	// Check if the user's guess is a valid letter
		// If not, do nothing
	// Check if the user's guess is in the list of guessed letters
		// If so, do nothing
		
		// Otherwise, push the guess into the list of guessed letters
		// If the last guess (guessed letters list length is 15)
			// Check to see if user won (letter is in the word)
				// Increment wins and push to page
				// Clear the list of guessed letters
				// Push cleared list of guessed letters to page
				// Clear the working section
				// Display full word at top
				// Display picture
				// Play sound
				// Get a new word
				// Reset number of guesses and push to page
			
			// Otherwise you lost
				// Get a new word
				// Clear the list of guessed letters
				// Push cleared list of guessed letters to page
				// Clear the working section
				// Reset number of guesses and push to page
			
		// Otherwise, we're still playing
			// If the letter is in the word
				// Add letter to list of guessed letters
				// Push new list of guessed letters to page
				// Display letter in working section
			
			// Otherwise, it's not in the word
				// Add letter to list of guessed letters
				// Push new list of guessed letters to page
				// Decrement number of guesses left and push to page


// Variables first


var refWordResults = document.getElementById("wordResults");
var computerWord = randWord();													// Computer chooses a character
console.log("The computer chose " + computerWord);
var guessesLeft = 15;															// Start with 15 guesses





// Functions second


function randWord() {

	var words = ["Princess Leia","Queen Amidala","Luke Skywalker","Chewbacca","Darth Vader","Boba Fett"];

	return words[Math.floor(Math.random()*words.length)];

}


function isGuessLegit(letterGuess) {
	
	var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	
	return letters.includes(letterGuess);
}


function setupWorkingSection(challengeWord) {												// This function sets the Working Section to dashes

	for (i=0; i < challengeWord.length; i++) {												// For each letter in the word...
		if (challengeWord.charAt(i) === " ") {												// Check to see if it's a space...
			refWordResults.innerHTML = refWordResults.innerHTML + "&nbsp;&nbsp;&nbsp;";		// If so, put in a space...
		}
			else {
				refWordResults.innerHTML = refWordResults.innerHTML + "_&nbsp;";			// Otherwise, put in a blank.
			}
	}
}

function isGuessInWord(checkLetter, challengeWord) {										// This functions determines if the letter is in the word
	
}



// Start the game




setupWorkingSection(computerWord);														// Set up the Working Section

document.onkeyup = function(event) {
	var userGuess = event.key;															// Get the user's guess
	if (isGuessLegit(userGuess)) {														// If it's a lowercase letter
		console.log("userGuess " + userGuess + " is " + isGuessLegit(userGuess));
		
	}
	
}


// var refUserChoice = document.getElementById("userChoice");						// Reference to the User's Choice to make the code line a bit smaller
// var refTaunts = document.getElementById("taunts");								// Reference to the Taunts section to make the code line a bit smaller
// var refGuessesMade = document.getElementById("guessesMade");					// Reference to the Guesses Made list to make the code line a bit smaller
// var refGuessesLeft = document.getElementById("guessesLeft");					// Reference to the Guesses Left to make the code line a bit smaller
// var refGameWins = document.getElementById("gameWins");							// Reference to the Game Wins to make the3 code line a bit smaller
// var refGameLosses = document.getElementById("gameLosses");						// Reference to the Game Losses to make the3 code line a bit smaller
// var computerChoice = randLetter();												// Computer chooses a letter
// var choiceTally = [];
// var wins = 0;
// var losses = 0;
// console.log("Before starting, Computer Choice is " + computerChoice);

// Start the game
// document.onkeyup = function(event) {
	// var userGuess = event.key;													// Get the user's guess
	// choiceTally.push(userGuess);												// Push the user's guess onto Choice Tally

	// if (choiceTally.length === 9) {												// If the number of guesses is 8...
		// if (userGuess === computerChoice) {										// Then if the user guessed correctly...
			// refTaunts.innerHTML = "You read my mind! &nbspI was thinking "
				// + computerChoice + "!";											// Say you won...
			// refGameWins.innerHTML = ++wins;										// Increment the Wins and push to page...
			// choiceTally = [];													// Clear the Choice Tally...
			// refGuessesMade.innerHTML = choiceTally;								// And push to page...
			// computerChoice = randLetter();										// Get a new Computer Choice...
// console.log("Before starting, Computer Choice is " + computerChoice);
			// refGuessesLeft.innerHTML = 9;										// And reset Guesses Left.
		// }

			// else {																// Then you lost...
				// refGameLosses.innerHTML = ++losses;								// Increment the Losses and push to page...
				// refTaunts.innerHTML = "You lose! &nbsp;Try again!"				// Uupdate Taunt...
				// computerChoice = randLetter();									// Get a new Computer Choice...
// console.log("Before starting, Computer Choice is " + computerChoice);
				// choiceTally = [];												// Clear the Choice Tally...
				// refGuessesMade.innerHTML = choiceTally;							// And push to page...
				// refGuessesLeft.innerHTML = 9;									// And reset Guesses Left.
		
			// }
	// }
		// else {
			// if (userGuess === computerChoice) {									// If the user guessed correctly...
				// refTaunts.innerHTML = "You read my mind! &nbspI was thinking "
					// + computerChoice + "!";										// Say you won...
				// refGameWins.innerHTML = ++wins;									// Increment the Wins and push to page...
				// choiceTally = [];												// Clear the Choice Tally...
				// refGuessesMade.innerHTML = choiceTally;							// And push to page...
				// computerChoice = randLetter();									// Get a new Computer Choice...
// console.log("Before starting, Computer Choice is " + computerChoice);
				// refGuessesLeft.innerHTML = 9;									// And reset Guesses Left.
			// }
			// else {																// Otherwise...
				// refGuessesMade.innerHTML = choiceTally;							// Display the new Choice Tally
				// refTaunts.innerHTML = "You're picking up static."				// Taunt the user
				// refGuessesLeft.innerHTML = 9 - choiceTally.length;				// Decrement Guesses Left and push to page
			// }
		// }
// }