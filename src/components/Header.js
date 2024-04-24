import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCart, emptyCart } from "../features/usercart/userCartSlice";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import logo1 from "../assets/64f6c3e966f2a16851ccaf7b_ic-login.svg";

const Header = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const cart = useSelector((state) => state.userCart.cart);

  useEffect(() => {
    // Fetch the cart when the component mounts
    dispatch(getCart());
  }, [dispatch]);

  const openCart = () => {
    dispatch(getCart()); // Fetch the cart when it is clicked
    setIsCartOpen(true); // Set cart visibility to true when opening
  };
  const closeCart = () => {
    setIsCartOpen(false); // Close the cart
  };
  const handleEmptyCart = () => {
    // Dispatch action to empty the cart
    dispatch(emptyCart());
    setIsCartOpen(false);
  };

  const handleLogout = () => {
    // Retrieve user from localStorage
    try {
      // Clear user from localStorage
      localStorage.removeItem("user");
      alert("You have been successfully logged out.");
      navigate("/log-in");
      // Dispatch any additional actions if needed
    } catch (error) {
      throw new Error("Failed to logout.");
    }
  };
  return (
    <div className="header">
      <div
        data-animation="default"
        data-collapse="medium"
        data-duration={400}
        data-easing="ease"
        data-easing2="ease"
        role="banner"
        className="navbar w-nav"
      >
        <div className="w-layout-blockcontainer container w-container">
          <div className="nav-wrap">
            <div className="nav-left">
              <a href="/" className="brand w-nav-brand">
                <img src={logo} loading="eager" alt="Zolina" />
              </a>
              <nav role="navigation" className="nav-menu w-nav-menu">
                <form action="search" className="mobile-searchbar w-form">
                  <input
                    className="search-input w-input"
                    maxLength={256}
                    name="query"
                    placeholder="Search"
                    type="search"
                    id="mobile-search"
                    required
                  />
                  <input
                    type="submit"
                    className="search-btn w-button"
                    defaultValue=""
                  />
                </form>
                <a href="/shop" className="nav-link">
                  Shop
                </a>
                <a href="/about" className="nav-link">
                  Our Story
                </a>
                <a href="/categories" className="nav-link">
                  Collection
                </a>
                <a href="/customer-reviews" className="nav-link">
                  Review
                </a>
                <a href="/blogs" className="nav-link">
                  Blog
                </a>
              </nav>
            </div>
            <div className="nav-right">
              <form action="search" className="search-bar w-form">
                <input
                  className="search-input w-input"
                  maxLength={256}
                  name="query"
                  placeholder="Search"
                  type="search"
                  id="search"
                  required
                />
                <input
                  type="submit"
                  className="search-btn w-button"
                  defaultValue=""
                />
              </form>
              <div>
                <div style={{ position: "relative", display: "inline-block" }}>
                  <a
                    className="w-commerce-commercecartopenlink cart-btn w-inline-block"
                    role="button"
                    aria-haspopup="dialog"
                    aria-label="Open cart"
                    onClick={openCart}
                  >
                    <div className="cart-icon">{/* Cart icon content */}</div>
                    {cart && cart.cartItems && cart.cartItems.length > 0 && (
                      <div className="w-commerce-commercecartopenlinkcount cart-item">
                        {/* Display total count of items in cart */}
                        {cart.cartItems.reduce(
                          (acc, item) => acc + item.quantity,
                          0
                        )}
                      </div>
                    )}
                  </a>
                </div>

                {isCartOpen && (
                  <div
                    className="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-modal"
                    data-node-type="commerce-cart-container-wrapper"
                  >
                    <div
                      data-node-type="commerce-cart-container"
                      role="dialog"
                      className="w-commerce-commercecartcontainer"
                    >
                      <div className="w-commerce-commercecartheader">
                        <h4 className="w-commerce-commercecartheading">
                          Your Cart
                        </h4>
                        <a
                          className="w-commerce-commercecartcloselink w-inline-block"
                          role="button"
                          aria-label="Close cart"
                          data-node-type="commerce-cart-close-link"
                          onClick={closeCart}
                        >
                          <svg width="16px" height="16px" viewBox="0 0 16 16">
                            <g
                              stroke="none"
                              strokeWidth={1}
                              fill="none"
                              fillRule="evenodd"
                            >
                              <g fillRule="nonzero" fill="#333333">
                                <polygon points="6.23223305 8 0.616116524 13.6161165 2.38388348 15.3838835 8 9.76776695 13.6161165 15.3838835 15.3838835 13.6161165 9.76776695 8 15.3838835 2.38388348 13.6161165 0.616116524 8 6.23223305 2.38388348 0.616116524 2.38388348 2.38388348 6.23223305 8" />
                              </g>
                            </g>
                          </svg>
                        </a>
                      </div>
                      {cart && cart.cartItems && cart.cartItems.length > 0 ? (
                        <div className="w-commerce-commercecartformwrapper">
                          {cart.cartItems.map((item) => (
                            <div
                              key={item._id}
                              className="w-commerce-commercecartitem"
                            >
                              {/* Display product image */}
                              <img
                                src={item.productId.images[0].url}
                                alt=""
                                style={{
                                  width: "60px",
                                  height: "auto",
                                  marginLeft: "20px",
                                }}
                              />
                              <div className="w-commerce-commercecartiteminfo">
                                {/* Display product name */}
                                <div className="w-commerce-commercecartproductname">
                                  {item.productId.title}
                                </div>
                                {/* Display product price */}
                                <div>{item.price} PKR</div>

                                {/* Remove item button */}
                                <a
                                  role="button"
                                  className="w-inline-block"
                                  onClick={() => handleEmptyCart()}
                                  aria-label="Remove item from cart"
                                >
                                  <div>Remove</div>
                                </a>
                              </div>
                              <span
                                className="w-commerce-commercecartquantity"
                                style={{ marginRight: "10px" }}
                              >
                                {item.quantity}
                              </span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="w-commerce-commercecartemptystate empty-state ">
                          <div
                            aria-label="This cart is empty"
                            aria-live="polite"
                          >
                            No items found.
                          </div>
                        </div>
                      )}
                      {cart && cart.cartItems && cart.cartItems.length > 0 && (
                        <div className="w-commerce-commercecartfooter">
                          <div
                            aria-atomic="true"
                            aria-live="polite"
                            className="w-commerce-commercecartlineitem"
                          >
                            <div>
                              Subtotal : {/* Calculate subtotal */}
                              {cart.cartItems.reduce(
                                (acc, item) => acc + item.price * item.quantity,
                                0
                              )}{" "}
                              PKR
                            </div>
                          </div>

                          <div>
                            <a
                              href="/checkout"
                              value="Continue to Checkout"
                              className="w-commerce-commercecartcheckoutbutton primary-btn full-size"
                              data-loading-text="Hang Tight..."
                              data-node-type="cart-checkout-button"
                            >
                              Continue to Checkout
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
              {isLoggedIn && user && user.email ? (
                <div
                  className="welcome-message"
                  style={{
                    display: "inline-block",
                    backgroundColor: "lightblue",
                    color: "white",
                    borderRadius: "50%",
                    padding: "5px 10px",
                    cursor: "pointer",
                  }}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {user.email.charAt(0).toUpperCase()}
                  {isMenuOpen && (
                    <div
                      className="menu-dropdown"
                      style={{
                        backgroundColor: "lightblue",
                        color: "white",
                        borderRadius: "10px",
                        padding: "10px",
                        position: "absolute",
                        top: "40px",
                        right: "0",
                        zIndex: "999",
                      }}
                    >
                      <button onClick={handleLogout}>Logout</button>
                    </div>
                  )}
                </div>
              ) : (
                <a
                  href="log-in"
                  aria-current="page"
                  className="login w-inline-block w--current"
                >
                  <img src={logo1} loading="lazy" alt="Login" />
                </a>
              )}

              <div className="menu-button w-nav-button">
                <div className="menu-icon">
                  <div className="menu-line" />
                  <div className="menu-line" />
                  <div className="menu-line" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
