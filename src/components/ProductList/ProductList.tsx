import { v4 as uuidv4 } from "uuid";
import { ProductType } from "../../App";
import { MouseEventHandler } from "react";

// TODO remove uuid after we have the id's from the backend

interface ProductListProps {
  productList: ProductType[];
  removeProduct: (id: string) => void;
}

const ProductList = ({ productList, removeProduct }: ProductListProps) => {
  return (
    <ul>
      {productList.map(({ value, id }) => (
        <li key={uuidv4()}>
          {value}
          <button onClick={() => removeProduct(id)}>remove</button>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
