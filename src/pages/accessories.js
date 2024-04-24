import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductById, getProducts } from "../features/product/productSlice";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Accessories = () => {
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
      <title>Shop - Zolina Webflow Ecommerce website template</title>
      <meta
        content="Zolina is perfect for all types of fashion websites, fashion designers, online shop layouts, and more."
        name="description"
      />
      <meta
        content="Shop - Zolina Webflow Ecommerce website template"
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
        content="Shop - Zolina Webflow Ecommerce website template"
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
          <h1 className="page-heading">Accessories</h1>
        </div>
      </div>
      <div className="page-wrapper">
        <div className="category-sorting">
          <div className="w-layout-blockcontainer container w-container">
            <div className="sorting-wrap">
              <div className="result">Showing Result</div>
              <div className="category-tab">
                <a
                  href="/shop"
                  aria-current="page"
                  className="category-link w--current"
                >
                  All
                </a>
                <div className="w-dyn-list">
                  <div role="list" className="category-tab-list w-dyn-items">
                    <div role="listitem" className="category-item w-dyn-item">
                      <a href="/category/accessories" className="category-link">
                        Accessories
                      </a>
                    </div>
                    <div role="listitem" className="category-item w-dyn-item">
                      <a href="/category/women" className="category-link">
                        Women
                      </a>
                    </div>
                    <div role="listitem" className="category-item w-dyn-item">
                      <a href="/category/men" className="category-link">
                        Men
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="products">
          <div className="w-layout-blockcontainer container w-container">
            <div className="w-dyn-list">
              <div role="list" className="product-list w-dyn-items">
                {isLoading ? (
                  <p>Loading...</p>
                ) : (
                  products.map((product) => {
                    // Conditionally render product item for Accessories category
                    return (
                      product.category === "accessories" && (
                        <div
                          key={product.id}
                          role="listitem"
                          className="product-item w-dyn-item"
                        >
                          <a
                            data-w-id="11d41aa6-cad6-3dfa-6e64-edf821f1100c"
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
                              <div className="product-name">
                                {product.title}
                              </div>
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
                      )
                    );
                  })
                )}
              </div>
              <div
                role="navigation"
                aria-label="List"
                className="w-pagination-wrapper pagination"
              >
                <a
                  href="/category/women"
                  aria-label="Next Page"
                  className="w-pagination-next next-btn"
                >
                  <div className="w-inline-block">Next</div>
                </a>
                <link rel="prerender" />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Accessories;
