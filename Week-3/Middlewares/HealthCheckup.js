const express = require("express")
const app = express();
const port = 3000;

app.get('/health', (req, res) => {
    const kidneyId = req.query.kidneyId;
    const username = req.headers.username;
    const password = req.headers.password;

    if (username != "sidharth" || password != "abcde") {
        res.status(403).json({
            msg: 'User does not exist'
        })
        return;
    }
    
    if (kidneyId != 1 && kidneyId != 2) {
        res.status(411).json({
            msg: 'Wrong inputs'
        })
        return;
    }

    res.send('Your heart is healthy')
})

app.listen(port)