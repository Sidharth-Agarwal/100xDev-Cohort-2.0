/*
A website which has 2 endpoints

POST/signup
Body{
    username - string
    password - string
}
Return JWT with username encrypted

GET/users
Headers - Authorization Header

Returns an array of all users if user is signed in (token is correct)
Returns 403 status code if not
*/

const express = require("express")
const jwt = require("jsonwebtokens")
const jwtPassword = "123456"
const app = express();

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
}

app.post('/signup', function (req, res) {
    
})