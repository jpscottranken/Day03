/*
	Create a simple guess the number type game. 
	
	It should choose a random number between 1 and 100, 
	then challenge the player to guess the number in 10 turns. 
	
	After each turn the player should be told if they are right
	or wrong, and if they are wrong, whether the guess was too 
	low or too high.
	
	It should also tell the player what numbers they previously 
	guessed. The game will end once the player guesses correctly, 
	or once they run out of turns. 
	
	When the game ends, the player should be given an option to 
	start playing again.
*/

//	Generate a random number between 1 - 100
let randomNumber  = Math.floor(Math.random() * 100) + 1;

//	Create some constants
const guesses 	  = document.querySelector('.guesses');
const lastResult  = document.querySelector('.lastResult');
const lowOrHi 	  = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField  = document.querySelector('.guessField');

//	Create variable for number of guesses
let guessCount = 1;

//	Create variable for reset button
let resetButton;

function checkGuess() {
	let userGuess = Number(guessField.value);
	
	if (guessCount === 1) {
		guesses.textContent = 'Previous guesses: ';
	}
	
	guesses.textContent += userGuess + ' ';

	//	Correct number has been guessed
	if (userGuess === randomNumber) {
		lastResult.textContent = 'Congratulations! You got it right!';
		lastResult.style.backgroundColor = 'green';
		lowOrHi.textContent = '';
		setGameOver();
	} 
	//	Maximum guess amount reached
	else if (guessCount === 10) {
		lastResult.textContent = '!!!GAME OVER!!!';
		setGameOver();
	}
	
	//	Wrong guess.  Maximum guess amount not reached yet
	//	Check to see if guess was too low or too high.
	else {
		lastResult.textContent = 'Wrong!';
		lastResult.style.backgroundColor = 'red';
		
		if(userGuess < randomNumber) {
			lowOrHi.textContent = 'Last guess was too low!';
		}
		else if(userGuess > randomNumber) {
			lowOrHi.textContent = 'Last guess was too high!';
		}
	}

	guessCount++;
	guessField.value = '';
	guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);


