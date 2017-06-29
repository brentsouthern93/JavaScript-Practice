//is even

/*function isEven(num) {
	if(num % 2 === 0) {
		return true;
	}
	else {
		return false 
	}
}	
*/
//simplified version
function isEven(num) {
	return num % 2 === 0;
}

//factorial
function factorial(num) {
	var result = 1;
	for (var i = 1; i <= num; i++) {
		result *= i;
	}
	return result;
}

//kabobTosnake
function kebabToSnake(str) {
	var newStr = str.replace(/-/g , "_");
	return newStr;
}