let movie1;
let movie2;

movie1 = {
	title : "Inside Out",
	actors : "Amy Poehler, Bill Hader",
	directors : "Pete Doctor, Ronaldo Del Carmen"
};
movie2 = {
	title : "Tropa de Elite",
	actors : "Guilherme Santoro, Francisco Cuoco",
	directors : "Patricia Pillar"
};
movie3 = {
	title : "Tropa de Elite2",
	actors : "Guilherme Santoro, Francisco Cuoco",
	directors : "Patricia Pillar"
};

let showMovieInfo = function () {
	console.log("Function: Movie information for " + movie.title);
	console.log("-----------------------------------------");
	console.log("Function: Actors: " + movie.actors);
	console.log("Function: Directors: " + movie.directors);
	console.log("-----------------------------------------");
	console.log("\n")
}
 movie = movie1;
 showMovieInfo();

 movie = movie2;
 showMovieInfo();

  movie = movie3;
 showMovieInfo();