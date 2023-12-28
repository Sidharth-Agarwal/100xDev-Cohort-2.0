const express = require("express")
const app = express()
const port = 3000;

const users = [{
    name: 'John',
    kidneys: [{
	    healthy: false
    }]
},
    {
        name: 'Doe',
        kidneys: [{
            healthy: true
        }]
}];

// Input type when sending get request is query parameters
app.get('/', function (req, res) {
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    const numberOfHealthyKidneys = 0;
    for (let i = 0; i < johnKidneys.length; i++){
        if (johnKidneys[i].healthy) {
            numberOfHealthyKidneys += 1;
        }
    }
    const numberofUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberofUnhealthyKidneys
    })
})

app.post('/', function (req, res) {
    const isHealthy = req.body.isHealthy
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({msg:'Done'})
})



app.listen(port)