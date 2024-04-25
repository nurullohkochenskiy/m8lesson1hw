type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
};

let products: Product[] = [
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

const deleteProduct = (id: number): void => {
  products = products.filter((product) => product.id !== id);
};

const addToCart = (name: string, price: number, category: string): void => {
  const newProduct: Product = {
    id: products[products.length - 1]?.id + 1 || 0,
    name,
    price,
    category,
  };
  products.push(newProduct);
};
//! Test it
deleteProduct(1);
addToCart("Iphone", 1200, "Electronics");
console.log(products);
