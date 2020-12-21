// const person: {
//     name: string;
//     age: number;
// } = {
var person = {
    name: "jin",
    age: 21,
    hobbies: ["sports", "coding"],
    role: [2, "author"]
};
// this explicitly tell the variable that it will be string array
var favoriteActivities;
// person.role[1] = 10
person.role.push("admin");
// any[]; will be flexible 
favoriteActivities = ["sport"]; // having different type after delcaring the data type will throw error
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()) // will error because map is property of array not string
}
