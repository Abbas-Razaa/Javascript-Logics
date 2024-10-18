const names = ["Alice", "Bob", "Charlie", "David", "Eve"];

// ----------------forEach----------------
// forEach is a method on the array object

// forEach always takes a function as an argument
// names.forEach((name) => {
//   console.log(name);
// });


// names.forEach(function(value){
//     if(value === "Charlie"){}
//     else {
//     console.log(value);
//     }
// });

// break and continue not allowed
// names.forEach(function(value) {
//     if(value === "Charlie"){
//         console.log(value);
//     }
//     else {
//         console.log("Not Charlie");
//     }
// });

// ----------------map--------------------
// map always returns a new array
// map takes a function as an argument
// map will return a new array with the return value of the function

let newarr = names.map(function(value){
    return value + " Friend";
});
console.log(newarr);