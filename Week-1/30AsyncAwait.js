function asyncFunction() {
    let p = new Promise (function(resolve) {
        setTimeout(function() {
            resolve("hi there!")
        }, 1000)
    })
    return p;
}

async function main() {
    let value = await asyncFunction()
    console.log(value)
}

main();