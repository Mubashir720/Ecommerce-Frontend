import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../features/order/orderSlice";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { loadStripe } from "@stripe/stripe-js";

const Checkout = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.userCart.cart);
  const [formData, setFormData] = useState({
    email: "",
    mobile: "",
    fullName: "",
    address: "",
    paymentMethod: "COD", // Default payment method
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Set COD based on selected payment method

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      COD: true,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    dispatch(
      createOrder({
        ...formData,
      })
    );
    // Clear form fields after order creation
    setFormData({
      email: "",
      mobile: "",
      fullName: "",
      address: "",
      paymentMethod: "cashOnDelivery", // Reset to default payment method
    });
  };
  const makePayment = async () => {
    const stripe = await loadStripe(
      "pk_test_51P0dpsRqlx8vMRC3DSEgwD9K9ldw2LqnCZdzwBh6tHoIxx4NucxpUyNNiyXAgiItncgzR2FRmQiYlHdCshmonYTL00ebar3X5b"
    );

    const body = {
      products: cart,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await fetch(
      "http://localhost:5000/api/user/create-checkout-session",
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      }
    );

    const session = await response.json();

    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log(result.error);
    }
  };

  return (
    <div className="container">
      <Header />
      <main className="main">
        <section
          className="cart-section"
          style={{
            float: "right",
            backgroundColor: "cream",
            padding: "20px",
            borderRadius: "5px",
          }}
        >
          <h2 className="contact-info-text">Order Details</h2>
          {cart && cart.cartItems && cart.cartItems.length > 0 ? (
            <div className="w-commerce-commercecartformwrapper">
              {cart.cartItems.map((item) => (
                <div
                  key={item._id}
                  className="w-commerce-commercecartitem"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <img
                    src={item.productId.images[0].url}
                    alt=""
                    style={{
                      width: "80px",
                      height: "auto",
                      marginRight: "20px",
                    }}
                  />
                  <div
                    className="w-commerce-commercecartiteminfo"
                    style={{ flex: 1 }}
                  >
                    <div
                      className="w-commerce-commercecartproductname"
                      style={{ fontSize: "18px" }}
                    >
                      {item.productId.title}
                    </div>
                    <div style={{ fontSize: "16px" }}>
                      Price: {item.price} PKR
                    </div>
                    <div style={{ fontSize: "16px" }}>
                      Quantity: {item.quantity}
                    </div>
                  </div>
                </div>
              ))}
              <div className="w-commerce-commercecartfooter">
                <div
                  aria-atomic="true"
                  aria-live="polite"
                  className="w-commerce-commercecartlineitem"
                >
                  <div>
                    Subtotal:{" "}
                    {cart.cartItems.reduce(
                      (acc, item) => acc + item.price * item.quantity,
                      0
                    )}{" "}
                    PKR
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-commerce-commercecartemptystate empty-state">
              <div aria-label="This cart is empty" aria-live="polite">
                No items found.
              </div>
            </div>
          )}
        </section>

        <section className="form-section">
          <form className="form-area" onSubmit={handleSubmit}>
            <h2 className="contact-info-text">Contact information</h2>
            <div className="contact-info">
              <div className="email-area postal-area">
                <label htmlFor="email" className="label">
                  E-mail
                </label>
                <div className="input-area">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email..."
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="phone-area postal-area">
                <label htmlFor="mobile" className="label">
                  Phone
                </label>
                <div className="input-area">
                  <input
                    type="text"
                    name="mobile"
                    placeholder="Enter your phone..."
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="name-area postal-area">
                <label htmlFor="fullName" className="label">
                  Full Name
                </label>
                <div className="input-area">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Enter your full name..."
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="address-area postal-area">
                <label htmlFor="address" className="label">
                  Address
                </label>
                <div className="input-area">
                  <input
                    type="text"
                    name="address"
                    placeholder="Enter your address..."
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div
                className="payment-method-area postal-area"
                style={{ marginTop: "20px" }}
              >
                <label htmlFor="paymentMethod" className="label">
                  Payment Method
                </label>
                <div className="input-area">
                  <label>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="COD"
                      checked={formData.paymentMethod === "COD"}
                      onChange={handleChange}
                    />
                    Cash on Delivery
                  </label>
                  <button
                    type="button"
                    onClick={makePayment}
                    style={{
                      marginTop: "20px",
                      padding: "5px 10px",
                      backgroundColor: "black",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  >
                    Pay Online
                  </button>
                </div>
              </div>
            </div>
            <div className="btn-area" style={{ marginTop: "20px" }}>
              <button
                type="submit"
                style={{
                  marginTop: "20px",
                  padding: "5px 10px",
                  backgroundColor: "black",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Confirm Order
              </button>
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
