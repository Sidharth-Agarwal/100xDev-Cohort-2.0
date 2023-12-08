function greet() {
    console.log("Helllo World!");
}

function greetAlien() {
    console.log("Hellow earth!");
}

setTimeout(greetAlien, 3 * 1000);
setInterval(greet, 1 * 1000);
// Interesting