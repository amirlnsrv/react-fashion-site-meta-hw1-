import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import Shop from "./pages/Shop";
import Lookbook from "./pages/Lookbook";
import Features from "./pages/Features";
import Pages from "./pages/Pages";
import Blog from "./pages/Blog";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import { useState } from "react";
import Order from "./pages/Order";
import UseRefComponent from "./components/UseRefComponent";

function App() {
  const [cart, setCart] = useState([]);
  function addToCart(id, imgLink, title, price) {
    setCart((prev) => [...prev, { id, imgLink, title, price }]);
  }

  console.log(cart);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="wrapper">
          <Routes>
            <Route
              path="/"
              element={<Main addToCart={addToCart} cart={cart} />}
            />
            <Route
              path="/shop"
              element={<Shop addToCart={addToCart} cart={cart} />}
            />
            <Route path="/lookbook" element={<Lookbook />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pages" element={<Pages />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart cart={cart} />} />
            <Route path="/order" element={<Order />} />
            <Route path="*" element={<h1>Ошибка 404. Не найдено</h1>} />
          </Routes>
        </div>
        <UseRefComponent />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
