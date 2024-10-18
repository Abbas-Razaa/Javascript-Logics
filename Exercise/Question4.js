// Grouping an array of objects by a specific property (e.g., grouping users by role).

const users = [
    { name: "Alice", role: "teacher" },
    { name: "Bob", role: "developer" },
    { name: "Charlie", role: "teacher" },
    { name: "David", role: "teacher" },
    { name: "Eve", role: "developer" },
];

let obj = {};

users.forEach(function (users){
    if(obj[users.role]){
        obj[users.role].push(users);
    } else {
        obj[users.role] = [];
        obj[users.role].push(users);
    }
});

console.log(obj);