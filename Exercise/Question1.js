// Merging two arrays of data fetched from separate APIs into a single list.

const names = ["Alice", "Bob", "Charlie", "David", "Eve"];
const lastnames = ["Doe", "Smith", "Johnson", "Brown", "Williams"];

const fullnames = [...names, ...lastnames];