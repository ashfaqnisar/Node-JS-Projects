var rollTheDice = function (argument) {
	console.log("Rolling the " + argument);
	return Math.ceil(6 * Math.random()); 
}
while(firstDice<4){
	console.log(firstDice);
	firstDice=rollTheDice();
}

do{
firstDice=rollTheDice
}while(firstDice<=2)


var firstDice = rollTheDice("first_dice");
console.log("You rolled a "+ firstDice);