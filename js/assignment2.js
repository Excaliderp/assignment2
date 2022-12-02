/*







*/




let wordsArray = ["cats", "dogs", "rats", "horse", "whale"];
let currentWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
let remainingLetters = currentWord.length;
let answerArray = [];
let wrongGuess = [0];



for (let i = 0; i < currentWord.length; i++) {
  answerArray[i] = "_";
}


while (remainingLetters > 0  || wrongGuess < 6) {
  alert(answerArray.join(" "));
  let guess = prompt("Give me a letter.");
  if (guess === null) {
    break;
  } else if (guess.length !== 1) {
    alert("Please, one letter at a time.");
  } else if {
    for(let j = 0; j <currentWord.length; j++) {
    if (currentWord[j] === guess) {
      answerArray[j] = guess;
      remainingLetters--;
    }
  }
} else {
  if (currentWord[j] !== guess) {
    wrongGuess++;
  }
}
}

alert(answerArray.join(" "));
alert("Good job! the answer was " + currentWord);

console.log(currentWord);
console.log(answerArray);
console.log[remainingLetters];
console.log[wrongGuess];

// alert(answerArray.join(" "));     använd funktionen men inte alert i prompt

/*
while loop better for when you need apecific times of loops, for example guessing
(infinite easier)

for loop better for when you don't know how many times need to loop, using [i]

winner = false. 
if winner = ArrayWord.lentgh = true

if winner = true > you win the game

loser = 0
if loser = word.length > lose the game

do while
*/