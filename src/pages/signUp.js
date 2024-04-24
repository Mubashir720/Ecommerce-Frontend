import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import toast CSS
import "../App.css";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { signUpUser } from "../features/auth/authSlice";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
    acceptPrivacy: false,
    acceptCommunications: false,
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Dispatch signUpUser action after form submission
      await dispatch(signUpUser(formData));
      toast.success("Signup successful!"); // Display success toast message
      navigate("/log-in");
    } catch (error) {
      // Handle signup failure
      toast.error("Failed to signup. Please try again."); // Display error toast message
    }
  };

  return (
    <div>
      <meta charSet="utf-8" />
      <title>Sign Up - Infinite Webflow website HTML template</title>
      <meta
        content="Infinite is perfect for all types of fashion websites, fashion designers, online shop layouts, and more."
        name="description"
      />
      <meta
        content="Sign Up - Infinite Webflow website HTML template"
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
        content="Sign Up - Zolina Webflow website HTML template"
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
          <h1 className="page-heading center-title">Signup</h1>
        </div>
      </div>
      <div className="page-wrapper">
        <section className="form-section">
          <div className="w-users-usersignupformwrapper login-form">
            <form className="form" onSubmit={handleSubmit}>
              <div className="login-fields">
                <div className="form-field">
                  <label htmlFor="Email" className="field-label">
                    Email
                  </label>
                  <input
                    id="wf-sign-up-email"
                    name="email"
                    className="input w-input"
                    type="email"
                    autoComplete="username"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="Name" className="field-label">
                    Name
                  </label>
                  <input
                    id="wf-sign-up-name"
                    name="name"
                    className="input w-input"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="number" className="field-label">
                    Mobile
                  </label>
                  <input
                    id="wf-sign-up-name"
                    name="mobile"
                    type="text"
                    className="input w-input"
                    required
                    value={formData.mobile}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="Password" className="field-label">
                    Password
                  </label>
                  <input
                    id="wf-sign-up-password"
                    name="password"
                    className="input w-input"
                    type="password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="agreement">
                <label className="w-checkbox">
                  <input
                    id="wf-sign-up-accept-privacy"
                    name="acceptPrivacy"
                    className="w-checkbox-input"
                    type="checkbox"
                    required
                    checked={formData.acceptPrivacy}
                    onChange={handleChange}
                  />
                  <span className="w-form-label">
                    By creating an account, I agree to this website's{" "}
                    <a href="/privacy-policy" className="w-inline-block">
                      privacy policy
                    </a>{" "}
                    and{" "}
                    <a href="/terms-conditions" className="w-inline-block">
                      terms of service
                    </a>
                  </span>
                </label>
                <label className="w-checkbox">
                  <input
                    id="wf-sign-up-accept-communications"
                    name="acceptCommunications"
                    className="w-checkbox-input"
                    type="checkbox"
                    required
                    checked={formData.acceptCommunications}
                    onChange={handleChange}
                  />
                  <span className="w-form-label">
                    I consent to receive marketing emails.
                  </span>
                </label>
              </div>
              <div className="login-btn">
                <input
                  data-wait="Please wait..."
                  type="submit"
                  className="w-users-userformbutton fill-btn w-button"
                  defaultValue="Sign Up"
                />
              </div>
              <div className="w-users-userformfooter">
                <span>Already have an account?</span>
                <a href="log-in" className="w-inline-block">
                  Log In
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
                wf-signup-form-general-error-error="There was an error signing you up. Please try again, or contact us if you continue to have problems."
                wf-signup-form-not-allowed-error="You're not allowed to access this site, please contact the admin for support."
                wf-signup-form-invalid-email-error="Make sure your email exists and is properly formatted (e.g., user@domain.com)."
                wf-signup-form-email-already_exist-error="An account with this email address already exists. Log in or reset your password."
                wf-signup-form-use-invite_email-error="Use the same email address your invitation was sent to."
                wf-signup-form-invalid-password-error="Your password must be at least 8 characters."
                wf-signup-form-not-verified-error="We couldn't verify your account. Please try again, or contact us if you continue to have problems."
                wf-signup-form-expired-token-error="This link has expired. A new link has been sent to your email. Please try again, or contact us if you continue to have problems."
                wf-signup-form-validation-failed-error="There was an error in some of the information provided."
              >
                There was an error signing you up. Please try again, or contact
                us if you continue to have problems.
              </div>
            </div>
            <div
              tabIndex={-1}
              className="w-users-usersignupverificationmessage sign-up-verification w-form-verification"
              data-wf-user-form-verification="true"
            >
              <div className="w-users-userformheader">
                <h4>Verification Required</h4>
              </div>
              <p>
                Account verification required. Please check your email to find
                your unique verification link.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Features />
      <Footer />
    </div>
  );
};

export default SignUp;
