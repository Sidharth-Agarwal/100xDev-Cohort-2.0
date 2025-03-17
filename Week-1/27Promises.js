const fs = require("fs")

function readFile() {
    return new Promise (function(resolve) {
        fs.readFile("18fs.txt", "utf-8", function(err, data) {
            resolve(data)
        });
    })
}

function onDone(data) {
    console.log(data)
}

readFile().then(onDone)