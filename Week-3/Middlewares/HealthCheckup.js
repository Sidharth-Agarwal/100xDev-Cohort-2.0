const express = require("express")
const app = express();
const port = 3000;

function userValidator(username, password) {
    if (username != "sidharth" || password != "abcde") {
        return false;
    }
    return true;
}

function kidneyValidator(username, password) {
    if (kidneyId != 1 && kidneyId != 2) {
        return false;
    }
    return true;
}

app.get('/health-checkup', (req, res) => {
    const kidneyId = req.query.kidneyId;
    const username = req.headers.username;
    const password = req.headers.password;

    if (!userValidator(req.headers.username, req.headers.password)) {
        res.status(403).json({
            msg: 'User does not exist'
        })
        return;
    }

    if (!kidneyValidator(req.query.kidneyId)) {
        res.status(411).json({
            msg: 'Wrong inputs'
        })
        return;
    }

    res.send('Your heart is healthy')
})

app.post('/replace-kidney', (req, res) => {
    const kidneyId = req.query.kidneyId;
    const username = req.headers.username;
    const password = req.headers.password;

    if (!userValidator(req.headers.username, req.headers.password)) {
        res.status(403).json({
            msg: 'User does not exist'
        })
        return;
    }

    if (!kidneyValidator(req.query.kidneyId)) {
        res.status(411).json({
            msg: 'Wrong inputs'
        })
        return;
    }

    res.send('Your heart is healthy')
})

app.listen(port)