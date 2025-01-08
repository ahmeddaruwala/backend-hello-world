import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import { Routes, Route, Outlet, Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Products from "./pages/Products";

export default function App() {
  return (
    <>
      <Banner />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/api-product" element={<Products />} />
      </Routes>

      <Footer />
    </>
  );
}