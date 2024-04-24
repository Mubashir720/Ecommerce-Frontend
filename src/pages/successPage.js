import React from "react";

const SuccessPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "silver",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "20px" }}>
          Payment Successful
        </h1>
        <p style={{ fontSize: "1.2rem" }}>Thank you for your purchase!</p>
      </div>
    </div>
  );
};

export default SuccessPage;
