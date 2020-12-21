function add(n1, n2, b1, rp) {
    var result = n1 + n2;
    if (b1) {
        console.log(rp + result);
    }
    else {
        return result;
    }
}
var number1 = 5;
var number2 = 2.8;
var printResult = true;
var resultPhrase = "result is: ";
add(number1, number2, printResult, resultPhrase);
