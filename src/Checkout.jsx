import { useContext } from "react";
import CartContext from "./CartContext";

const Checkout = () => {
  const { items } = useContext(CartContext);
  return (
    <div className="checkout">
      <h1>Checkout</h1>
      {items.map((i) => (
        <div>
          <p>{i.name}</p>
          <p>{i.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Checkout;
