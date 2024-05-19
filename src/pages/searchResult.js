import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SearchResult = () => {
  // Get search results from Redux state
  const searchResults = useSelector((state) => state.search.searchResults);
  const products = useSelector((state) => state.product.products);

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0px 0px 8px #ddd",
        borderRadius: "10px",
        marginTop: "1rem",
        maxHeight: "300px",
        overflowY: "auto",
      }}
      className="results-list"
    >
      {searchResults.map((result, id) => {
        const product = products.find((p) => p._id === result._id); // Assuming there's an 'id' property in search results
        if (!product) return null; // Skip if product not found

        return (
          <Link
            to={`/product/${product.slug}`} // Replace 'product' with your actual product details route
            key={id}
            className="search-item"
          >
            <img
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
              alt={product.title}
              style={{
                width: "60px",
                height: "auto",
                marginLeft: "20px",
              }}
            />
            <div>
              <h3>{product.title}</h3>
              <p>Price: {product.price}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default SearchResult;
