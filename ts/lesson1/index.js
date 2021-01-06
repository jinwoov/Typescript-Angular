'use strict';
var firstvalue = document.getElementById("first-value");
var secondvalue = document.getElementById("second-value");
// adding the + sign infornt of the variable change the data type to interger
function addNum(num1, num2) {
    return +num1 + +num2;
}
var butt = document.getElementById("add-button");
butt.addEventListener("click", function (e) {
    console.log(addNum(+firstvalue.value, +secondvalue.value));
    e.preventDefault();
});
