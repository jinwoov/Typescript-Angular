// const person: {
//     name: string;
//     age: number;
// } = {
const person = {
    name: "jin",
    age: 21,
    hobbies: ["sports", "coding"]
};

// this explicitly tell the variable that it will be string array
let favoriteActivities: string[];

// any[]; will be flexible 

favoriteActivities = ["sport"]; // having different type after delcaring the data type will throw error

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()) // will error because map is property of array not string
}