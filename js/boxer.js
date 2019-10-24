let info1 = "Info piece";
let info2 = "This is a piece of information";
let info3 = "This is another piece of information.";
let info4 = "Information is beautiful";

let dividerChar = "-";
let marginChar = "|";

let getLongest = Math.max(info1.length, info2.length, info3.length, info4.length);
let i;
let divider = "";

for (i = 0; i < getLongest + 4; i ++) {
	divider += dividerChar;
}

let calculateFiller = function (info) {
	let infoFiller = "";
	for (i = 0; i < getLongest - info.length; i++) {
		infoFiller += " ";
	}
	return infoFiller;
}

let info1Filler = calculateFiller(info1);
let info2Filler = calculateFiller(info2);
let info3Filler = calculateFiller(info3);
let info4Filler = calculateFiller(info4);

console.log(divider);
console.log(marginChar + " " + info1 + info1Filler + " " + marginChar);
console.log(divider);
console.log(marginChar + " " + info2 + info2Filler + " " + marginChar);
// console.log(divider);
console.log(marginChar + " " + info3 + info3Filler + " " + marginChar);
// console.log(divider);
console.log(marginChar + " " + info4 + info4Filler + " " + marginChar);
console.log(divider);
