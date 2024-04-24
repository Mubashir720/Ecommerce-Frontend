import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "../App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Features from "../components/Features";
import { loginUser } from "../features/auth/authSlice";
const LogIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Your login logic
    // After successful login, dispatch loginUser action
    dispatch(loginUser(formData));
    navigate("/");
  };

  return (
    <div>
      <meta charSet="utf-8" />
      <title>Log In - Zolina Webflow website HTML template</title>
      <meta
        content="Zolina is perfect for all types of fashion websites, fashion designers, online shop layouts, and more."
        name="description"
      />
      <meta
        content="Log In - Zolina Webflow website HTML template"
        property="og:title"
      />
      <meta
        content="Zolina is perfect for all types of fashion websites, fashion designers, online shop layouts, and more."
        property="og:description"
      />
      <meta
        content="64e5959c14534d52c0ec4b8f/64f6b90efcde0908ec82f152_og-image.jpg"
        property="og:image"
      />
      <meta
        content="Log In - Zolina Webflow website HTML template"
        property="twitter:title"
      />
      <meta
        content="Zolina is perfect for all types of fashion websites, fashion designers, online shop layouts, and more."
        property="twitter:description"
      />
      <meta
        content="64e5959c14534d52c0ec4b8f/64f6b90efcde0908ec82f152_og-image.jpg"
        property="twitter:image"
      />
      <meta property="og:type" content="website" />
      <meta content="summary_large_image" name="twitter:card" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta content="Webflow" name="generator" />
      <link
        href="64e5959c14534d52c0ec4b8f/css/zolina-template.webflow.60409fbc0.css"
        rel="stylesheet"
        type="text/css"
      />
      <link href="https://fonts.googleapis.com" rel="preconnect" />
      <link
        href="https://fonts.gstatic.com"
        rel="preconnect"
        crossOrigin="anonymous"
      />
      <link
        href="64e5959c14534d52c0ec4b8f/64f6bb6c7e97ba27942038e4_favicon-small.jpg"
        rel="shortcut icon"
        type="image/x-icon"
      />
      <link
        href="64e5959c14534d52c0ec4b8f/64f6bb6e9aea95f14a39816f_favicon-big.jpg"
        rel="apple-touch-icon"
      />
      <Header />
      <div className="page-title">
        <div className="w-layout-blockcontainer container w-container">
          <h1 className="page-heading center-title">Login</h1>
        </div>
      </div>
      <div className="page-wrapper">
        <section className="form-section">
          <div className="w-users-userloginformwrapper login-form">
            <form
              className="form"
              data-wf-user-form-type="login"
              data-wf-user-form-redirect
              onSubmit={handleSubmit}
            >
              <div className="login-fields">
                <div className="form-field">
                  <label htmlFor="Email" className="field-label">
                    Email
                  </label>
                  <input
                    maxLength={256}
                    placeholder
                    name="email"
                    id="wf-log-in-email"
                    className="input w-input"
                    type="email"
                    autoComplete="username"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    data-wf-user-form-input-type="email"
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="Password" className="field-label">
                    Password
                  </label>
                  <input
                    maxLength={256}
                    placeholder
                    name="password"
                    id="wf-log-in-password"
                    className="input w-input"
                    type="password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    data-wf-user-form-input-type="password"
                  />
                </div>
              </div>
              <div className="login-btn">
                <button
                  type="submit"
                  className="w-users-userformbutton fill-btn w-button"
                >
                  Log In
                </button>
              </div>
              <div className="w-users-userformfooter">
                <span>Don't have an account?</span>
                <a href="sign-up" className="w-inline-block">
                  Sign Up
                </a>
              </div>
            </form>
            <div
              style={{ display: "none" }}
              data-wf-user-form-error="true"
              className="w-users-userformerrorstate error-state w-form-fail"
            >
              <div
                className="user-form-error-msg"
                wf-login-form-general-error-error="We're having trouble logging you in. Please try again, or contact us if you continue to have problems."
                wf-login-form-invalid-email_or_password-error="Invalid email or password. Please try again."
              >
                We're having trouble logging you in. Please try again, or
                contact us if you continue to have problems.
              </div>
            </div>
          </div>
        </section>
      </div>
      <Features />
      <Footer />
    </div>
  );
};

export default LogIn;
