
var name=process.argv[2]
var writeGreeting= function (p_name) {
	p_name=name		//How we need to declare a function
	var msg1="Hello";//we are creating a variable in the method only
	var msg2 = "World";
	console.log(msg1);//It prints the first message
	console.log(msg2);
	console.log(p_name)//It prints the secongd message
}
writeGreeting();//We are calling the function
console.log(typeof console.log);//It gives as a typeof a s function