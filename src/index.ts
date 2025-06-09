//create alias type
type Product = {
    id: number;
    name: string;
    price: number;
    description?: string;
    category?: string[];
};

var products: Product[] = [
    {
        id: 1,
        name: "Thong",
        price: 122,
    },
    {
        id: 2,
        name: "Shirt",
        price: 50,
        category: ["clothing"]
    }
];

console.table(products);

console.log("=".repeat(20));
console.log("use map method ");


let productme = products.map((pro) => {
    return {
        id: pro.id,
        name: pro.name,
        price: pro.price
    };
});

console.table(productme);
