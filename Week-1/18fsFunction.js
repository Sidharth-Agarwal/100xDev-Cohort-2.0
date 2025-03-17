const fs = require("fs")

fs.readFile("18fs.txt", "utf-8", function(err, data) {
    console.log(data)
})

console.log("Hello World!")

// The thread will still be busy here
let a = 0;
for(let i=0;i<1000000000000000;i++){
    a++;
}

console.log("Hello World 2!")