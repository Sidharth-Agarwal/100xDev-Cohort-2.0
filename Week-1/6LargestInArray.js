const arr = [1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 10];

let largest = arr[0];

for (let i = 1; i < arr.length; i++){
    if (arr[i] > largest) {
        largest = arr[i];
    }
}

console.log("Largest element in the array is : " + largest);