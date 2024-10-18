const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank', 'Grace', 'Hannah', 'Ivy', 'Jack', 'Kathy', 'Leo', 'Mona', 'Nina', 'Alice', 'Aron', 'Paul', 'Quincy', 'Rachel', 'Steve', 'Tracy'];

// -------------spread operator----------------
// const copynames = names; // this is not a copy, it is a reference to the original array names

const copynames = [...names]; // this is a copy of the original array names

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    occupation: 'Developer'
};

const newPerson = { ...person }; // this is a copy of the original object person

// -----------------rest operator----------------
function abcd(a,b,c,...restvalue) {
    console.log(a,b,c,restvalue);
}

abcd(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);