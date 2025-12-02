import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./About/AboutUs";
import Product from "./products/Product";
import ProductDetails from "./products/ProductDetails";
import ContactUsPage from "./contact/ContactUsPage";
import Home from "./home/Home";

function App() {
  const [allProducts, setAllProducts] = useState([]);

  // جلب المنتجات مرة واحدة عند فتح الصفحة
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          "http://graduation-project1.runasp.net/Api/products"
        );
        const data = await res.json();
        const BASE_URL = "http://graduation-project1.runasp.net";

        const formatted = data.map((p) => ({
          id: p.productId,
          name: p.title,
          price: p.price,
          oldPrice: (p.price * 1.2).toFixed(2),
          description: p.description,
          category: p.category?.name || "Other",
          gender: p.gender || "Unisex",
          shape: p.shape || "Square",
          image_url: p.productImages?.[0]?.imgUrl
            ? `${BASE_URL}${p.productImages[0].imgUrl}`
            : `${BASE_URL}/${p.defaultImgUrl}`,
        }));

        setAllProducts(formatted);
      } catch (error) {
        console.log("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <BrowserRouter>
      <Navbar />

      <div className="bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-800 dark:text-gray-100 transition-colors duration-300">
        <Routes>
          <Route path="/" element={<Home allProducts={allProducts} />} />
          <Route path="/about" element={<AboutUs />} />
          <Route
            path="/product"
            element={<Product allProducts={allProducts} />}
          />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/contactUs" element={<ContactUsPage />} />
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
