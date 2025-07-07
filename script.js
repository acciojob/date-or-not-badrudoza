var isDate = function (input) {
  //   write your code here
	let date = new Date(input);             // Convert to Date object
    return !isNaN(date.getTime())
	
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
