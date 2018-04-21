var rollTheDice = function (argument) {
	console.log("Rolling the " + argument);
	console.log("Number in the "+ argument +" is "+ Math.ceil(6 * Math.random()));
	return Math.ceil(6 * Math.random()); 
}

var firstDice = rollTheDice("first_dice");
var secondDice = rollTheDice("second_dice");

var diceTotal = firstDice + secondDice;
console.log("The total of both the dice is "+diceTotal);