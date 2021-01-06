function add(n1: number, n2: number) {
    return n1 + n2;
}

function printNumber (num: number) {
    console.log('result: ' + num);
}

printNumber(add(5,4));

let combineValue: Function;

combineValue = add;

// Function types 
// let the cv varaible to store a funtion that will return a number.
let cV: (a: number, b: number) => number;

// to use call back function in the function

function addAndHandle(n1:number, n2: number, cb: (num: number) => void){
    const result = n1 + n2;
    cb(result);
}

// call back with the result as the outback from the addAndHnalde result
addAndHandle(1, 2, (result) => {
    console.log(result);
});

// unknown type
