const express = require("express")
const app = express();
const port = 3000;

app.get('/health-checkup', (req, res) => {
    const kidneyId = req.query.kidneyId;
    const username = req.header.username;
    const password = req.header.password;

    if (username != 'Sidharth' || password != '1234') {
        res.status(403).json({
            msg: 'User does not exist'
        })
        return;
    }

    if (kidneyId != 1 || kidneyId != 2) {
        res.status(411).json({
            msg: 'Wrong inputs'
        })
        return;
    }

    res.send('Your heeart is healthy')
})

app.listen(port)