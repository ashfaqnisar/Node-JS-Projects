var rollTheDice = function (argument) {
	console.log("Rolling the " + argument);
	return Math.ceil(6 * Math.random()); 
}

var firstDice = rollTheDice("first_dice");
console.log("You rolled a "+ firstDice);

if(firstDice>=2 && firstDice <=5) 
console.log("Great Roll");

if(firstDice==1 || firstDice == 6) 
console.log("You get another chance to roll the dice")  