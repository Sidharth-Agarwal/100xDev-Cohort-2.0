const express = require("express")
const app = express()

app.get('/', function (req, res, next) {
    console.log("Hi from req 1") 
    next();
    // The page will get hung and
    // the control won't move forward
}, function (req, res) {
    console.log("This is the second function")
    res.send('Hello')
})

app.listen(3000)