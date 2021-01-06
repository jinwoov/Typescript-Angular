// unknown function

let userInput: unknown;
let userName: string;
// similar to any type

userInput = 5;
userInput = 'MAX';
// This errors because it is unknown
// userName = userInput

// this works because you need type check
// it is good when you dont know what the output is going to be at first
if (typeof userInput == "string") {
    userName = userInput;
}

// never is a type 
// this function never return never
function generateError(message: string, code: number): never {
    throw { message: message, errorCode: code };
    // infinite loops is another way of using the never type
}

generateError('Erorr occur', 501);