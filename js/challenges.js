let questionAndAnswer = {
	question : "What is the capital of France?",
	answer1 : "Berlin",
	answer2 : "São Paulo",
	answer3 : "Paris",
	answer4 : "Brussels",
	correctAnswer : "Paris",
	marks : 2
}

// My challenge
// Loop through the object and list the question 
// and the answers. Check a correct answer exists
// if it doesn't throw an error.
// Compare the answers chosen with the right one
// and say whether they are right or wrong.
// Create a counter that allows you to make two 
// mistakes but closes the quiz if you make 3 
// mistakes.
// Lose one point per mistake done.

let showMessage;
let msg = "The Good Place is a great series.";

showMessage = function (message) {
	console.log(message);
};

showMessage(msg);

msg = prompt("Please enter your message.", " ")
showMessage(msg);

// Save the message in an object that doesn't get 
// overwritten e.g.: oldMsg.date etc...