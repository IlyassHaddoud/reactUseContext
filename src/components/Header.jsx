import { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import CartContext from "../CartContext";

const Header = () => {
  const { items } = useContext(CartContext);
  return (
    <div className="header">
      <div className="logo">Shop</div>
      <div className="cart">
        <Link to={"/checkout"}>
          <AiOutlineShoppingCart size={25} color={"black"} />
        </Link>
        <span>{items.length}</span>
      </div>
    </div>
  );
};

export default Header;
