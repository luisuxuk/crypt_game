

// let planet1;
// let getPlanetInfo;

// planet1 = {
// 	name: "Jupiter",
// 	position: 5,
// 	type: "Gas Giant",
// 	radius: 69911,
// 	sizeRank: 1
// };

// getPlanetInfo = function(planet) {
// 	return planet.name + ": planet number " + planet.position;
// };

// console.log(getPlanetInfo(planet1));

// let calculateSizes = function(planet) {
// 	let r = planet.radius;
// 	planet.area = 4 * 3.142 * r * r;
// 	planet.volume = 4 * 3.142 * r *r *r / 3;
// };
// let displaySizes = function(planet) {
// 	console.log(planet.name);
// 	console.log("Surface area= " + planet.area + ".");
// 	console.log("Volume= " + planet.volume + " cubic km.");
// };

// calculateSizes(planet1);
// displaySizes(planet1);

// This is the new way using a constructor function

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
	};
};

getPlanetInfo = function (planet) {
	return planet.name + " is in position " + planet.position + " from the sun.";
};

planet1 = buildPlanet("Jupiter", 5, "Gas giant", 69911, 1);
planet2 = buildPlanet("Neptune", 8, "Ice giant", 24622, 4); 

console.log(getPlanetInfo(planet1));
console.log(getPlanetInfo(planet2));

let point1;
let point2;
let move;
let showPoint;

move = function (point, change) {
	return {
		x: point.x + change.x,
		y: point.y + change.y
	};
};

showPoint = function (point) {
	console.log("(" +  point.x + " , " + point.y + ")")
};

point1 = { x : 2, y : 5 };

point2 = move(point1, { x : 4, y : -2 });

showPoint(point1);
console.log("Move 4 across and 2 down.");
showPoint(point2);

