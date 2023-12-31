const express = require("express")
const app = express();
const port = 3000;

// middleware 1
function userMiddleware(req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password;

    if (username != 'sidharth' || password != 'abcde') {
        res.status(403).json({
            msg: "Incorrect Inputs"
        })
    }
    else {
        next();
    }
}

// middleware 2
function kidneyMiddleware(req, res, next) {
    const kidneyId = req.query.kidneyId;

    if (kidneyId != 1 && kidneyId != 2) {
        res.status(411).json({
            msg: "Incorrect Input"
        })
    }
    else {
        next();
    }
}

app.get('/heart-checkup', userMiddleware, kidneyMiddleware, function (req, res) {
    // Perforom something
    res.send('Your heart is healthy!');
});
  
app.get('/kidney-check', userMiddleware, kidneyMiddleware, function (req, res) {
    // Perforom something
    res.send('Your kidney is healthy!');
});
  
// Using only one middleware
app.get('/health-checkup', userMiddleware, function (req, res) {
    // Perforom something
    res.send('Your health is fine!');
});

app.listen(port)