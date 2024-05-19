import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/productDetails";
import About from "./pages/about";
import Accessories from "./pages/accessories";
import LogIn from "./pages/logIn";
import SignUp from "./pages/signUp";
import Blogs from "./pages/blogs";
import Men from "./pages/men";
import Women from "./pages/women";
import Shop from "./pages/shop";
import CustomerReviews from "./pages/customerReviews";
import PrivacyPolicy from "./pages/privacyPolicy";
import ReturnPolicy from "./pages/returnPolicy";
import TermsAndConditions from "./pages/termsAndConditions";
import Category from "./pages/category";

import Checkout from "./pages/checkout";
import SuccessPage from "./pages/successPage";
import FailurePage from "./pages/failurePage";
import Review from "./components/review";
import Tryon from "./pages/tryon";

import { ToastContainer } from "react-toastify";
import HomePage from "./pages/chatbot";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chatbot" element={<HomePage />} />
        <Route path="/product/:slug" element={<ProductDetails />} />
        <Route path="/about" element={<About />} />

        <Route path="/category/accessories" element={<Accessories />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/categories" element={<Category />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/failure" element={<FailurePage />} />
        <Route path="/product/:slug/try-on" element={<Tryon />} />
        <Route path="/rev" element={<Review />} />
        <Route path="/category/men" element={<Men />} />
        <Route path="/category/women" element={<Women />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/customer-reviews" element={<CustomerReviews />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/return-policy" element={<ReturnPolicy />} />
        <Route path="/terms-conditions" element={<TermsAndConditions />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
