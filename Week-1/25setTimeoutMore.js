console.log("Hi there!")

setTimeout(function (){
    console.log("This is from inside of 1st function")
},20000)

setTimeout(function (){
    console.log("This is from inside of 2nd function")
},10000)

for(let i=0;i<10;i++){
    console.log(i);
}