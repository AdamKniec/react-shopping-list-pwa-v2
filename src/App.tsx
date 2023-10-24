import { useState } from "react";
import "./App.css";
import { AddProductForm } from "./components/AddProductForm";
import ProductList from "./components/ProductList/ProductList";

export type ProductType = {
  value: string;
  id: string;
};

const App = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  const addProduct = (product: ProductType) => {
    setProducts([...products, product]);
  };

  const removeProduct = (id: string) => {
    const filteredProduct = products.filter((product) => product.id !== id);
    setProducts(filteredProduct);
  };

  return (
    <div className="App">
      <AddProductForm addProduct={addProduct} />
      <ProductList productList={products} removeProduct={removeProduct} />
    </div>
  );
};

export default App;
