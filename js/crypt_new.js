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

let displayCharacterInfo = function () {
	console.log(player.name);
	console.log("-------------------------------");
	console.log(player.name + " has " + player.items.join(", "));
	console.log(player.name + " is in " + player.place);
	console.log(player.name + " has a health of " + player.health);
	console.log("-------------------------------");
	console.log("\n");
};

player = player1;
displayCharacterInfo();

player = player2;
displayCharacterInfo();