"use strict";

//THIS IS THE BOOK'S VERSION

let player1;
let player2;
let player;

let getPlayerName;
let getPlayerHealth;
let getPlayerPlace;
let getPlayerItems;
let getBorder;
let getPlayerInfo;

let spacer = {};

getPlayerName = function(player) {
	return player.name;
};

getPlayerHealth = function(player){
	return player.name + ' has health @' + player.health;
};

getPlayerPlace = function(player){
	return player.name + ' can be found at ' + player.place;
};

getPlayerItems = function(player){
	return player.name + ' has ' + player.items;
};

spacer = {
	blank: function () {
	return '';
	},
	newLine : function () {
	return '\n';
	}
};

getBorder = function() {
	return '------------------------------------------';
};

getPlayerInfo = function(player){
	let playerInfo;

	playerInfo = '\n' + getBorder();
	playerInfo += '\n' + getPlayerName(player);
	playerInfo += '\n' + getBorder();	
	playerInfo += '\n' + getPlayerHealth(player);
	playerInfo += '\n' + getPlayerPlace(player);
	playerInfo += '\n' + getPlayerItems(player);
	playerInfo += '\n' + getBorder();

	return playerInfo;
};

player1 = {
	name: 'Luis',
	health: 70,
	place: 'The Start',
	feetHair: '',
	items: 'a mobile, a watch, a \u00A320 bill'
};

player2 = {
	name: 'Anna',
	health: 70,
	place: 'The Great Door',
	feetHair: '',
	items: 'a broom, a TV set, a \u00A310 bill'
};


player = player1;

// console.log(getPlayerName(player));
// console.log(getPlayerHealth(player));
// console.log(getPlayerPlace(player));
// console.log(getPlayerItems(player));
console.log(getPlayerInfo(player));

player = player2;

// console.log(getPlayerName(player));
// console.log(getPlayerHealth(player));
// console.log(getPlayerPlace(player));
// console.log(getPlayerItems(player));
console.log(getPlayerInfo(player));

let colours = ['red', 'green', 'blue', 'black'];

function showColour (colour, index, array) {
	let colourNumber = index + 1;
	let length = array.length;
	let message = 'The colour is ';

	message += colour;
	message += ' (' + colourNumber;
	message += ' of ' + length + ')';
	message += '\n--------------------------------------------------------';
	message += '\nThis is supposed to be first element colour: ' + colour;
	message += '\nThis is supposed to be second element index: ' + index;
	message += '\nThis is supposed to be third element array: ' + array;

	console.log(message);
	// console.log(colour);
	// console.log(index);
	// console.log(array);
}

colours.forEach(showColour);

// let getVisitorReport = function (visitorArray, dayInWeek) {
// 	let days = [
	// 'Monday',
	// 'Tuesday',
	// 'Wednesday',
	// 'Thursday',
	// 'Friday'
// 	];
// 	let index = dayInWeek - 1;
// 	let visitorReport;

// 	visitorReport = 'This piece of shit of exercise';
// 	visitorReport += '\n' + visitorArray[index];
// 	visitorReport += '\n' + days[index];

// 	return visitorReport;
// }

// let visitors = [354, 132, 210, 221, 481];

// let report = getVisitorReport(visitors, 2);

// console.log(report);


let visits = [750, 354, 132, 210, 221, 481, 1540];

let visitsByDay = function(visits, index) {
	let days = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	index = index - 1;
	return 'On ' + days[index] + ', there were ' + visits[index] + ' visitors.';
}

console.log(visitsByDay(visits, 2));

let destinations = ['Salvador', 'Cairo', 'Maceio', 'Floripa', 'London'];

let brazilianDestinations = [];

let brazilCities1 = destinations.slice(0,1);
let brazilCities2 = destinations.slice(2,4);
brazilianDestinations = brazilCities1.concat(brazilCities2);

brazilianDestinations.splice(2, 0, 'Cachoeira', 'Sao Felix');

console.log(brazilCities1);
console.log(brazilCities2);
console.log(brazilianDestinations.sort());
console.log(destinations);

let showDestination = function(cities, index) {
	index = index + 1;
	console.log(index + '. ' + cities);
};

brazilianDestinations.forEach(showDestination);

["Cachoeira", "Floripa", "Maceio", "Salvador", "Sao Felix"].forEach(function(item, index) {
	index += 1;
	console.log(index + '. ' + item);
});

let itemPrice = [2.50, 6.00, 3.45, 9.99];
let itemQuantity = [1, 2, 2, 1];
let index = itemPrice.length;

let getTotal = function(cost, quantity, index) {
	let total = 0;
	for (let i=0; i<index; i++) {
	total += cost[index] * quantity[index];
	console.log(cost[index] + quantity[index]);
	}
	
};

// console.log(getTotal(itemPrice, itemQuantity, index));


