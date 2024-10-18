// Removing or updating a specific object in an array of data based on a unique ID.

const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
    { id: 4, name: "David" },
    { id: 5, name: "Eve" },
];

let newarr = users.filter(function(value){
    return user.id !== 2;
});