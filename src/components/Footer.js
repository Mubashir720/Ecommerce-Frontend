import React from "react";

const Footer = () => {
  return (
    <section className="footer">
      <div className="w-layout-blockcontainer container w-container">
        <div className="footer-wrap">
          <div className="ft-top">
            <a href className="brand w-nav-brand"></a>
            <div className="newsletter">
              <p className="nl-title">Subscribe to our Newsletter</p>
              <div id="Newsletter" className="newsletter-wrap w-form">
                <form
                  id="wf-form-Newsletter"
                  name="wf-form-Newsletter"
                  data-name="Newsletter"
                  method="get"
                  className="email-input"
                  data-wf-page-id="6506b2eab1e3fcb7f035889c"
                  data-wf-element-id="181a0901-b013-662a-44c2-70111462f7b0"
                >
                  <div className="field">
                    <input
                      className="newsletter-input w-input"
                      maxLength={256}
                      name="Your-Email"
                      data-name="Your Email"
                      placeholder="Your Email"
                      type="email"
                      id="Your-Email"
                      required
                    />
                  </div>
                  <input
                    type="submit"
                    data-wait="Please wait..."
                    className="submit w-button"
                    defaultValue
                  />
                </form>
                <div className="success-message w-form-done">
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div className="error-message w-form-fail">
                  <div>
                    Oops! Something went wrong while submitting the form.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="ft-menu-wrap">
              <div>
                <div className="ft-link-title">Pages</div>
                <a href="/about" className="ft-link">
                  Our Story
                </a>
                <a href="/shop" className="ft-link">
                  Shop
                </a>
                <a href="/blogs" className="ft-link">
                  Blogs
                </a>
              </div>
              <div>
                <div className="ft-link-title">Collection</div>
                <a href="/category/men" className="ft-link">
                  Men
                </a>
                <a href="/category/women" className="ft-link">
                  Women
                </a>
                <a href="/category/accessories" className="ft-link last">
                  Accessories
                </a>
              </div>
              <div>
                <div className="ft-link-title">Legal</div>
                <a href="/privacy-policy" className="ft-link">
                  Privacy Policy
                </a>
                <a href="/return-policy" className="ft-link">
                  Return Policy
                </a>
                <a href="/terms-conditions" className="ft-link last">
                  Terms &amp; Conditions
                </a>
              </div>
            </div>
            <div className="ft-btm">
              <div>Designed by Infinite and Co.</div>
              <div>Copyright © 2024 Infinite. All Rights Reserved.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
