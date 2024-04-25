var products = [
    {
        id: 1,
        name: "T-Shirt",
        price: 20,
        category: "Clothing",
    },
    {
        id: 2,
        name: "Smartwatch",
        price: 12,
        category: "Accessories",
    },
    {
        id: 3,
        name: "Laptop",
        price: 800,
        category: "Electronics",
    },
];
var deleteProduct = function (id) {
    products = products.filter(function (product) { return product.id !== id; });
};
var addToCart = function (name, price, category) {
    var _a;
    var newProduct = {
        id: ((_a = products[products.length - 1]) === null || _a === void 0 ? void 0 : _a.id) + 1 || 0,
        name: name,
        price: price,
        category: category,
    };
    products.push(newProduct);
};
//! Test it
deleteProduct(1);
addToCart("Iphone", 1200, "Electronics");
console.log(products);
