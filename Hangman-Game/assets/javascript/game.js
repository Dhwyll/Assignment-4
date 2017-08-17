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
var refLeftSide = document.getElementById("leftSide");
var refBackgroundMusic = document.getElementById("backgroundMusic");
var refWinSound = document.getElementById("winSound");
var refWinSource = document.getElementById("winSource");
var computerWord = randWord();													// Computer chooses a character
console.log("The computer chose " + computerWord);
var workingArray = [];															// This is the array showing what letters are correct, set to blank
var guessArray = [];															// This is the Letters Guessed array, set to blank
var guessesLeft = 15;															// Start with 15 guesses
var wins = 0;																	// Start with no wins





// Functions second


function randWord() {															// This function generates a random word to guess

	var words = ["Princess Leia","Queen Amidala","Luke Skywalker","Chewbacca","Darth Vader","Boba Fett"];

	return words[Math.floor(Math.random()*words.length)];

}


function isGuessLegit(letterGuess) {											// This function determines if the User Guess is a lowercase letter
	
	var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	
	return letters.includes(letterGuess);
}


function pushWorkingArray () {													// This function pushes the Working Array to the screen
	refWordResults.innerHTML = "";
	for (i=0; i < workingArray.length; i++) {
		refWordResults.innerHTML = refWordResults.innerHTML + "&nbsp;" + workingArray[i];
	}

}


function pushLettersGuessed () {												// This function pushes the Guess Array to the screen
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

function isGuessInWord(checkLetter, challengeWord) {										// This function determines if the letter is in the word
	for (i=0; i < challengeWord.length; i++) {
		if (challengeWord.charAt(i).toLowerCase() === checkLetter) {
			workingArray[i] = challengeWord.charAt(i);
		}
	}
	
	pushWorkingArray();
}


function isGuessInLettersGuessed(checkLetter, letterArray) {								// This function determines if the letter has already been guessed
	var gotAHit = false;
	for (i=0; (!gotAHit && (i < letterArray.length)); i++) {
		if (letterArray[i] === checkLetter) {
			gotAHit = true;
		}
	}
	return gotAHit;
}

function putGuessInArray(guessLetter) {														// This function pushes the guess into the Letters Guessed Array
	guessArray.push(guessLetter);
	pushLettersGuessed();																	// And then pushes the Letters Guessed array to the screen
}

function didTheyGuessRight() {																// This function determines if the guess is in the word
	var gotItRight = true;
	for (i=0; (gotItRight && (i < computerWord.length)); i++) {
		if (computerWord[i] !== workingArray[i]) {
			gotItRight = false;
		}
	}
	return gotItRight;
}

function resetGame() {																		// This function resets the game after a win or loss
	var newComputerWord = randWord();														// Get a new word
	while (newComputerWord === computerWord) {												// While the new word is the same as the old word...
		newComputerWord = randWord();														// Get a new word...
	}
	computerWord = newComputerWord;															// And then set that to the Computer Word
	setupWorkingSection(computerWord);														// Clear the Working Section
	guessArray=[];																			// Clear the Letters Guessed Array
	pushLettersGuessed();																	// Push the Letters Guessed
	guessesLeft = 15;																		// Reset the number of guesses
	refGuessesRemaining.innerHTML = guessesLeft;											// Push the number of guesses to the screen
}



// Start the game



document.onkeyup = function(event) {
	setupWorkingSection(computerWord);														// Set up the Working Section

	document.onkeyup = function(event) {
		var userGuess = event.key;															// Get the user's guess
		if (isGuessLegit(userGuess) && !isGuessInLettersGuessed(userGuess, guessArray) && guessesLeft !== 0) {	// If lowercase, not guessed, and still playing
			putGuessInArray(userGuess);														// Put the letter in Letters Guessed
			isGuessInWord(userGuess, computerWord);											// Check to see if it's in the word
			refGuessesRemaining.innerHTML = --guessesLeft;									// Decrement guesses left
			console.log ("Did they guess right? " + didTheyGuessRight());
			if (didTheyGuessRight()) {														// If they guessed the word
				if (computerWord[0] === "P") {												// These could be better handled as objects and functions....
					refCharacterName.innerHTML = "Princess Leia"							// But we hadn't reached that yet and I wanted to get it done
					refLeftSide.innerHTML = '<img src="assets/images/Leia.jpg" width=298px height=406px>'
					document.getElementById("backgroundMusic").pause();
					document.getElementById('winSound').src = 'assets/sounds/Leia.mp3';
					document.getElementById("winSound").play();
					refWinSound.onended = function() {document.getElementById("backgroundMusic").play();};
				}
					else if (computerWord[0] === "Q") {
						refCharacterName.innerHTML = "Queen Amidala"
						refLeftSide.innerHTML = '<img src="assets/images/Amidala.jpg" width=298px height=406px>'
						document.getElementById("backgroundMusic").pause();
						document.getElementById('winSound').src = 'assets/sounds/Amidala.mp3';
						document.getElementById("winSound").play();
						refWinSound.onended = function() {document.getElementById("backgroundMusic").play();};
					}
						else if (computerWord[0] === "L") {
							refCharacterName.innerHTML = "Luke Skywalker"
							refLeftSide.innerHTML = '<img src="assets/images/Luke.jpg" width=298px height=406px>'
							document.getElementById("backgroundMusic").pause();
							document.getElementById('winSound').src = 'assets/sounds/Luke.mp3';
							document.getElementById("winSound").play();
							refWinSound.onended = function() {document.getElementById("backgroundMusic").play();};
						}
							else if (computerWord[0] === "C") {
								refCharacterName.innerHTML = "Chewbacca"
								refLeftSide.innerHTML = '<img src="assets/images/Chewbacca.png" width=298px height=406px>'
								document.getElementById("backgroundMusic").pause();
								document.getElementById('winSound').src = 'assets/sounds/Chewbacca.mp3';
								document.getElementById("winSound").play();
								refWinSound.onended = function() {document.getElementById("backgroundMusic").play();};
							}
								else if (computerWord[0] == "D") {
									refCharacterName.innerHTML = "Darth Vader"
									refLeftSide.innerHTML = '<img src="assets/images/Vader.jpg" width=298px height=406px>'
									document.getElementById("backgroundMusic").pause();
									document.getElementById('winSound').src = 'assets/sounds/Vader.mp3';
									document.getElementById("winSound").play();
									refWinSound.onended = function() {document.getElementById("backgroundMusic").play();};
								}
									else {
										refCharacterName.innerHTML = "Boba Fett"
										refLeftSide.innerHTML = '<img src="assets/images/Boba.png" width=298px height=406px>'
										document.getElementById("backgroundMusic").pause();
										document.getElementById('winSound').src = 'assets/sounds/Boba.mp3';
										document.getElementById("winSound").play();
										refWinSound.onended = function() {document.getElementById("backgroundMusic").play();};
									}
				refGameWins.innerHTML = ++wins;
				resetGame();
			}
				else if (guessesLeft === 0) {												// Otherwise, you lost
					refCharacterName.innerHTML = "No!";
					resetGame();
				}
		}
	}
}