// Given an input array, return all the even values from the array

const input = [1, 2, 3, 4, 5];

// Brute Force
const newArr = []

for (let i = 0; i < input.length; i++){
    if (input[i] % 2 == 0) {
        newArr.push(input[i]);
    }
}

console.log(newArr)

// Better solution using Filters 
function filterLogic(n) {
    if (n % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}

// Syntax 1
// const ans = input.filter(filterLogic);
// console.log(ans);

// Syntax 2
const ans = input.filter((n) => {
    if (n % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
})
console.log(ans)