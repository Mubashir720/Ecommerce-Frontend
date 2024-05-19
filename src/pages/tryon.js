import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tryon } from "../features/tryon/tryonSlice"; // Assuming you have an action named tryon

const Tryon = () => {
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const dispatch = useDispatch();
  const tryonImages = useSelector(
    (state) => state.tryon.images.uploadedImageUrls
  );
  const handleImageUpload = async (event) => {
    try {
      const imageFile = event.target.files[0];
      const slug = window.location.pathname.split("/")[2]; // Get the third part of the URL path as the slug
      console.log(imageFile, slug);
      dispatch(tryon({ imageFile, slug }));
    } catch (error) {
      console.error("Error uploading image:", error);
      // Handle error (e.g., show error message to user)
    }
  };
  useEffect(() => {
    if (tryonImages && tryonImages.length > 0) {
      // Redirect to the first uploaded image URL
      window.location.href = tryonImages[0];
    }
  }, [tryonImages]);

  return (
    <div
      style={{
        width: "100vw", // Full width of the viewport
        height: "100vh", // Full height of the viewport
        margin: 0, // Remove any default margin
        padding: 0, // Remove any default padding
        display: "flex",
        justifyContent: "center", // Center horizontally
        alignItems: "center", // Center vertically
        position: "relative", // Make the div a positioned container
        zIndex: 1, // Ensure the content is above the video
      }}
    >
      {/* Background video container */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1, // Set the video container behind the content
          overflow: "hidden", // Hide overflowing parts of the video
        }}
      >
        <video
          autoPlay
          loop
          muted
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        >
          <source
            src="https://assets.website-files.com/648aca18f05d659650f20acc/64ae84a2fd7e81e18cc7150f_pexels%20shvets%20production%207547007%202160p-transcode.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div
        style={{
          width: "800px",
          textAlign: "left",
          fontFamily: "Arial, sans-serif",
          margin: "150px auto ",
          zIndex: 1, // Ensure content is above the video
        }}
      >
        <h1 style={{ fontSize: "48px", color: "#F5f5DC", marginTop: 0 }}>
          THE FUTURE
        </h1>
        <h2 style={{ fontSize: "36px", color: "#F5f5DC", marginTop: 0 }}>
          AR You Ready?
        </h2>
        <p style={{ fontSize: "24px", color: "#F5f5DC", marginTop: 0 }}>
          Embark on an unparalleled journey with Virtual Reality solutions.
        </p>
        <p style={{ fontSize: "24px", color: "#F5f5DC", marginTop: 0 }}>
          We are ready to show you
        </p>
        <br />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          style={{ display: "none" }}
          id="upload-image-input"
        />
        <label
          htmlFor="upload-image-input"
          className="w-commerce-commerceaddtocartbutton fill-btn"
          style={{
            display: "inline-block",
            backgroundColor: "transparent",
            borderColor: "white",
            cursor: "pointer",
          }}
        >
          Upload
        </label>
      </div>
    </div>
  );
};

export default Tryon;
