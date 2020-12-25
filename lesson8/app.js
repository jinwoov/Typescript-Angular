function combine(n1, n2, resultConversion) {
    var result;
    if (typeof (n1) === "number" && typeof (n2) === "number") {
        result = n1 + n2;
    }
    else {
        result = n1.toString() + n2.toString();
    }
    return resultConversion === "as-number" ? +result : result.toString();
}
var combineAges = combine(30, 26, "as-number");
console.log(combineAges);
var combineStringAges = combine("30", "26", "as-number");
console.log(combineStringAges);
var combinedNames = combine("Max", "Anna", "as-text"); // this errors out due to being a string instead of number
console.log(combinedNames);
