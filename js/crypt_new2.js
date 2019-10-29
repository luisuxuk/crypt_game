
let player1 = {
	name : "Kandra",
	health : 50,
	place : "The Dungeon of D00m                 ",
	items : ["a rusty key", "the Sword of Destiny                               ", "a piece of cheese"]
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
let hasItemsMessage = " has the following items                      :";
let noItemsMessage = " has no items                                   .";
let i = "";
let j = "";

// New way of doing things

let getPlayerName = function (player) {
	return player.name;
};
let getPlayerHealth = function (player) {
	return player.name + " has health at " + player.health + ".";
};
let getPlayerPlace = function (player) {
	return player.name + " is at " + player.place + ".";
};
/*
let longestItemLength = function (player) {
	let itemsLengthArray = [];
	let itemLine = "";
	let item = "";
	let totalItems = player.items.length;
	console.log(totalItems);
	if (totalItems === 0) {
		itemLine += player.name + noItemsMessage;
		itemsLengthArray.push(itemLine.length);
	} else {
		
		itemLine += player.name + hasItemsMessage;
		itemsLengthArray.push(itemLine.length);
		
		
		// for (i = 0; i < totalItems; i++) {
			// let item = bulletChar + player.items[i] + ".";
			console.log(totalItems);
			// itemLine = item.length;
			
		// itemsLengthArray.push(itemLine);
		
		// }

	}
	longestLength = Math.max(...itemsLengthArray);
	return longestLength;
};
*/
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
			console.log(getLongestLine);
	}

};

console.log (calculateDividerLength(player1));
console.log (calculateDividerLength(player2));
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
let showPlayerName = function (player) {
	let calculateLineFiller = "";
	let itemLine = "";
	let lineFiller = "";
	itemLine = leftMarginChar + getPlayerName(player); 
	calculateLineFiller = Math.abs(itemLine.length - calculateDividerLength(player));
	for (i = 0; i < calculateLineFiller - rightMarginChar.length; i++) {
			lineFiller += " ";
		}
		lineFiller += rightMarginChar;
		showItemLine = leftMarginChar + getPlayerName(player) + lineFiller;
	return showItemLine;
};
let showPlayerHealth = function (player) {
	let calculateLineFiller = "";
	let itemLine = "";
	let lineFiller = "";
	itemLine = leftMarginChar + getPlayerHealth(player); 
	calculateLineFiller = Math.abs(itemLine.length - calculateDividerLength(player));
	for (i = 0; i < calculateLineFiller - rightMarginChar.length; i++) {
			lineFiller += " ";
		}
		lineFiller += rightMarginChar;
		showItemLine = leftMarginChar + getPlayerHealth(player) + lineFiller;
	return showItemLine;
};
let showPlayerPlace = function (player) {
	let calculateLineFiller = "";
	let itemLine = "";
	let lineFiller = "";
	itemLine = leftMarginChar + getPlayerPlace(player); 
	calculateLineFiller = Math.abs(itemLine.length - calculateDividerLength(player));
	for (i = 0; i < calculateLineFiller - rightMarginChar.length; i++) {
			lineFiller += " ";
		}
		lineFiller += rightMarginChar;
		showItemLine = leftMarginChar + getPlayerPlace(player) + lineFiller;
	return showItemLine;
};

 let showPlayerItems = function (player) {
	let lineFiller = "";
	let calculateLineFiller = "";
	let itemLine = "";
	let item = "";
	let itemList = "";
	let showItemLine = "";
	if (player.items.length === 0) {
		itemLine = leftMarginChar + player.name + noItemsMessage;
		calculateLineFiller = Math.abs(itemLine.length - calculateDividerLength(player));
		for (i = 0; i < calculateLineFiller - rightMarginChar.length; i++) {
			lineFiller += " ";
		}
		lineFiller += rightMarginChar;
		showItemLine = leftMarginChar + player.name + noItemsMessage + lineFiller;
	} else {
		itemLine = leftMarginChar + player.name + hasItemsMessage;
		calculateLineFiller = Math.abs(itemLine.length - calculateDividerLength(player));
		for (i = 0; i < calculateLineFiller - rightMarginChar.length; i++) {
			lineFiller += " ";
		}
		lineFiller += rightMarginChar;
		showItemLine += leftMarginChar + player.name + hasItemsMessage + lineFiller;
		
		for (i = 0; i < player.items.length; i++) {
			item = player.items[i] + ".";
			itemList = leftMarginChar + bulletChar + item;
			lineFiller = "";
			calculateLineFiller = Math.abs(itemList.length - calculateDividerLength(player));
			
			for (j = 0; j < calculateLineFiller - rightMarginChar.length; j++) {
				lineFiller += " ";
			}

			lineFiller += rightMarginChar;
			showItemLine += "\n" + leftMarginChar + bulletChar + item.charAt(0).toUpperCase() + item.substring(1) + lineFiller;
			
		}
		
	}
	return showItemLine;	
};
showPlayerItems(player3);
showPlayerItems(player1);
let getPlayerInfo = function (player) {
	let playerInfo = "";
	playerInfo += "\n";
	playerInfo += "\n" + showDivider(player);
	playerInfo += "\n" + showPlayerName(player);
	playerInfo += "\n" + showDivider(player);
	playerInfo += "\n" + showPlayerHealth(player);
	playerInfo += "\n" + showPlayerPlace(player);
	playerInfo += "\n" + showPlayerItems(player);
	playerInfo += "\n" + showDivider(player);
	playerInfo += "\n";

	return playerInfo;
};

console.log(getPlayerInfo(player1));
console.log(getPlayerInfo(player2));
console.log(getPlayerInfo(player3));