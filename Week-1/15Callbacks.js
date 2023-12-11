function square(a) {
    return a * a;
}

function cube(a) {
    return a * a * a;
}

function sumOfSomething(a, b, fn) {
    console.log(fn);
    let var1 = fn(a);
    let var2 = fn(b);

    return var1 + var2;
}

console.log(sumOfSomething(2, 10, cube));