// function displayCounter(i) {
//     console.log("Counter : ", i);
//     return i + 1;
// }

// let counter = 1;

// const intervalId = setInterval(function() {
//     counter = displayCounter(counter)
// }, 1000)

let counter = 0;

function updateCounter() {
    counter++; 
    // console.log(`Counter: ${counter}`)

    // Use \r to return to the beginning of the line and overwrite previous output
    process.stdout.write(`\rCounter: ${counter}`);

    // Stop the counter after counting till 30
    if(counter >= 30) {
        clearInterval(intervalId);
        console.log("\n Counting completed!")
    }
}

const intervalId = setInterval(updateCounter, 100)