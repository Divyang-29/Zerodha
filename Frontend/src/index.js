import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./Landing-page/home/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./Landing-page/signup/SignUp";
import AboutPage from "./Landing-page/about/AboutPage";
import ProductPage from "./Landing-page/products/ProductPage";
import PricingPage from "./Landing-page/pricing/PricingPage";
import SupportPage from "./Landing-page/support/SupportPage"
import Navbar from "../src/Landing-page/Navbar"
import Footer from "../src/Landing-page/Footer"
import NotFound from "./Landing-page/NotFound";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/about" element={<AboutPage />}></Route>
      <Route path="/product" element={<ProductPage />}></Route>
      <Route path="/pricing" element={<PricingPage />}></Route>
      <Route path="/support" element={<SupportPage />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
    <Footer />
  </BrowserRouter>
);
