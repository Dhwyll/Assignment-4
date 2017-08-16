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
var refLettersGuessed = document.getElementById("lettersGuessed");
var refGuessesRemaining = document.getElementById("guessesRemaining");
var refCharacterName = document.getElementById("characterName");
var refGameWins = document.getElementById("gameWins");
var computerWord = randWord();													// Computer chooses a character
console.log("The computer chose " + computerWord);
var workingArray = [];
var guessArray = [];
var guessesLeft = 15;															// Start with 15 guesses
var wins = 0;





// Functions second


function randWord() {

	var words = ["Princess Leia","Queen Amidala","Luke Skywalker","Chewbacca","Darth Vader","Boba Fett"];

	return words[Math.floor(Math.random()*words.length)];

}


function isGuessLegit(letterGuess) {
	
	var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	
	return letters.includes(letterGuess);
}


function pushWorkingArray () {
	refWordResults.innerHTML = "";
	for (i=0; i < workingArray.length; i++) {
		refWordResults.innerHTML = refWordResults.innerHTML + "&nbsp;" + workingArray[i];
	}

}


function pushLettersGuessed () {
	refLettersGuessed.innerHTML = "";
	for (i=0; i < guessArray.length; i++) {
		refLettersGuessed.innerHTML = refLettersGuessed.innerHTML + "&nbsp;" + guessArray[i];
	}
}


function setupWorkingSection(challengeWord) {												// This function sets the Working Section to dashes

	workingArray = [];

	for (i=0; i < challengeWord.length; i++) {												// For each letter in the word...
		if (challengeWord.charAt(i) === " ") {												// Check to see if it's a space...
			workingArray.push(" ");															// If so, put in a space...
		}
			else {
				workingArray.push("_");														// Otherwise, put in a blank.
			}
	}
	
	pushWorkingArray();

}

function isGuessInWord(checkLetter, challengeWord) {										// This functions determines if the letter is in the word
	for (i=0; i < challengeWord.length; i++) {
		if (challengeWord.charAt(i).toLowerCase() === checkLetter) {
			workingArray[i] = challengeWord.charAt(i);
		}
	}
	
	pushWorkingArray();
}


function isGuessInLettersGuessed(checkLetter, letterArray) {
	var gotAHit = false;
	for (i=0; (!gotAHit && (i < letterArray.length)); i++) {
		if (letterArray[i] === checkLetter) {
			gotAHit = true;
		}
	}
	return gotAHit;
}

function putGuessInArray(guessLetter) {
	guessArray.push(guessLetter);
	
	pushLettersGuessed();
}

function didTheyGuessRight() {
	var gotItRight = true;
	for (i=0; (gotItRight && (i < computerWord.length)); i++) {
		if (computerWord[i] !== workingArray[i]) {
			gotItRight = false;
		}
	}
	return gotItRight;
}

function resetGame() {
	computerWord = randWord();
	setupWorkingSection(computerWord);
	guessArray=[];
	pushLettersGuessed();
	guessesLeft = 15;
	refGuessesRemaining.innerHTML = guessesLeft;
}



// Start the game



document.onkeyup = function(event) {
	setupWorkingSection(computerWord);														// Set up the Working Section

	document.onkeyup = function(event) {
		var userGuess = event.key;															// Get the user's guess
		if (isGuessLegit(userGuess) && !isGuessInLettersGuessed(userGuess, guessArray) && guessesLeft !== 0) {	// If it's a lowercase letter and not in list
			putGuessInArray(userGuess);
			isGuessInWord(userGuess, computerWord);
			refGuessesRemaining.innerHTML = --guessesLeft;
			console.log ("Did they guess right? " + didTheyGuessRight());
			if (didTheyGuessRight()) {
				if (computerWord[0] === "P") {
					refCharacterName.innerHTML = "Princess Leia"
					// update leftSide with Princess Leia
					// Play Leia sound
				}
					else if (computerWord[0] === "Q") {
						refCharacterName.innerHTML = "Queen Amidala"
						// update leftSide with Queen Amidala
						// Play Amidala sound
					}
						else if (computerWord[0] === "L") {
							refCharacterName.innerHTML = "Luke Skywalker"
							// update leftSide with Luke Skywalker
							// Play Luke sound
						}
							else if (computerWord[0] === "C") {
								refCharacterName.innerHTML = "Chewbacca"
								// update leftSide with Chewbacca
								// Play Chewbacca sound
							}
								else if (computerWord[0] == "D") {
									refCharacterName.innerHTML = "Darth Vader"
									// update leftSide with Darth Vader
									// Play Vader sound
								}
									else {
										refCharacterName.innerHTML = "Boba Fett"
										// update leftSide with Boba Fett
										// Play Boba sound
									}
				refGameWins.innerHTML = ++wins;
				resetGame();
			}
				else if (guessesLeft === 0) {
					refCharacterName.innerHTML = "No!";
					resetGame();
				}
		}
	}
}
