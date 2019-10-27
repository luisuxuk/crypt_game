
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
	items : [] //"3 pennies", "broken key", "mould bread"
};

let leftMarginChar = "| ";
let rightMarginChar = " |";
let dividerChar = "-";
let bulletChar = "  + ";
let hasItemsMessage = " has the following items:";
let noItemsMessage = " has no items.";
let i = "";

// New way of doing things

let getPlayerName = function (player, marginChar) {
	return player.name;
};
let getPlayerHealth = function (player) {
	return player.name + " has health at " + player.health + ".";
};
let getPlayerPlace = function (player) {
	return player.name + " is at " + player.place + ".";
};
let showPlayerItems = function (player) {

	let showItemLine = "";
	if (player.items.length === 0) {
		showItemLine += leftMarginChar + player.name + noItemsMessage + rightMarginChar;
	} else {
		showItemLine += player.name + hasItemsMessage;

		for (i = 0; i < player.items.length; i++) {
			item = player.items[i] + ".";
			showItemLine = bulletChar + item.charAt(0).toUpperCase() + item.substring(1);

		}
	}
	return showItemLine;	
};
console.log(showPlayerItems(player1));

let longestItemLength = function (player) {
	let itemsLengthArray = [];
	let itemLine = "";
	if (player.items.length === 0) {
		itemLine += player.name + noItemsMessage;
		itemsLengthArray.push(itemLine.length);
	} else {
		itemLine = player.name + hasItemsMessage;
		itemsLengthArray.push(itemLine.length);
		console.log(itemLine + itemsLengthArray[0]);
		for (i = 0; i < player.items.length; i++) {
			itemLine = bulletChar + player.items[i] + ".";
			itemsLengthArray.push(itemLine.length);
			console.log(itemLine + itemsLengthArray[i + 1]);
		}
	}
	longestLength = Math.max(...itemsLengthArray);
	return longestLength;
};
console.log(longestItemLength(player1));

let calculateDividerLength = function (player) {
	let getLongestLine = Math.max(
		getPlayerName(player).length, 
		getPlayerHealth(player).length,
		getPlayerPlace(player).length,
		// longestItemLength(player)
	);
	if (getLongestLine < 40) {
		getLongestLine = 40;
		return getLongestLine + leftMarginChar.length + rightMarginChar.length;
	} else {
		return getLongestLine + leftMarginChar.length + rightMarginChar.length;
	}
};

let showDivider = function (player) {
	let dividerLine = "";
	for (i = 0; i < calculateDividerLength(player); i++) {
		dividerLine += dividerChar;
	}
	return dividerLine;
};
 
 // Oh man, it didn't work but I learnt that you can only replace a string with another 
 // string if there isn't a string to substitute in first place.
 // Replace won't substitute a space " " for a string "|"
 
 // console.log(getPlayerName(player1).replace(String(getPlayerName(player1)).charAt(10), "|"));

let getPlayerInfo = function (player) {
	let playerInfo = "";
	playerInfo += "\n";
	playerInfo += "\n" + showDivider(player);
	playerInfo += "\n" + leftMarginChar + getPlayerName(player);
	playerInfo += "\n" + showDivider(player);
	playerInfo += "\n" + leftMarginChar + getPlayerHealth(player);
	playerInfo += "\n" + leftMarginChar + getPlayerPlace(player);
	// playerInfo += "\n" + getPlayerItems(player);
	playerInfo += "\n" + showDivider(player);
	playerInfo += "\n";

	return playerInfo;
};

console.log(getPlayerInfo(player1));
console.log(getPlayerInfo(player2));
console.log(getPlayerInfo(player3));