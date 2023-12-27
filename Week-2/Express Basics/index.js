const express = require('express')
const bodyParser = require("body-parser")
const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json());
// app.use(express.json()); -> Similar

// Route Handler
app.get('/', function (req, res) {
  res.status(401).send('<b> Hi there!!! </b>')
})

app.post('/conversation', function (req, res) {
  // console.log(req.headers["authorization"])
  console.log(req.body)
  res.send({
    msg:"2+2=rrr4"
  })
})

app.post('/conversation-limit', function (req, res) {
  // const message = req.query.message; -> query parameter in search
  const message = req.body.message;
  console.log(message);
  res.json({
    output:"2+2=4"
  })
})

app.listen(port, function(){
  console.log(`Example app listening on port ${port}`)
})