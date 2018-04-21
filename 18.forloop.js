var rollTheDice = function (argument) {
	return Math.ceil(6 * Math.random()); 
}

dice=rollTheDice();

if(dice >= 4){
	for (var i = 1; i < dice ; i++) {
	dice=rollTheDice();
	console.log("*")
	}
}
else if(dice <=4){
	for (var i = 1; i < dice; i++) {
		console.log("-")
	}
}
dice>=4?console.log("Its a great roll"):console.log("It is a ok roll");
console.log("You rolled a "+ dice);
