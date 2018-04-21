var firstDice;
var secondDice;

firstDice  = Math.ceil(6 * Math.random());
secondDice = Math.ceil(6 * Math.random());

console.log("Number in the first dice is "+firstDice);
console.log("Number in the second dice is "+secondDice);

var diceTotal = firstDice + secondDice;
console.log("The total of both the dice is "+diceTotal);