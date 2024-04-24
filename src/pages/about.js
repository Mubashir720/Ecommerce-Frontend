import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Features from "../components/Features";
import pic1 from "../assets/64f71ef48414f3e66b623c04_about-01.jpg";
import pic2 from "../assets/64f71ef5433208ee0ca606c3_about-02.jpg";
import pic3 from "../assets/64f72167dc7dbb34e58ab039_who-we-are.jpg";
import pic4 from "../assets/64f72167f9709d68d9f348c8_journey.jpg";
import image6 from "../assets/64f712769012470455788832_review-thumb-01-p-500.jpg";
import image7 from "../assets/64f71276756e20f01214c498_review-thumb-02-p-500.jpg";
import image8 from "../assets/64f712765f8704fd91aa0819_review-thumb-03-p-500.jpg";
import image9 from "../assets/64f71276fa89464fe29d7fa4_review-thumb-04-p-500.jpg";

import blog1 from "../assets/64f8002278e4e856227e9169_blog-thumb-02.jpg";
import blog2 from "../assets/64f80036aff7d076668a273b_blog-thumb-03.jpg";
import blog3 from "../assets/64f8004b13a1481a6fbd8c71_blog-thumb-04.jpg";
import image5 from "../assets/64f71704c9920a99cde767ff_cta.png";
const About = () => {
  return (
    <div>
      <meta charSet="utf-8" />
      <title>About - Zolina Webflow Ecommerce website template</title>
      <meta
        content="Zolina is perfect for all types of fashion websites, fashion designers, online shop layouts, and more."
        name="description"
      />
      <meta
        content="About - Zolina Webflow Ecommerce website template"
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
        content="About - Zolina Webflow Ecommerce website template"
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
      <div className="page-wrapper">
        <section className="about-hero">
          <div className="w-layout-blockcontainer container w-container">
            <div className="ab-wrap">
              <div className="ab-left">
                <h1 className="about-title">Our Story</h1>
                <div className="ab-data">
                  <p className="ab-text">
                    At Infinite, we breathe life into fashion. With a commitment
                    to timeless elegance and contemporary flair, we curate
                    clothing and accessories that redefine style.
                  </p>
                  <a href="shop" className="primary-btn w-inline-block">
                    <div>Shop Now</div>
                  </a>
                </div>
              </div>
              <div className="ab-right">
                <div className="ab-img">
                  <img
                    src={pic1}
                    loading="eager"
                    sizes="(max-width: 479px) 42vw, (max-width: 767px) 53vw, (max-width: 991px) 400px, 29vw"
                    srcSet={pic1}
                    alt="About Image"
                    className="about-image"
                  />
                </div>
                <div className="ab-img">
                  <img
                    src={pic2}
                    loading="lazy"
                    alt="About Image"
                    className="ab-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="who-we-are">
          <div className="w-layout-blockcontainer container w-container">
            <div className="section-wrap">
              <div className="si-wrap">
                <img
                  src={pic3}
                  loading="lazy"
                  sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 46vw, 45vw"
                  srcSet={pic3}
                  alt="Who We Are"
                  className="section-image"
                />
              </div>
              <div className="section-data">
                <h2 className="section-heading">Who We Are</h2>
                <p>
                  Infinite is more than a brand; it's a manifestation of
                  passion, creativity, and dedication. We are a collective of
                  artists, designers, and fashion enthusiasts united by a shared
                  mission: to redefine the way people experience clothing.
                </p>
                <p className="single-text">
                  With a keen eye for detail and an unwavering commitment to
                  quality, we curate a selection that transcends trends,
                  offering timeless pieces.
                </p>
                <div className="button-wrap">
                  <a href="categories" className="primary-btn w-inline-block">
                    <div>View Collection</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="journey">
          <div className="w-layout-blockcontainer container w-container">
            <div className="section-wrap split">
              <div className="section-data">
                <h2 className="section-heading">Journey into Sophistication</h2>
                <p>
                  Explore the artistry and refinement that define our creations,
                  where every piece reflects a timeless allure. At Infinite, we
                  curate fashion that transcends trends, offering you a path to
                  embrace elegance in every step you take.
                </p>
                <ul role="list" className="journey-list">
                  <li className="jl-item">Personalize style</li>
                  <li className="jl-item">Personalize style</li>
                  <li className="jl-item">Personalize style</li>
                  <li className="jl-item">Personalize style</li>
                </ul>
                <div className="button-wrap">
                  <a href="shop" className="primary-btn w-inline-block">
                    <div>Shop Now</div>
                  </a>
                </div>
              </div>
              <div className="si-wrap">
                <img
                  src={pic4}
                  loading="lazy"
                  sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 46vw, 45vw"
                  srcSet={pic4}
                  alt="Who We Are"
                  className="section-image"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="facts">
          <div className="w-layout-blockcontainer container w-container">
            <div className="facts-wrap">
              <div>
                <div className="fact-text">02</div>
                <div>Retail Stores</div>
              </div>
              <div>
                <div className="fact-text">630</div>
                <div>Employees</div>
              </div>
              <div>
                <div className="fact-text">2023</div>
                <div>Established</div>
              </div>
              <div>
                <div className="fact-text">10</div>
                <div>Thousand Sales</div>
              </div>
            </div>
          </div>
        </section>
        <section className="review">
          <div className="w-layout-blockcontainer container w-container">
            <h2 className="section-title">Happy Customers</h2>
            <div
              data-delay={4000}
              data-animation="slide"
              className="review-slider w-slider"
              data-autoplay="false"
              data-easing="ease"
              data-hide-arrows="false"
              data-disable-swipe="false"
              data-autoplay-limit={0}
              data-nav-spacing={3}
              data-duration={500}
              data-infinite="true"
            >
              <div className="review-slide-mask w-slider-mask">
                <div className="review-slide w-slide">
                  <div className="review-img">
                    <div className="overlay" />
                    <div className="review-data">
                      <h3 className="review-name">Alishba Mukhtar</h3>
                      <p className="review-text">
                        I'm thrilled with my Infinite purchases. The fit,
                        fabric, and attention to detail in their clothing is
                        top-notch.
                      </p>
                    </div>
                    <img
                      src={image6}
                      loading="eager"
                      sizes="(max-width: 479px) 83vw, 416px"
                      srcSet={image6}
                      alt="Review Image"
                      className="review-image"
                    />
                  </div>
                </div>
                <div className="review-slide w-slide">
                  <div className="review-img">
                    <div className="overlay two" />
                    <div className="review-data">
                      <h3 className="review-name">Farhan Rathore</h3>
                      <p className="review-text">
                        I've been a loyal Infinite customer for years. Their
                        attention to detail and commitment to timeless style.
                      </p>
                    </div>
                    <img
                      src={image7}
                      loading="lazy"
                      sizes="(max-width: 479px) 83vw, 416px"
                      srcSet={image7}
                      alt="Review Image"
                      className="review-image"
                    />
                  </div>
                </div>
                <div className="review-slide w-slide">
                  <div className="review-img">
                    <div className="overlay three" />
                    <div className="review-data">
                      <h3 className="review-name">Kinza Arshad</h3>
                      <p className="review-text">
                        Infinite's customer service is exceptional. They go
                        above and beyond to ensure every purchase is a great
                        experience.
                      </p>
                    </div>
                    <img
                      src={image8}
                      loading="lazy"
                      sizes="(max-width: 479px) 83vw, 416px"
                      srcSet={image8}
                      alt="Review Image"
                      className="review-image"
                    />
                  </div>
                </div>
                <div className="review-slide w-slide">
                  <div className="review-img">
                    <div className="overlay four" />
                    <div className="review-data">
                      <h3 className="review-name">Mudasir Satti</h3>
                      <p className="review-text">
                        Infinite has become my go-to for elevating my
                        professional wardrobe. Their pieces exude confidence and
                        professionalism.
                      </p>
                    </div>
                    <img
                      src={image9}
                      loading="lazy"
                      sizes="(max-width: 479px) 83vw, 416px"
                      srcSet={image9}
                      alt="Review Image"
                      className="review-image"
                    />
                  </div>
                </div>
                <div className="review-slide w-slide">
                  <div className="review-img">
                    <div className="overlay five" />
                    <div className="review-data">
                      <h3 className="review-name">Kristin Watson</h3>
                      <p className="review-text">
                        I've received countless compliments when wearing
                        Infinite. Their designs are conversation starters
                      </p>
                    </div>
                    <img
                      src="64e5959c14534d52c0ec4b8f/64f71276a35464e7cf7934bf_review-thumb-05.jpg"
                      loading="lazy"
                      sizes="(max-width: 479px) 83vw, 416px"
                      srcSet="64e5959c14534d52c0ec4b8f/64f71276a35464e7cf7934bf_review-thumb-05-p-500.jpg 500w, 64e5959c14534d52c0ec4b8f/64f71276a35464e7cf7934bf_review-thumb-05-p-800.jpg 800w, 64e5959c14534d52c0ec4b8f/64f71276a35464e7cf7934bf_review-thumb-05.jpg 832w"
                      alt="Review Image"
                      className="review-image"
                    />
                  </div>
                </div>
                <div className="review-slide w-slide">
                  <div className="review-img">
                    <div className="overlay six" />
                    <div className="review-data">
                      <h3 className="review-name">Jerome Bell</h3>
                      <p className="review-text">
                        As a discerning shopper, I appreciate the artistry
                        behind Infinite's designs. Their pieces are investment
                        pieces.
                      </p>
                    </div>
                    <img
                      src="64e5959c14534d52c0ec4b8f/64f712765f8704fd91aa08b6_review-thumb-06.jpg"
                      loading="lazy"
                      sizes="(max-width: 479px) 83vw, 416px"
                      srcSet="64e5959c14534d52c0ec4b8f/64f712765f8704fd91aa08b6_review-thumb-06-p-500.jpg 500w, 64e5959c14534d52c0ec4b8f/64f712765f8704fd91aa08b6_review-thumb-06-p-800.jpg 800w, 64e5959c14534d52c0ec4b8f/64f712765f8704fd91aa08b6_review-thumb-06.jpg 832w"
                      alt="Review Image"
                      className="review-image"
                    />
                  </div>
                </div>
              </div>
              <div className="left-arrow w-slider-arrow-left" />
              <div className="right-arrow w-slider-arrow-right" />
              <div className="slider w-slider-nav w-round w-num" />
            </div>
          </div>
        </section>
        <section className="cta">
          <div className="w-layout-blockcontainer container w-container">
            <img
              src={image5}
              loading="eager"
              sizes="(max-width: 767px) 100vw, (max-width: 991px) 360px, 700px"
              srcSet={image5}
              alt="CTA Image"
              className="cta-image"
            />
            <div className="cta-wrap">
              <div className="cta-data">
                <h3>Find Your Perfect Look Today.</h3>
                <p className="cta-text">
                  Embrace the essence of effortless style and unmatchable
                  comfort with our collections.
                </p>
                <a href="shop" className="primary-btn w-inline-block">
                  <div>Shop Now</div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="blog">
          <div className="w-layout-blockcontainer container w-container">
            <h2 className="section-title">Latest News</h2>
            <div className="w-dyn-list">
              <div role="list" className="blog-list w-dyn-items">
                <div role="listitem" className="blog-item w-dyn-item">
                  <a
                    data-w-id="75d7aa7c-a0d5-9888-7a0c-998db40abda7"
                    href="blogs/from-runway-to-real-life-styling-inspiration"
                    className="blog-link w-inline-block"
                  >
                    <div className="blog-img">
                      <img
                        alt="Blog"
                        loading="lazy"
                        src={blog1}
                        sizes="(max-width: 479px) 100vw, (max-width: 991px) 46vw, 30vw"
                        srcSet={blog1}
                        className="blog-image"
                      />
                    </div>
                    <div className="blog-info">
                      <div className="body-small">January 6, 2024</div>
                      <h4 className="blog-title">
                        From Runway to Real Life Styling Inspiration
                      </h4>
                    </div>
                  </a>
                </div>
                <div role="listitem" className="blog-item w-dyn-item">
                  <a
                    data-w-id="75d7aa7c-a0d5-9888-7a0c-998db40abda7"
                    className="blog-link w-inline-block"
                  >
                    <div className="blog-img">
                      <img
                        alt="Blog"
                        loading="lazy"
                        src={blog2}
                        sizes="(max-width: 479px) 100vw, (max-width: 991px) 46vw, 30vw"
                        srcSet={blog2}
                        className="blog-image"
                      />
                    </div>
                    <div className="blog-info">
                      <div className="body-small">January 6, 2024</div>
                      <h4 className="blog-title">
                        Travel in Style Wardrobe Staples for Jetsetters
                      </h4>
                    </div>
                  </a>
                </div>
                <div role="listitem" className="blog-item w-dyn-item">
                  <a
                    data-w-id="75d7aa7c-a0d5-9888-7a0c-998db40abda7"
                    className="blog-link w-inline-block"
                  >
                    <div className="blog-img">
                      <img
                        alt="Blog"
                        loading="lazy"
                        src={blog3}
                        sizes="(max-width: 479px) 100vw, (max-width: 991px) 46vw, 30vw"
                        srcSet={blog3}
                        className="blog-image"
                      />
                    </div>
                    <div className="blog-info">
                      <div className="body-small">January 6, 2024</div>
                      <h4 className="blog-title">
                        The Intersection of Comfort and Fashion Athleisure
                      </h4>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="button-wrap right">
              <a href="blogs" className="primary-btn w-inline-block">
                <div>View All</div>
              </a>
            </div>
          </div>
        </section>
      </div>
      <Features />
      <Footer />
    </div>
  );
};

export default About;
