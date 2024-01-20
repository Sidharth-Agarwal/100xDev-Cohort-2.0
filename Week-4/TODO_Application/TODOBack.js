const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

app.get("/todos", (req, res) => {
    res.send({
        "todos": [{
            "id": 1,
            "title": "Title 1",
            "description" : "This is TODO 1"
        }, {
            "id": 2,
            "title": "Title 2",
            "description" : "This is TODO 2"
        }, {
            "id": 3,
            "title": "Title 3",
            "description" : "This is TODO 3"
        }]
    })
})

app.listen(3000);