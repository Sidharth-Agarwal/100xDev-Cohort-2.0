const fs = require("fs")

function readFile() {
    console.log("inside the main function")
    var p = new Promise (function(resolve) {
        console.log("inside the promise")
        fs.readFile("18fs.txt", "utf-8", function(err, data) {
            console.log("before resolve")
            resolve(data)
        });
    })
    return p;
}

function onDone(data) {
    console.log(data)
}

var a = readFile();
console.log(a)
a.then(onDone)