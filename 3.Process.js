var totalCost

console.log('Please enter the total cost for the party')

totalCost=process.argv[2]

console.log("Is the totalCost accurate "+totalCost)

var sizeOfParty = process.argv[3];

avgCost = totalCost/sizeOfParty;

console.log("The Average cost for a party of " + sizeOfParty +" is " + avgCost)