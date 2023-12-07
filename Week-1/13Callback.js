function calculateArithemetic(a, b, arithemeticFunction) {
    const ans = arithemeticFunction(a, b);
    return ans;
}

function sum(a, b) {
    return a + b;
}

const value = calculateArithemetic(1, 2, sum);
console.log(value);