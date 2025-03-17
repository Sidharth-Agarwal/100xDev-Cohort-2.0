const fs = require("fs")

// My own async function
function readFile(cb) {
    fs.readFile("18fs.txt", "utf-8", function(err, data){
        cb(data)
    })
}

// Callback function to call
function onDone(data) {
    console.log(data)
}

readFile(onDone);