const express = require("express")
const app = express()
const zod = require("zod")

const schema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8)
})

app.get('/login', function (req, res) {
    const response = schema.safeParse(req.body);
    
    if (!response.success) {
        res.json({
            msg:"Your inputs are invalid"
        })
        return
    }
})