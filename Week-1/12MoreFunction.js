function sum(a, b, fnToCall) {
    let result = a + b;
    fnToCall(result);
}

function displayResult(data) {
    console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
    console.log("Sum's result is : " + data);
}

// Passing function as a parameter
const ans = sum(2, 3, displayResultPassive);