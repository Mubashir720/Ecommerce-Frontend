// FailurePage.jsx
import React from "react";

const FailurePage = () => {
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
          Payment Canceled
        </h1>
        <p style={{ fontSize: "1.2rem" }}>Your payment was canceled.</p>
      </div>
    </div>
  );
};

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
    <h1 style={{ fontSize: "2rem", marginBottom: "20px" }}>Payment Canceled</h1>
    <p style={{ fontSize: "1.2rem" }}>Your payment was canceled.</p>
  </div>
</div>;

export default FailurePage;
