function add(n1: number, n2: number, b1: boolean, rp: string){
    let result = n1 + n2;
    if(b1){
        console.log(rp + result);
    } else {
        return result;
    }
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = "result is: ";

add(number1, number2, printResult, resultPhrase);