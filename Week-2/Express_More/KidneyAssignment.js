const express = require("express")
const app = express()
const port = 3000;
app.use(express.json());

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
    let numberOfHealthyKidneys = 0;
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
    console.log(req.body);
    const isHealthy = req.body.isHealthy
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: 'Posted'
    })
})

app.put('/', function (req, res) {
    for (let i = 0; i < users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({
        msg: 'Done'
    })
})

app.delete('/', function (req, res) {
    if (isOneUnhealthyPresent()) {
        const newKidneys = []
        for (let i = 0; i < users[0].kidneys.length; i++){
            if (users[0].kidneys[i].healthy) {
                newKidneys.push({
                    healthy: true
                })
            }
        }
        users[0].kidneys = newKidneys;
        res.json({
            msg: 'Deleted'
        })
    }
    else {
        res.status(411).json({msg:'No bad kidneys'})
    }
})

function isOneUnhealthyPresent() {
    let atLeastOneUnhealthyKidney = false;
    for (let i = 0; i < users[0].kidneys.length; i++){
        if (!users[0].kidneys[i].healthy) {
            atLeastOneUnhealthyKidney = true;
        }
    }
    return atLeastOneUnhealthyKidney
}

app.listen(port)
