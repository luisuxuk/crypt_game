
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
let getBorder = function () {
	return "++++++++++++++++++++++++++++++++++"
}


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

let getPlayerInfo = function (playerName, playerHealth, playerLocation, playerItems) {
	
	let playerInfo;

	playerInfo = "\n" + getPlayerName(playerName);
	playerInfo += "\n" + getBorder();
	playerInfo += "\n" + getPlayerHealth(playerName, playerHealth);
	playerInfo += "\n" + getPlayerLocation(playerName, playerLocation);
	playerInfo += "\n" + getPlayerHealth(playerName, playerItems);
	playerInfo += "\n" + getBorder();
	playerInfo += "\n";

	return playerInfo;
};

let player;

player = player1;

let getInventory = document.querySelector("#inventory");

let textify = document.createTextNode(
	getPlayerInfo(
		player.name, player.health, player.place, player.items.join(", ")
		)
	)
getInventory.appendChild(textify);

console.log(getPlayerInfo(player.name, player.health, player.place, player.items.join(", ")));

player = player2;

console.log(getPlayerInfo(player.name, player.health, player.place, player.items.join(", ")));

let planet1;
let getPlanetInfo;

planet1 = {
	name: "Jupiter",
	position: 5,
	type: "Gas Giant",
	radius: 69911,
	sizeRank: 1
};

getPlanetInfo = function(planet) {
	return planet.name + ": planet number " + planet.position;
};

console.log(getPlanetInfo(planet1));

let calculateSizes = function(planet) {
	let r = planet.radius;
	planet.area = 4 * 3.142 * r * r;
	planet.volume = 4 * 3.142 * r *r *r / 3;
};
let displaySizes = function(planet) {
	console.log(planet.name);
	console.log("Surface area= " + planet.area + ".");
	console.log("Volume= " + planet.volume + " cubic km.");
};

calculateSizes(planet1);
displaySizes(planet1);

let buildPlanet;
let getPlanetInfo;
let planet1;
let planet2;

buildPlanet = function (name, position, type, radius, rank) {
	return {
		name: name,
		position: position,
		type: type,
		radius: radius,
		rank: rank
	}
}

