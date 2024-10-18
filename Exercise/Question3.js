// Mapping over an array of user data to create a list of user cards.

const users = [{
    name: "Alice",
    age: 25,
    occupation: "teacher"
},
{
    name: "Bob",
    age: 30,
    occupation: "developer"
},
{
    name: "Charlie",
    age: 35,
    occupation: "designer"
},
{
    name: "David",
    age: 40,
    occupation: "teacher"
},
{
    name: "Eve",
    age: 45,
    occupation: "developer"
}
];

let newarr = users.map(function(value){
    return `<div><h3>${user.name}</h3><h5>${user.age}<h5><div>`;
});