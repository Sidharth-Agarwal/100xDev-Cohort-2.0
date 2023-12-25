const express = require('express')
const bodyParser = require("body-parser")
const app = express()
const port = 3000

app.use(bodyParser.json());

// Route Handler
app.get('/', function (req, res) {
  res.send('<b> Hi there!!! </b>')
})

app.post('/conversation', function (req, res) {
  // console.log(req.headers["authorization"])
  console.log(req.body)
  res.send({
    msg:"2+2=rrr4"
  })
})

app.listen(port, function(){
  console.log(`Example app listening on port ${port}`)
})