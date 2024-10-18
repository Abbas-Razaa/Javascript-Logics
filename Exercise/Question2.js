// Filtering an array of objects to display items based on a search query (e.g., filtering products by type).

const products = [
    { name: "banana", type: "fruit" },
    { name: "potato", type: "vegetable" },
    { name: "apple", type: "fruit" },
    { name: "carrot", type: "vegetable" },
    { name: "orange", type: "fruit" },
];

let newarr = products.filter(function(product){
    return product.type === "fruit";
})

console.log(newarr);