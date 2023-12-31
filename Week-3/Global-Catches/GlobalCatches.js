const express = require("express")
const app = express()
const port = 3000
app.use(express.json())

app.get('/health-checkup', function (req, res) {
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length
    res.send("Your kindey length is : " + kidneyLength)
})

// Anytime there is an exception in the above code
// Global catches will be called automatically
// Error-Handling middlewares
// Global Catches
app.use(function (err, req, res, next) {
    res.json({
        msg: "Something is up with our server"
    })
})

app.listen(port)