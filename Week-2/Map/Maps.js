// Given an input array, give back a new output array with each value of input multiplied by 2

const input = [1, 2, 3, 4, 5]

// Brute force 
const newArray = [];

for (let i = 0; i < input.length; i++){
    newArray.push(input[i] * 2)
}

console.log(newArray)

// Better Solution

function transform(i) {
    return i * 10;
}

// Syntax 1
// const ans = input.map(transform);

// Syntax 2
const ans = input.map((i) => {
    return i * 10;
})

console.log(ans);