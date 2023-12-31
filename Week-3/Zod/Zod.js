const express = require("express")
const zod = require("zod")
const app = express()
const port = 3000

const schema = zod.array(zod.number());

app.use(express.json());

app.post('/health-checkup', (req, res) => {
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);

    if (!response.success) {
        res.status(411).json({
            msg: "The input is invalid"
        })
    }
    else {
        res.send({
            response
        })
    }
})

app.listen(port)