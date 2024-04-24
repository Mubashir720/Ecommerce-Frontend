import React from "react";
import pic1 from "../assets/64f72d3453f0d8d7f357b25e_ic-payment.svg";
import pic2 from "../assets/64f72d34b30ca0ed1735749c_ic-support.svg";
import pic3 from "../assets/64f72d33c5b5245f8b06281b_ic-shipping.svg";
const Features = () => {
  return (
    <section className="features">
      <div className="w-layout-blockcontainer container w-container">
        <div className="feature-wrap">
          <div className="f-block">
            <img
              src={pic3}
              loading="lazy"
              alt="Feature Icon"
              className="feature-icon"
            />
            <div className="feature-text">
              <div className="body-large">Shipping Worldwide</div>
              <div>Discover fashion without boundaries.</div>
            </div>
          </div>
          <div className="f-block">
            <img
              src={pic1}
              loading="lazy"
              alt="Feature Icon"
              className="feature-icon"
            />
            <div className="feature-text">
              <div className="body-large">Flexible Payment</div>
              <div>Payment options as unique as your style</div>
            </div>
          </div>
          <div className="f-block">
            <img
              src={pic2}
              loading="lazy"
              alt="Feature Icon"
              className="feature-icon"
            />
            <div className="feature-text">
              <div className="body-large">24/7 Customer Support</div>
              <div>Customer Care Whenever You Need</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
