const fs = require("fs");

fs.readFile("18fs.txt", "utf-8", function (err, data) {
    console.log(data);
})

console.log("Hi");

let a = 0;
for (let i = 0; i < 1000000; i++){
    a++;
}

console.log("Hellow World...!");