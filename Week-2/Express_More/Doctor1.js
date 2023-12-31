const express = require('express')
const app = express()
const port = 3000

function calculateSum(a, b) {
    return a + b;
}

app.get('/', function (req, res) {
    const a = req.query.a;
    const b = req.query.b;
    const ans = calculateSum(a, b);
    res.send(toString(ans));
})

app.listen(port, function () {
    console.log(`Listening on port ${port}`)
})