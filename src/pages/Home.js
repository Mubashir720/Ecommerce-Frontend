import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductById, getProducts } from "../features/product/productSlice";
import Header from "../components/Header";
import Features from "../components/Features";
import Footer from "../components/Footer";
import heroImage from "../assets/64f81aa7aa4a07bb1acbdaa4_hero-02.jpg";
import heroImage2 from "../assets/64f81aa70a8ce1f3a13cdc6c_hero-01.jpg";
import review1 from "../assets/64f81fc88bb4cd73b0ef901f_avatar-01.jpg";
import review2 from "../assets/64f81fc8ae9505711eec8a0c_avatar-02.jpg";
import review3 from "../assets/64f81fc9a8f8f3a6d8127500_avatar-03.jpg";
import image1 from "../assets/64f82567b88049e668fdb68f_category-01-p-500.jpg";
import image2 from "../assets/64f8256724ff7c107dc587b1_category-02-p-500.jpg";
import image3 from "../assets/64f848f87f219e64ae2d1186_ab-01.jpg";
import image4 from "../assets/64f848f86061ea64dda474e0_ab-02.jpg";
import image5 from "../assets/64f71704c9920a99cde767ff_cta.png";
import image6 from "../assets/64f712769012470455788832_review-thumb-01-p-500.jpg";
import image7 from "../assets/64f71276756e20f01214c498_review-thumb-02-p-500.jpg";
import image8 from "../assets/64f712765f8704fd91aa0819_review-thumb-03-p-500.jpg";
import image9 from "../assets/64f71276fa89464fe29d7fa4_review-thumb-04-p-500.jpg";
import arrow1 from "../assets/64f80743270fe4cde039b74c_link-arrow.svg";
import blog1 from "../assets/64f8002278e4e856227e9169_blog-thumb-02.jpg";
import blog2 from "../assets/64f80036aff7d076668a273b_blog-thumb-03.jpg";
import blog3 from "../assets/64f8004b13a1481a6fbd8c71_blog-thumb-04.jpg";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const isLoading = useSelector((state) => state.product.isLoading);

  useEffect(() => {
    dispatch(getProducts());
    // Example of fetching a product by ID
    const productId = "your_product_id_here";
    dispatch(getProductById(productId));
  }, [dispatch]);
  return (
    <div>
      <meta charSet="utf-8" />
      <title>Zolina - Webflow Ecommerce website template</title>
      <meta
        content="Zolina is perfect for all types of fashion websites, fashion designers, online shop layouts, and more."
        name="description"
      />
      <meta
        content="Zolina - Webflow Ecommerce website template"
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
        content="Zolina - Webflow Ecommerce website template"
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
      <section className="hero">
        <div className="w-layout-blockcontainer container w-container">
          <div className="hero-wrap">
            <div className="hero-left">
              <div className="hero-img">
                <img
                  src={heroImage2}
                  loading="eager"
                  sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 220px, 340px"
                  srcSet={heroImage2}
                  alt="Hero Image"
                  className="hero-image"
                />
              </div>
              <div className="hero-text-data">
                <div className="tag-wrap">
                  <a href="/category/men" className="tag">
                    Men
                  </a>
                  <a href="/category/women" className="tag">
                    Women
                  </a>
                  <a href="/category/accessories" className="tag">
                    Accessories
                  </a>
                </div>
                <div>
                  <p className="hero-text">
                    Infinite is your destination for discovering and embracing
                    fashion that resonates with your personal flair.
                  </p>
                  <a
                    data-w-id="b9c4f3f4-6d40-0ec7-3505-5f7fb7e9ccaa"
                    href="/shop"
                    className="link w-inline-block"
                  >
                    <div>Shop Now</div>
                    <img
                      src={arrow1}
                      loading="lazy"
                      style={{
                        WebkitTransform:
                          "translate3d(0px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                        MozTransform:
                          "translate3d(0px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                        msTransform:
                          "translate3d(0px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                        transform:
                          "translate3d(0px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      }}
                      alt="Arrow"
                      className="link-arrow"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="hero-right-wrap">
              <p className="hero-info">
                From classic staples to on-trend pieces, our collection offers
                style for every occasion.
              </p>
              <div className="hero-right">
                <div className="hero-title-wrap">
                  <h1 className="hero-title">FLAUNT YOUR UNIQUE STYLE</h1>
                  <div className="hero-sub-text">
                    <div className="line" />
                    <div>Style Made Simple</div>
                  </div>
                </div>
                <div className="hero-data-wrap">
                  <div className="hero-small-img">
                    <img
                      src={heroImage}
                      loading="lazy"
                      alt="Hero Image"
                      className="hero-small-image"
                    />
                  </div>
                  <div className="review-box">
                    <div className="ri-wrap">
                      <div className="happy-customer">
                        <img
                          src={review1}
                          loading="lazy"
                          alt="Review Image"
                          className="hc-image"
                        />
                      </div>
                      <div className="happy-customer">
                        <img
                          src={review2}
                          loading="lazy"
                          alt="Review Image"
                          className="hc-image"
                        />
                      </div>
                      <div className="happy-customer last">
                        <img
                          src={review3}
                          loading="lazy"
                          alt="Review Image"
                          className="hc-image"
                        />
                      </div>
                    </div>
                    <p className="hr-text">1k+ Happy Customers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="category">
        <div className="w-layout-blockcontainer container w-container">
          <div className="category-wrap">
            <div className="category-left">
              <h2 className="section-title">
                Warmth and Style for Every Season
              </h2>
              <div className="category-data">
                <div className="w-dyn-list">
                  <div role="list" className="category-list w-dyn-items">
                    <div role="listitem" className="category-item w-dyn-item">
                      <a
                        data-w-id="73d0df94-a015-1dc6-3f95-8acec54995f4"
                        href="/category/men"
                      >
                        <div>Men</div>
                        <img
                          src={arrow1}
                          loading="lazy"
                          style={{ display: "none" }}
                          alt="Arrow"
                          className="link-arrow"
                        />
                      </a>
                    </div>
                    <div role="listitem" className="category-item w-dyn-item">
                      <a
                        data-w-id="73d0df94-a015-1dc6-3f95-8acec54995f4"
                        href="/category/women"
                      >
                        <div>Women</div>
                        <img
                          src={arrow1}
                          loading="lazy"
                          style={{ display: "none" }}
                          alt="Arrow"
                          className="link-arrow"
                        />
                      </a>
                    </div>
                    <div role="listitem" className="category-item w-dyn-item">
                      <a href="/category/accessories">
                        <div>Accessories</div>
                        <img
                          src={arrow1}
                          loading="lazy"
                          style={{ display: "none" }}
                          alt="Arrow"
                          className="link-arrow"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <a
                  data-w-id="721692ee-e9d6-9409-2e3c-f55e787942b3"
                  href="shop"
                  className="category-link w-inline-block"
                >
                  <div>SEE&nbsp;ALL</div>
                  <img
                    src={arrow1}
                    loading="lazy"
                    style={{ display: "none" }}
                    alt="Arrow"
                    className="link-arrow"
                  />
                </a>
              </div>
            </div>
            <div className="category-right">
              <div className="category-img">
                <img
                  src={image1}
                  loading="lazy"
                  sizes="(max-width: 479px) 92vw, (max-width: 767px) 47vw, 29vw"
                  srcSet={image1}
                  alt="Category"
                  className="category-image"
                />
              </div>
              <div className="category-img">
                <img
                  src={image2}
                  loading="lazy"
                  sizes="(max-width: 479px) 92vw, (max-width: 767px) 47vw, 29vw"
                  srcSet={image2}
                  alt="Category"
                  className="category-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about">
        <div className="w-layout-blockcontainer container w-container">
          <h2 className="section-title">
            About Infinite Where Style and Story Intertwine
          </h2>
          <div className="about-wrap">
            <div className="about-left">
              <img
                src={image3}
                loading="lazy"
                sizes="(max-width: 479px) 92vw, (max-width: 767px) 47vw, (max-width: 991px) 29vw, 100vw"
                srcSet={image3}
                alt="About"
                className="about-img"
              />
            </div>
            <div className="about-right-wrap">
              <div className="about-right single">
                <p className="about-text">
                  At Infinite, we bring together the realms of style and
                  narrative, where every thread woven is a part of a larger
                  story.
                </p>
              </div>
              <div className="about-right">
                <div className="about-img-wrap">
                  <img
                    src={image4}
                    loading="lazy"
                    alt="About"
                    className="about-img-right"
                  />
                </div>
                <p className="about-text">
                  Our brand is founded on the idea that style is a powerful
                  medium to convey your narrative to the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="featured-product">
        <div className="w-layout-blockcontainer container w-container">
          <div className="section-title-wrap">
            <h2 className="section-title mb-none">Featured Products</h2>
            <a
              data-w-id="34343280-46c8-7140-3a34-64ddbc006cee"
              href="shop"
              className="link w-inline-block"
            >
              <div>View All</div>
              <img
                src={arrow1}
                loading="lazy"
                style={{
                  WebkitTransform:
                    "translate3d(0px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  MozTransform:
                    "translate3d(0px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  msTransform:
                    "translate3d(0px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  transform:
                    "translate3d(0px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                }}
                alt="Arrow"
                className="link-arrow"
              />
            </a>
          </div>
          <div className="w-dyn-list">
            <div role="list" className="fp-list w-dyn-items">
              {isLoading ? (
                <p>Loading...</p>
              ) : (
                products.map((product) => {
                  // Conditionally render product item for Accessories category
                  return (
                    product.tags === "featured" && (
                      <div
                        key={product.id}
                        role="listitem"
                        className="feature-product-item w-dyn-item"
                      >
                        <a
                          data-w-id="83459191-903b-9b83-3a27-c725119818f7"
                          href={`product/${product.slug}`}
                          className="fp-link w-inline-block"
                        >
                          <div className="fp-img">
                            <img
                              alt={product.title}
                              loading="lazy"
                              style={{
                                WebkitTransform:
                                  "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                                MozTransform:
                                  "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                                msTransform:
                                  "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                                transform:
                                  "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                              }}
                              data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr%22%2C%22to%22%3A%22src%22%7D%5D"
                              src={
                                product.images && product.images.length > 0
                                  ? product.images[0].url
                                  : ""
                              }
                              sizes="(max-width: 479px) 80vw, (max-width: 767px) 46vw, (max-width: 991px) 31vw, 30vw"
                              srcSet={`${
                                product.images && product.images.length > 0
                                  ? product.images[0].url
                                  : ""
                              } 618w`}
                              className="feature-product-image"
                            />
                          </div>
                          <div className="product-info">
                            <div className="product-name">{product.title}</div>
                            <div
                              data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D"
                              className="price"
                            >
                              {product.price} PKR
                            </div>
                          </div>
                        </a>
                      </div>
                    )
                  );
                })
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="banner">
        <div className="banner-left">
          <div className="banner-data">
            <h3 className="banner-title">Women’s Collection</h3>
            <div className="banner-btn-wrap">
              <a href="/category/women" className="primary-btn w-inline-block">
                <div>Shop</div>
              </a>{" "}
              <a href="/categories" className="primary-btn w-inline-block">
                <div>Explore Now</div>
              </a>
            </div>
          </div>
        </div>
        <div className="banner-right">
          <div className="w-layout-blockcontainer container w-container" />
          <div className="banner-data">
            <h3 className="banner-title">Men's Collection</h3>
            <div className="banner-btn-wrap">
              <a href="/category/men" className="primary-btn w-inline-block">
                <div>Shop</div>
              </a>{" "}
              <a href="/categories" className="primary-btn w-inline-block">
                <div>Explore Now</div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="latest-product">
        <div className="w-layout-blockcontainer container w-container">
          <div className="section-title-wrap">
            <div className="title-wrap">
              <h2 className="section-title mb-none">Latest Products</h2>
              <p className="sub-text">
                Embrace the essence of effortless style and unmatchable comfort
                with our collections.
              </p>
            </div>
            <a
              data-w-id="176a0381-ec69-e1de-beeb-e71f62527aeb"
              href="shop"
              className="link w-inline-block"
            >
              <div>View All</div>
              <img
                src={arrow1}
                loading="lazy"
                style={{
                  WebkitTransform:
                    "translate3d(0px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  MozTransform:
                    "translate3d(0px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  msTransform:
                    "translate3d(0px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  transform:
                    "translate3d(0px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                }}
                alt="Arrow"
                className="link-arrow"
              />
            </a>
          </div>
          <div className="w-dyn-list">
            <div className="product-list w-dyn-items">
              {isLoading ? (
                <p>Loading...</p>
              ) : (
                products.map((product) => {
                  // Conditionally render product item for Accessories category
                  return (
                    product.tags === "special" && (
                      <div className="product-item w-dyn-item" key={product.id}>
                        <a
                          href={`product/${product.slug}`}
                          className="product-link w-inline-block"
                        >
                          <div className="product-img">
                            <img
                              alt={product.title}
                              loading="lazy"
                              src={
                                product.images && product.images.length > 0
                                  ? product.images[0].url
                                  : ""
                              }
                              className="product-image"
                            />
                          </div>
                          <div className="product-info">
                            <div className="product-name">{product.title}</div>
                            <div className="price-wrap">
                              <div className="price">{product.price} PKR</div>
                              <div className="old-price w-dyn-bind-empty" />
                            </div>
                          </div>
                        </a>
                      </div>
                    )
                  );
                })
              )}
            </div>
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
                Embrace the essence of effortless style and unmatchable comfort
                with our collections.
              </p>
              <a href="shop" className="primary-btn w-inline-block">
                <div>Shop Now</div>
              </a>
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
                      I'm thrilled with my Infinite purchases. The fit, fabric,
                      and attention to detail in their clothing is top-notch.
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
                      Infinite's customer service is exceptional. They go above
                      and beyond to ensure every purchase is a great experience.
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
                      Infinite has become my go-to for elevating my professional
                      wardrobe. Their pieces exude confidence and
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
                      I've received countless compliments when wearing Infinite.
                      Their designs are conversation starters
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
                      As a discerning shopper, I appreciate the artistry behind
                      Infinite's designs. Their pieces are investment pieces.
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
      <section className="blog">
        <div className="w-layout-blockcontainer container w-container">
          <h2 className="section-title">Latest News</h2>
          <div className="w-dyn-list">
            <div role="list" className="blog-list w-dyn-items">
              <div role="listitem" className="blog-item w-dyn-item">
                <a
                  data-w-id="75d7aa7c-a0d5-9888-7a0c-998db40abda7"
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
      <Features />
      <Footer />
    </div>
  );
};

export default Home;
