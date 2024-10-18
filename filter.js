const names = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Eve",
  "Frank",
  "Grace",
  "Hannah",
  "Ivy",
  "Jack",
  "Kathy",
  "Leo",
  "Mona",
  "Nina",
  "Alice",
  'Aron',
  "Paul",
  "Quincy",
  "Rachel",
  "Steve",
  "Tracy",
];

// -------------filter----------------
// filter always returns a new array
// filter takes a function as an argument
// filter will return a new array with the return value of the function as true, false

let newarr = names.filter(function (value) {
    if (value.startsWith('A')){
        return true;
    }
});
