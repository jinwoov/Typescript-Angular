'use strict';

let firstvalue = document.getElementById("first-value")! as HTMLInputElement;
let secondvalue = document.getElementById("second-value")! as HTMLInputElement;

// adding the + sign infornt of the variable change the data type to interger
function addNum(num1: number, num2: number){
    return num1 + num2;
}

let butt = document.getElementById("add-button");

// using the +sign infront will allow us to change data type from string to number
butt.addEventListener("click", function (e) {
    console.log(addNum(+firstvalue.value, +secondvalue.value));
    e.preventDefault();
})