const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

app.get("/todos", (req, res) => {
    
})

app.listen(3000);