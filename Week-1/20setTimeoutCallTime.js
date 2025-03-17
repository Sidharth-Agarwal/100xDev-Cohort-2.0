// Function to measure setTimeout accuracy
function measureSetTimeout(requestedDelay) {
    console.log(`Requested delay: ${requestedDelay}ms`);

    // Record start time before setTimeout call
    const startTime = performance.now();
    console.log(`Start time: ${startTime.toFixed(2)}ms`);

    // Set up the timeout
    setTimeout(() => {
        // Record end time when callback executes
        const endTime = performance.now();
        console.log(`End time: ${endTime.toFixed(2)}ms`);
        
        // Calculate actual delay
        const actualDelay = endTime - startTime;
        console.log(`Actual delay: ${actualDelay.toFixed(2)}ms`);
        console.log(`Difference: ${(actualDelay - requestedDelay).toFixed(2)}ms`);
    }, requestedDelay);
}
  
// Test with different timeout values
console.log("Test with 100ms delay:");
measureSetTimeout(100);
  
// You can uncomment these to test with different values
setTimeout(() => {
    console.log("\nTest with 500ms delay:");
    measureSetTimeout(500);
}, 1000);

setTimeout(() => {
    console.log("\nTest with 1000ms delay:");
    measureSetTimeout(1000);
}, 2000);

// Test with 0ms delay (minimum possible delay)
setTimeout(() => {
    console.log("\nTest with 0ms delay (minimum possible):");
    measureSetTimeout(0);
}, 3500);