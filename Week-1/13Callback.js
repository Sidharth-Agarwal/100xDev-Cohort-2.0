// function calculate(a,b,type){
//     if(type == "sum"){
//         return a+b;
//     }
//     if(type == "minus"){
//         return a-b;
//     }
// }

// const value = calculate(1,2,"minus")
// console.log(value);

// function calculate(a, b, type){
//     if(type == "sum") {
//         const value = sum(a,b)
//         return value
//     }
//     if(type == "minus") {
//         const value = sub(a,b)
//         return value
//     }
// }

function calculateArithemetic(a, b, arithemeticFunction) {
    const ans = arithemeticFunction(a, b);
    return ans;
}

function sum(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

const value = calculateArithemetic(1, 2, sum);
console.log(value);