// Simple implementation for testing functions feel free to change sum or sub
let sum = (a, b) => a + b;
let sub = (a, b) => a - b;

const sumResult = sum(2,5);
const sumExpected = 7;

const subResult = sub(5,2);
const subExpected = 3;

if( sumResult !== sumExpected ){
	throw new Error(`sum failed: sum(2,5) must be 7 but got ${sumResult}`)
}

if( subResult !== subExpected ){
	throw new Error(`sub failed: sum(5,2) must be 3 but got ${subResult}`)
}