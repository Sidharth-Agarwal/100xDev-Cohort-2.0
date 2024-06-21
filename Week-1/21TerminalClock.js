// Create a function to display the current time
function displayTime() {
    // Get the current time
    const now = new Date();
  
    // Get the hours, minutes, and seconds
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    // Format the time as a string
    const timeString = `${hours}:${minutes}:${seconds}`;
  
    // Clear the terminal
    console.clear();
  
    // Display the time
    console.log(timeString);
  }
  
// Set the clock to update every second
setInterval(displayTime, 1000);