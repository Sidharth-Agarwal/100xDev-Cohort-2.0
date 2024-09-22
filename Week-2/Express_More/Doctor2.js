const express = require('express')
const app = express()
const port = 3001

function calculateSum(n) {
    let ans = 0;

    for (let i = 0; i <= n; i++){
        ans += i;
    }
    return ans;
}

// app.get('/', (req,res) => {
//     const n = parseInt(req.query.n);
//     const ans = calculateSum(n)
//     res.send(ans.toString())
// })

app.get("/", function (req,res) {
    const n = req.query.n;
    const ans = calculateSum(n)
    res.send("The answe is : " + ans);
})

app.listen(port, function () {
    console.log(`Listening on port ${port}`)
})