interface ProductListProps {
  productList: ProductShape[]
}

interface ProductShape {
  value: string;
}

function ProductList({ productList }: ProductListProps) {
  return (
    <ul>
      {productList.map(({ value }) => <li key={value}>{value}</li>)}
    </ul>
  );
}

export default ProductList;
