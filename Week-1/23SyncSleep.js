function findSum(n){
    let ans = 0;
    for(let i=0;i<n;i++){
        ans += i;
    }
    return ans;
}

function findSumTill100(){
    console.log(findSum(100));
}

function syncSleep(){
    let a = 1;
    for(let i=0;i<1000000000;i++){
        a++;
    }
}

// Dumb way to make synchronous function
syncSleep();
findSumTill100()
//setTimeout(findSumTill100, 1000)
console.log("Hellow World.!!!")