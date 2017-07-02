//Write a function to print out numbers in an array in reverse order
function printReverse(arr) {
	for(var i = arr.length -1; i >= 0; i--) {
		console.log(arr[i]);
	}
}
printReverse([1,2,3,4,5]);

//Write a function to see if all numbers in an array are the same numbers
function isUniform(arr) {
	var first = arr[0];
	for(var i = 1; i < arr.length; i++) {
		if (arr[1] !== first) {
			return false; 
		}
	}
	return true; 
}

//Write a function for an array that returns the sum all the numbers in the array
function sumArray (arr) {
	var total = 0;
	arr.forEach(function(element) {
		total += element;
	});
	return total;
}

//Write a function for an array that returns the biggest number within the array
function maxArray (arr) {
	var max = arr[0];
	for( var i = 1; i < arr.length; i++) {
		if(arr[i] > max) {
			max = arr[i];
		}
	}
	return max;
}


