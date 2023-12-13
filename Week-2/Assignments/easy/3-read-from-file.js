const fs = require("fs");

fs.readFile("./files/first.txt","utf-8",(err, data) => {
  if(err) {
    console.log("Error while reading the file: "+err);
  }
  console.log("Data from the file: "+data);
})

for(let i = 0; i < 10000000000; i++) {

}