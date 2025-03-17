let arr = [1, 2, 3, 4, 5, 6];

let mid = (arr.length) / 2;

for(let i=0;i<mid;i++) {
    [arr[(arr.length)-i-1], arr[i]] = [arr[i], arr[(arr.length)-i-1]]
}

console.log(arr);