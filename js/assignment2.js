
const WORDSARRAY = ["cats", "dogs", "rats", "horse", "whale"];
const CURRENTWORD = WORDSARRAY[Math.floor(Math.random() * WORDSARRAY.length)];
let wrongGuesses = 10;
let message = "\n";

console.log(CURRENTWORD);

let answerArray = [];
for (let i = 0; i < CURRENTWORD.length; i++) {
  answerArray[i] = "_";
}

let remainingLetters = CURRENTWORD.length;

while (remainingLetters > 0 && wrongGuesses > 0) {
  let userInput = prompt(message + "\n" + answerArray.join(" ") + "\nGuesses left: " + wrongGuesses + "\nGive me a letter.");

  if (userInput === null) {
    break;
  } else if (userInput.length !== 1) {
    message = "One letter please";
  } else {
    for (let j = 0; j < CURRENTWORD.length; j++) {
      if (CURRENTWORD[j] === userInput) {
        answerArray[j] = userInput;
        remainingLetters--;
        message = "You said " + userInput.toLocaleUpperCase() + " . It's correct!\n";
        wrongGuesses++;
        break;
      } else {
        message = "You said " + userInput.toLocaleUpperCase() + ". It's wrong!\n";
      }
    }
  }
  wrongGuesses--;
}


if (remainingLetters === 0) {
  alert("Winner! The word was " + CURRENTWORD);
} else if (wrongGuesses <= 0) {
  alert("You lost! The word was " + CURRENTWORD);
} else {
  alert("You canceled. Refresh the page to try again!");
}