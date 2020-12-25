function combine(n1: number | string, n2: number | string, resultConversion: string) {
    let result;
    if(typeof(n1) === "number" && typeof(n2) === "number"){
        result = n1 + n2;
    }  else {
        result = n1.toString() + n2.toString();
    }
    return resultConversion === "as-number" ? +result : result.toString();
    
}


const combineAges = combine(30, 26, "as-number");
console.log(combineAges);

const combineStringAges = combine("30", "26", "as-number");
console.log(combineStringAges);


const combinedNames = combine("Max", "Anna", "as-text"); // this errors out due to being a string instead of number
console.log(combinedNames);