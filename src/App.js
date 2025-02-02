import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import Shop from "./pages/Shop";
import Lookbook from "./pages/Lookbook";
import Features from "./pages/Features";
import Pages from "./pages/Pages";
import Blog from "./pages/Blog";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/lookbook" element={<Lookbook />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<h1>Ошибка 404. Не найдено</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
