// prompt user for "heads or tails"
let userChoice = prompt("Choose Heads or Tails.");

// computer chooses "heads or tails" based on 0-1 from math.floor(math.random)
let computerChoice = Math.random() < 0.5 ? "Heads" : "Tails";

// computer will update prompt with "you guessed right, the coinflip landed on [choice]" or "Sorry, the coinflip landed on [choice]
if (userChoice === computerChoice) {
    alert("You guessed right! The coin flip landed on " + userChoice);
} else {
    alert("Sorry, the coin flip landed on " + computerChoice);
}

// prompt user for age
let birthYear = prompt("What year were you born?");
let age = 2023 - birthYear;

// if user was born before 2001 prompt will update with "You are old enough to drink in the US"
// if user was born after 2001 promp will update with "Sorry, you are not old enough to drink in the US"
// if user was born in 2001 prompt will update with "You are old enough to drink in the US...barely"
if (age >= 21) {
    alert("You are old enough to drink in the US");
} else if (age === 18) {
    alert("You are old enough to drink in the US...barely");
} else {
    alert("Sorry, you are not old enough to drink in the US");
}