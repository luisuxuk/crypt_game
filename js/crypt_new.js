let showPlayerName = function (playerName) {
	console.log(playerName);
};

let showPlayerHealth = function (playerName, playerHealth) {
	console.log(playerName + " has health at " + playerHealth + ".");
};
let showPlayerLocation = function (playerName, playerLocation) {
	console.log(playerName + " is at " + playerLocation + ".");
};
let showPlayerItems = function (playerName, playerItems) {
	console.log(playerName + " has " + playerItems + ".");
};

// New way of doing things

let getPlayerName = function (playerName) {
	return playerName;
};

let getPlayerHealth = function (playerName, playerHealth) {
	return playerName + " has health at " + playerHealth + ".";
};
let getPlayerLocation = function (playerName, playerLocation) {
	return playerName + " is at " + playerLocation + ".";
};
let getPlayerItems = function (playerName, playerItems) {
	return playerName + " has " + playerItems + ".";
};


let player1 = {
	name : "Kandra",
	health : 50,
	place : "The Dungeon of D00m",
	items : ["a rusty key", "the Sword of Destiny", "a piece of cheese"]
};

let player2 = {
	name : "Dax",
	health : 40,
	place : "The Old Library",
	items : ["1 copper coin", "a tesseract", "a stone"]
};

let player3 = {
	name : "Luis",
	health : 70,
	place : "Castle of Myrrh",
	items : ["3 pennies", "broken key", "mould bread"]
};

let displayCharacterInfo = function (playerName, playerHealth, playerLocation, playerItems) {
	showPlayerName(playerName);
	console.log("-------------------------------");
	showPlayerHealth(playerName, playerHealth);
	showPlayerLocation(playerName, playerLocation);
	showPlayerHealth(playerName, playerItems);
	console.log("-------------------------------");
	console.log("\n");
};

displayCharacterInfo(player1.name, player1.health, player1.place, player1.items.join(", "));
displayCharacterInfo(player2.name, player2.health, player2.place, player2.items.join(", "));
displayCharacterInfo(player3.name, player3.health, player3.place, player3.items.join(", "));

let getHelloTo = function (name) {
	return "Hello to " + name + ".";
}

console.log(getHelloTo("Luis"));
