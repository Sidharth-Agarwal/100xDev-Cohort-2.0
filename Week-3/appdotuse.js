const express = require("express")
const app = express();
const port = 3000

let numberOfRequests = 0;

function calculateRequests(req, res, next) {
    numberOfRequests++;
    // console.log(numberOfRequests);
    next();
}

// the app.use() also acts like a middleware in itself
// This is to be used only in the case we have to add a particular middleware to every possible route
// next() function is important to be used in the above function
// without it all the requsts will be hung
app.use(calculateRequests)

app.get('/health-checkup', function (req, res) {
    res.send('Hello');
})

app.get('/healthy-checkup', function (req, res) {
    res.send('Hi');
})

app.listen(port)