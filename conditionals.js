// prompt user for age
let birthYear = prompt("What year were you born?");
let age = 2023 - birthYear;

// if user was born before 2001 prompt will update with "You are old enough to drink in the US"
// if user was born after 2001 prompt will update with "Sorry, you are not old enough to drink in the US"
// if user was born in 2001 prompt will update with "You are old enough to drink in the US...barely"
if (age >= 21) {
    alert("You are " + age + " years old. You are old enough to drink in the US.");
} else if (age === 21) {
    alert("You are " + age + " years old. You are old enough to drink in the US...barely.");
} else {
    alert("You are " + age + " years old. Sorry, you are not old enough to drink in the US.");
}

// prompt user for "heads or tails"
let userChoice = prompt("Choose Heads or Tails.").toLowerCase();

// validate user input
if (userChoice !== "heads" && userChoice !== "tails") {
    alert("Invalid input. Please choose Heads or Tails.");
} else {
// computer chooses "heads or tails" based on 0-1 from Math.floor(Math.random())
  let computerChoice = Math.floor(Math.random() * 2) === 0 ? "Heads" : "Tails";

// computer will update prompt with "you guessed right, the coinflip landed on [choice]" or "Sorry, the coinflip landed on [choice]
if (userChoice === computerChoice.toLowerCase()) {
    alert("You guessed right! The coin flip landed on " + userChoice);
} else {
    alert("Sorry, the coin flip landed on " + computerChoice);
}
}