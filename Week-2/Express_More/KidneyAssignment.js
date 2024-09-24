const express = require('express')
const port = 3000
const app = express()
app.use(express.json())

const users = [{
    name: 'Sidharth',
    kidneys: [{
        healthy: false
    },{
        healthy: true
    }]
}]

function isOneUnhealthyPresent() {
    let atLeastOneUnhealthyKidney = false
    for(let i = 0; i < users[0].kidneys.length; i++) {
        if(!users[0].kidneys[i].healthy) {
            atLeastOneUnhealthyKidney = true;
        }
    }
    return atLeastOneUnhealthyKidney
}

// User can check how many kidneys they have and their health
app.get('/', function(req,res) {
    const userKidneys = users[0].kidneys
    const numberOfKidneys = userKidneys.length
    let numberOfHealthyKidneys = 0;

    for(let i = 0; i < userKidneys.length; i++) {
        if(userKidneys[i].healthy) {
            numberOfHealthyKidneys = numberOfHealthyKidneys + 1
        }
    }

    let numberofUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys
    
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberofUnhealthyKidneys
    })
})

// User can add new kidney
app.post('/', (req,res) => {
    const isHealthy = req.body.isHealthy
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg:"Done!"
    })
})

// User can replace a kidney, make it healthy
app.put('/', (req,res) => {
    if(isOneUnhealthyPresent()) {
        for(let i = 0; i < users[0].kidneys.length; i++){
            users[0].kidneys[i].healthy = true
        }
        
        res.json({
            msg:"Done!"
        })
    }
    else {
        res.status(411).json({msg:'No bad kidneys'})
    }
})

// User can remove all the unhealthy kidneys
app.delete('/', (req,res) => {
    if(isOneUnhealthyPresent()) {
        const newKidneys = []
        for(let i = 0; i < users[0].kidneys.length; i++) {
            if(users[0].kidneys[i].healthy) {
                newKidneys.push({
                    healthy : true
                })
            }
        }

        users[0].kidneys = newKidneys;
        res.json({
            msg:"Done!"
        })
    }
    else {
        res.status(411).json({msg:'No bad kidneys'})
    }
})

app.listen(port)