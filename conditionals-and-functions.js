/*
 *Conditionals, Functions, Scope and Loops.
 */

//Equals
let equals = 1 === 1;
//console.log(equals);

//Greater than
let greaterThan = 5 > 1;

//Less than
let lessThan = 2 < 10;

//Greater than equal to
let greaterThanEq = 5 >= 5;

//Less than equal to
let lessThanEq = 4 <= 9;

//Not Equals
let notEquals = 5 !== 2;

let storeA = 33.10;
let storeB = 4.40;

function compareStorePrices(storeA, storeB) {
	let storeAIsLower = storeA < storeB;
	if (storeAIsLower) {
		console.log("Store A has a lower price.")
	} else if(storeB < storeA) {
		console.log("Store B has a lower price.")
	} else {
		console.log("Their prices are equal.")
	}
}

//compareStorePrices(10, 5);
//compareStorePrices(7,10);

function squareNum (number) {
	return number * number;
}

let squaredNumber = squareNum(4);
//console.log(squaredNumber);


//SCOPE

let z = 10;

function addNumbers (n,m, x) {
	//console.log(x);
	let b;
	if (1===1) {
		let b = 8;
	}
	//console.log(b);
	return n + m;
}

addNumbers(1,2,10);

//ARRAYS

//              0 1 2 3 4
let ourArray = [1,2,3,4,5,6,7];

//for(counter; comp; incr){}
for (let i = 0; i<ourArray.length; i++){
	//console.log("i is equal to: " + i);
	//console.log(ourArray[i]);
	//loop within a loop: inner loop will do entire loops for every one time the outer loop runs
}

let x = 0;
while (x < 10){
	console.log('Ran');
	x = x + 1;
}

