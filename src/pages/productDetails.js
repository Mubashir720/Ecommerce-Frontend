import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { analyzeSentiment } from "../features/sentiment/sentimentSlice";
import {
  getProductBySlug,
  getProducts,
} from "../features/product/productSlice";
import { addToCart } from "../features/usercart/userCartSlice";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { FaLocationArrow } from "react-icons/fa";
import { LiaComment } from "react-icons/lia";
import { getComments, postReview } from "../features/review/reviewSlice";
import Chart from "chart.js/auto";
import { recommend } from "../features/recommend/recommendSlice";
const ProductDetails = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.product);
  const products = useSelector((state) => state.product.products);
  const isLoading = useSelector((state) => state.product.isLoading);
  const sentimentData = useSelector(
    (state) => state.sentiment.sentimentDataArray
  );
  const { slug } = useParams();
  const [commentInput, setCommentInput] = useState("");
  const chartRef = useRef(null);
  const [showChart, setShowChart] = useState(false);
  const chartInstance = useRef(null);

  const handleViewSentiment = () => {
    dispatch(analyzeSentiment(product.slug));
    setShowChart(!showChart); // Toggle chart visibility
  };

  const comments = useSelector((state) => state.review.comments.comments); // Get comments from the Redux store
  const [showComments, setShowComments] = useState(false); // State to control comment visibility

  const handleShowComments = () => {
    if (!showComments && product) {
      dispatch(getComments(product.slug));
      setShowComments(true);
    } else if (showComments) {
      setShowComments(false);
    }
  };
  const handlePostReview = () => {
    // Call the postReview action with product ID and comment input
    dispatch(postReview({ productId: product._id, comment: commentInput }));
    // Clear the comment input after posting

    setCommentInput("");
  };
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getProductBySlug(slug));
    dispatch(recommend(slug));
  }, [dispatch, slug]);
  const recommendations = useSelector((state) => state.recommend.recommend);

  const handleAddToCart = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = user.token; // Retrieve token using "user" key

    dispatch(
      addToCart({
        token,
        productId: product._id,
        price: product.price,
        color: product.color,
        quantity,
      })
    );
    window.location.reload();
  };
  useEffect(() => {
    if (showChart && chartRef.current && sentimentData) {
      // Destroy previous chart instance if exists
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const ctx = chartRef.current.getContext("2d");
      const labels = ["Positive", "Neutral", "Negative"];
      const data = [
        sentimentData.positive,
        sentimentData.neutral,
        sentimentData.negative,
      ];

      chartInstance.current = new Chart(ctx, {
        type: "bar",
        data: {
          labels,
          datasets: [
            {
              label: "Sentiment Scores",
              data,
              backgroundColor: [
                "rgba(75, 192, 192, 0.2)", // Positive
                "rgba(255, 206, 86, 0.2)", // Neutral
                "rgba(255, 99, 132, 0.2)", // Negative
              ],
              borderColor: [
                "rgba(75, 192, 192, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(255, 99, 132, 1)",
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  }, [sentimentData, showChart]);

  return (
    <div>
      <meta charSet="utf-8" />
      <title>h</title>
      <meta
        content="Zolina is perfect for all types of fashion websites, fashion designers, online shop layouts, and more."
        name="description"
      />
      <meta content="Crombie Black Jacket" property="og:title" />
      <meta
        content="Zolina is perfect for all types of fashion websites, fashion designers, online shop layouts, and more."
        property="og:description"
      />
      <meta
        content="64f6c1d6ba3db4524cc767fd/64f852bb52213bc21fad5c50_product-thumb-07.jpg"
        property="og:image"
      />
      <meta content="Crombie Black Jacket" property="twitter:title" />
      <meta
        content="Zolina is perfect for all types of fashion websites, fashion designers, online shop layouts, and more."
        property="twitter:description"
      />
      <meta
        content="64f6c1d6ba3db4524cc767fd/64f852bb52213bc21fad5c50_product-thumb-07.jpg"
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
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <section className="product-section">
            <div className="w-layout-blockcontainer container w-container">
              <div className="product-hero">
                <div className="product-left">
                  <img
                    alt={product.title}
                    loading="eager"
                    src={
                      product.images && product.images.length > 0
                        ? product.images[0].url
                        : ""
                    }
                    sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, 43vw"
                    srcSet={`${
                      product.images && product.images.length > 0
                        ? product.images[0].url
                        : ""
                    } 618w`}
                    className="product-main-image"
                  />
                </div>

                <div className="product-right">
                  <div className="product-details">
                    <h1 className="product-title">{product.title}</h1>
                    <p className="single-text">{product.description}</p>
                  </div>
                  <div className="product-price">
                    <h4 className="main-price">{product.price} PKR</h4>
                  </div>
                  <div>
                    <form className="w-commerce-commerceaddtocartform">
                      <div className="qty-and-btn">
                        <input
                          type="number"
                          pattern="^[0-9]+$"
                          inputMode="numeric"
                          name="commerce-add-to-cart-quantity-input"
                          min={1}
                          defaultValue={1}
                          className="w-commerce-commerceaddtocartquantityinput quantity"
                          onChange={(e) =>
                            setQuantity(parseInt(e.target.value))
                          }
                        />
                        <button
                          type="button" // Change input type to button
                          className="w-commerce-commerceaddtocartbutton fill-btn"
                          onClick={() => {
                            handleAddToCart();
                          }} // Handle click event
                        >
                          Add to Bag
                        </button>
                      </div>
                    </form>
                    <div
                      style={{ display: "none" }}
                      className="w-commerce-commerceaddtocartoutofstock out-of-stock-state"
                      tabIndex={0}
                    >
                      <div>This product is out of stock.</div>
                    </div>
                    <div
                      aria-live="assertive"
                      data-node-type="commerce-add-to-cart-error"
                      style={{ display: "none" }}
                      className="w-commerce-commerceaddtocarterror error-state"
                    >
                      <div
                        data-node-type="commerce-add-to-cart-error"
                        data-w-add-to-cart-quantity-error="Product is not available in this quantity."
                        data-w-add-to-cart-general-error="Something went wrong when adding this item to the cart."
                        data-w-add-to-cart-mixed-cart-error="You can’t purchase another product with a subscription."
                        data-w-add-to-cart-buy-now-error="Something went wrong when trying to purchase this item."
                        data-w-add-to-cart-checkout-disabled-error="Checkout is disabled on this site."
                        data-w-add-to-cart-select-all-options-error="Please select an option in each set."
                      >
                        Product is not available in this quantity.
                      </div>
                    </div>
                  </div>
                  <div className="additional-info">
                    <div className="ai-list">
                      <div className="ai-label">SKU:</div>
                      <div>CH4283</div>
                    </div>
                    <div className="ai-list">
                      <div className="ai-label">Category:</div>
                      <div className="w-dyn-list">
                        <div role="list" className="w-dyn-items">
                          <div role="listitem" className="w-dyn-item">
                            <a href="/category/men" className="plain-link">
                              {product.category}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ai-list">
                      <a href="/return-policy">
                        Free delivery &amp; Returns policies
                      </a>
                    </div>
                    <br />
                    <button
                      type="button"
                      className="w-commerce-commerceaddtocartbutton fill-btn"
                      onClick={() => {
                        window.location.href = `/product/${product.slug}/try-on`; // Redirect to the "try-on" page
                      }}
                    >
                      Try on
                    </button>
                    <br />
                    <br />
                    <br />
                    <div
                      style={{
                        fontSize: "3rem",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <button
                        type="button"
                        className="w-commerce-commerceaddtocartbutton fill-btn"
                        style={{
                          marginLeft: "auto",
                          fontSize: "20px",
                        }} // Adjust styles as needed
                        onClick={handleViewSentiment}
                      >
                        {showChart
                          ? "Hide Sentiment Chart"
                          : "View Sentiment Chart"}
                      </button>
                      {showChart && <canvas ref={chartRef} />}
                    </div>
                    <div>
                      {/* Your existing JSX code */}
                      <div style={{ fontSize: "3rem" }}>
                        <LiaComment onClick={handleShowComments} />
                      </div>

                      {showComments && (
                        <div
                          className="container"
                          style={{
                            maxWidth: "600px",
                            margin: "0 auto",
                            padding: "20px",
                            border: "1px solid #ddd",
                            borderRadius: "5px",
                            backgroundColor: "#f5f5f5",
                          }}
                        >
                          <h2 style={{ fontWeight: "bold" }}>Comments</h2>
                          <div
                            className="comment"
                            style={{
                              display: "flex",
                              alignItems: "flex-start",
                              position: "relative",
                              paddingRight: "30px",
                              marginBottom: "20px",
                              border: "1px solid black",
                              padding: "10px",
                              borderRadius: "5px",
                              height: "100px",
                            }}
                          >
                            <div>
                              <input
                                className="time"
                                style={{ height: "80px", width: "360px" }}
                                type="text"
                                placeholder="Enter your comment"
                                value={commentInput}
                                onChange={(e) =>
                                  setCommentInput(e.target.value)
                                }
                              />
                            </div>
                            <div
                              style={{
                                position: "absolute",
                                top: "20px",
                                right: "20px",
                                fontSize: "24px",
                                cursor: "pointer",
                              }}
                              onClick={handlePostReview}
                            >
                              <FaLocationArrow />
                            </div>
                          </div>
                          {comments && comments.length > 0 ? (
                            comments.map((comment, index) => (
                              <div
                                key={index}
                                className="comment"
                                style={{
                                  display: "flex",
                                  alignItems: "flex-start",
                                  position: "relative",
                                  paddingRight: "30px",
                                  marginBottom: "20px",
                                  border: "1px solid lightblue",
                                  backgroundColor: "#bec0bf",
                                  padding: "10px",
                                  borderRadius: "5px",
                                }}
                              >
                                <div>
                                  <h3>{comment.userName}</h3>
                                  <p className="time">{comment.comment} </p>
                                  <p className="time">
                                    PostedAt: {comment.createdAt}
                                  </p>
                                </div>
                              </div>
                            ))
                          ) : (
                            <p>No comments available.</p>
                          )}
                        </div>
                      )}
                    </div>{" "}
                  </div>
                </div>

                <div className="p-none w-dyn-list w-dyn-items-repeater-ref">
                  <div
                    role="list"
                    className="w-dyn-items"
                    data-wf-collection="f_more_images_4dr"
                    data-wf-template-id="wf-template-84a654f8-a21d-b810-67a6-a670d32a05ba"
                  >
                    <div
                      role="listitem"
                      className="w-dyn-item w-dyn-repeater-item"
                    >
                      <a
                        href="#"
                        data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_more_images_4dr%5B%5D%22%2C%22to%22%3A%22media%22%7D%5D"
                        className="w-inline-block w-lightbox"
                      >
                        <img
                          alt="64f8538dd1ae30d796eb5c5a_product-thumb-02"
                          loading="lazy"
                          data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_more_images_4dr%5B%5D%22%2C%22to%22%3A%22src%22%7D%5D"
                          src="64f6c1d6ba3db4524cc767fd/64f8538dd1ae30d796eb5c5a_product-thumb-02.jpg"
                          sizes="100vw"
                          srcSet="64f6c1d6ba3db4524cc767fd/64f8538dd1ae30d796eb5c5a_product-thumb-02-p-500.jpg 500w, 64f6c1d6ba3db4524cc767fd/64f8538dd1ae30d796eb5c5a_product-thumb-02.jpg 618w"
                        />
                      </a>
                    </div>
                    <div
                      role="listitem"
                      className="w-dyn-item w-dyn-repeater-item"
                    >
                      <a
                        href="#"
                        data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_more_images_4dr%5B%5D%22%2C%22to%22%3A%22media%22%7D%5D"
                        className="w-inline-block w-lightbox"
                      >
                        <img
                          alt="64f853591584a6562a3eddf8_product-thumb-03"
                          loading="lazy"
                          data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_more_images_4dr%5B%5D%22%2C%22to%22%3A%22src%22%7D%5D"
                          src={
                            product.images && product.images.length > 0
                              ? product.images[0].url
                              : ""
                          }
                          sizes="100vw"
                          srcSet={`${
                            product.images && product.images.length > 0
                              ? product.images[0].url
                              : ""
                          } 618w`}
                        />
                      </a>
                    </div>
                    <div
                      role="listitem"
                      className="w-dyn-item w-dyn-repeater-item"
                    >
                      <a
                        href="#"
                        data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_more_images_4dr%5B%5D%22%2C%22to%22%3A%22media%22%7D%5D"
                        className="w-inline-block w-lightbox"
                      >
                        <img
                          alt="64f853079b255a918c9868cd_product-thumb-05"
                          loading="lazy"
                          data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_more_images_4dr%5B%5D%22%2C%22to%22%3A%22src%22%7D%5D"
                          src="64f6c1d6ba3db4524cc767fd/64f853079b255a918c9868cd_product-thumb-05.jpg"
                          sizes="100vw"
                          srcSet="64f6c1d6ba3db4524cc767fd/64f853079b255a918c9868cd_product-thumb-05-p-500.jpg 500w, 64f6c1d6ba3db4524cc767fd/64f853079b255a918c9868cd_product-thumb-05.jpg 618w"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="empty-state w-dyn-hide w-dyn-empty">
                    <div>No items found.</div>
                  </div>
                </div>
              </div>
              <div className="product-overview">
                <h2>Product Overview</h2>
                <div className="w-richtext">
                  <p>
                    Introducing the epitome of versatile fashion – our Denim
                    Jumpsuit. Crafted with meticulous attention to detail and a
                    keen sense of style, this piece seamlessly combines comfort
                    and sophistication. The premium quality denim not only
                    offers durability but also wraps you in an inviting texture
                    that's both classic and contemporary. Designed to fit like a
                    dream, the Denim Jumpsuit embraces your figure in all the
                    right places, giving you an effortlessly chic silhouette.
                  </p>
                  <p>
                    The tailored structure highlights your waist while the
                    relaxed legs provide ease of movement. Whether you're
                    stepping into a laid-back day around town or looking to make
                    a fashionable statement at an evening gathering, this
                    jumpsuit effortlessly transitions with you. The Denim
                    Jumpsuit is your canvas to play with – pair it with sneakers
                    for a casual vibe or elevate it with heels and accessories
                    for a sophisticated look.
                  </p>
                  <p>
                    With its fusion of style and comfort, this jumpsuit is a
                    must-have addition to your wardrobe. Make your mark with
                    fashion that exudes confidence and versatility, all
                    encapsulated in the elegance of our Denim Jumpsuit. The
                    charm of denim lies not only in its timeless appeal but also
                    in its adaptability.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}
        <section className="similar-products">
          <div className="w-layout-blockcontainer container w-container">
            <h2 className="section-title">Recommended Products</h2>
            <div className="w-dyn-list">
              <div role="list" className="product-list w-dyn-items">
                {isLoading ? (
                  <p>Loading...</p>
                ) : (
                  recommendations.map((product) => {
                    // Conditionally render product item for Accessories category
                    return (
                      <div
                        key={product.id}
                        role="listitem"
                        className="product-item w-dyn-item"
                      >
                        <a
                          data-w-id="45f1b884-06f0-859d-4670-185e07fb3887"
                          href={`/product/${product.slug}`}
                          className="product-link w-inline-block"
                        >
                          <div className="product-img">
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
                              sizes="(max-width: 479px) 67vw, (max-width: 767px) 46vw, (max-width: 991px) 31vw, 22vw"
                              srcSet={`${
                                product.images && product.images.length > 0
                                  ? product.images[0].url
                                  : ""
                              } 618w`}
                              className="product-image"
                            />
                          </div>
                          <div className="product-info">
                            <div className="product-name">{product.title}</div>
                            <div className="price-wrap">
                              <div
                                data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D"
                                className="price"
                              >
                                {product.price} PKR
                              </div>
                              <div
                                data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_compare_at_price_7dr10dr%22%2C%22to%22%3A%22innerHTML%22%7D%5D"
                                className="old-price w-dyn-bind-empty"
                              />
                            </div>
                          </div>
                        </a>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
