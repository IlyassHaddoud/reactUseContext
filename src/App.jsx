import { BrowserRouter, Route, Routes } from "react-router-dom";
import Checkout from "./Checkout";
import Header from "./components/Header";
import Products from "./Products";
import NotFound from "./NotFound";
import { CartProvider } from "./CartContext";

const App = () => {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
};

export default App;
