// const person: {
//     name: string;
//     age: number;
// } = {
// const person: {
    // name: string;
    // age: number;
    // hobbies: string[];
    // role: [number, string]; // marks tuple type
    // tuple marks exact length and the type that belongs in each index
enum Role { ADMIN =5 , READ_ONLY, AUTHOR }; //enum label to number
// Enum is human readable and identifier

const person = {
    name: "jin",
    age: 21,
    hobbies: ["sports", "coding"],
    role: Role.ADMIN // read only value
};


// this explicitly tell the variable that it will be string array
let favoriteActivities: string[]; 

// person.role[1] = 10
// person.role.push("admin"); //push works for tuple
// any[]; will be flexible 

favoriteActivities = ["sport"]; // having different type after delcaring the data type will throw error

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()) // will error because map is property of array not string
}