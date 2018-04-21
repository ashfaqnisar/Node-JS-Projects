var firstDice;
var secondDice;

firstDice = 6 *Math.random();//It is a function which generates different values when executed
secondDice = 6 * Math.random();
console.log(firstDice)

firstDice = Math.ceil(firstDice);//It is a func if there is a point it takeks the greatest value
secondDice = Math.ceil(secondDice);

console.log("Number in the first dice is "+firstDice);
console.log("Number in the second dice is "+secondDice);

var diceTotal = firstDice + secondDice;
console.log("The total of both the dice is "+diceTotal);