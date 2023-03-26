import { useContext } from "react";
import { IoShirtOutline } from "react-icons/io5";
import { MdAddShoppingCart } from "react-icons/md";
import CartContext from "../CartContext";

const Card = ({ name, price }) => {
  const { addToCart } = useContext(CartContext);
  return (
    <div className="card">
      <div className="image">
        <IoShirtOutline size={120} />
      </div>
      <div className="info">
        <div>
          <p>{name}</p>
          <p>{price}</p>
        </div>
        <div className="add" onClick={() => addToCart(name, price)}>
          <MdAddShoppingCart />
        </div>
      </div>
    </div>
  );
};

export default Card;
