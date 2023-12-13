// Counters with using setInterval

let countValue = 1;

function mySetInterval(fn, duration) {

    const recurseHelper = () => {
        fn();
        return setTimeout(recurseHelper, duration);
    }

    setTimeout(recurseHelper, duration);
}

const timerFunc = () => {
    console.clear();
    console.log("Count:" +countValue);
    countValue++;
}

mySetInterval(timerFunc, 1000);