import Card from "./components/Card";

const Products = () => {
  return (
    <div className="products">
      <Card name="T-shirt" price="200" />
      <Card name="shoes" price="90" />
      <Card name="hat" price="40" />
      <Card name="jacket" price="350" />
    </div>
  );
};

export default Products;
