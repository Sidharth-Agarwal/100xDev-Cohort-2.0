////*
// A website which has 2 endpoints

// POST/signup
// Body{
//     username - string
//     password - string
// }
// Return JWT with username encrypted

// GET/users
// Headers - Authorization Header

// Returns an array of all users if user is signed in (token is correct)
// Returns 403 status code if not
// */

const express = require("express")
const jwt = require("jsonwebtoken")
const jwtPassword = "123456"
const app = express();
app.use(express.json())

const ALL_USERS = [
    {
        username: "harkirat@gmail.com",
        password: "123",
        name: "Harkirat Singh",
    },
    {
        username: "raman@gmail.com",
        password: "123321",
        name: "Raman Singh",
    },
    {
        username: "priya@gmail.com",
        password: "123321",
        name: "Priya Kumari",
    },
];

function userExist(username, password) {
    // Write a logic to return true or false if the user exists in ALL_USERS array
    let userExists = false;

    for (let i = 0; i < ALL_USERS.length; i++){
        if (ALL_USERS[i].username === username && ALL_USERS[i].password === password) {
            userExists = true;
        }
    }

    return userExists;
}

app.post('/signup', function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    if (!userExist(username, password)) {
        return res.status(403).json({
            msg: "User doesn't exist in our in memory db"
        });
    }

    var token = jwt.sign({ username: username }, jwtPassword)
    return res.json({
        token,
    });
});

app.get('/users', function (req, res) {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;

    try {
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;
        // Return a list of users other than this username
        res.json({
            users: ALL_USERS.filter(function (value) {
                if (value.username == username){
                    return false;    
                }
                else {
                    return true;
                }
            })
        })
    }
    catch (err) {
        return res.status(403).json({
            msg: "Invalid token",
        });
    }
});

app.listen(3000);