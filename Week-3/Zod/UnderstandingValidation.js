/*
// if this is an array of string then return true else return false
function validateInput(arr) {
    if (typeof (arr) == "object" && arr.length >= 1) {
        // Here we have to put a bunch of checks.
        // To make sure that the input is of type array
    }
}
*/

// Better version for the above code is

const zod = require("zod")

function validateInput(arr) {
    const schema = zod.array(zod.number());
    const response = schema.safeParse(arr);
    console.log(response);
}

validateInput([1,2,3])