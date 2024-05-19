import React from "react";
import { FaLocationArrow } from "react-icons/fa";
const Review = () => {
  return (
    <div>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n      body {\n        font-family: Arial, sans-serif;\n        font-size: 14px;\n        line-height: 1.5;\n        margin: 0;\n        padding: 0;\n      }\n\n      .container {\n        max-width: 600px;\n        margin: 0 auto;\n        padding: 20px;\n        border: 1px solid #ddd;\n        border-radius: 5px;\n        background-color: #f5f5f5;\n      }\n\n      .comment {\n        margin-bottom: 20px;\n        border: 1px solid black; /* Add a small black border around comments */\n        padding: 10px;\n        border-radius: 5px;\n      }\n\n      .comment:first-child {\n        border-color: green; /* Green border for the first comment */\n      }\n\n      .comment h3 {\n        display: inline-block; /* Display post icon inline with the name */\n        margin-right: 10px; /* Add space between name and post icon */\n      }\n\n      .time {\n        font-size: 12px;\n        color: #777;\n      }\n  ",
        }}
      />
      <title />
      <div className="container">
        <h2 style={{ fontWeight: "bold" }}>Comments</h2> {/* Bold "Comments" */}
        <div
          className="comment"
          style={{
            display: "flex",
            alignItems: "flex-start", // Align items to the top
            position: "relative", // Enable positioning
            paddingRight: "30px", // Add right padding for spacing
          }}
        >
          <div>
            <h3>Jane Doe</h3>
            <p>
              I really appreciate the insights and perspective shared in this
              article. It's definitely given me something to think about and has
              helped me see things from a different angle. Thank you for writing
              and sharing!
            </p>
            <p className="time">5 minutes ago</p>
          </div>
          <div
            style={{
              position: "absolute", // Position the arrow icon absolutely
              top: "20px", // Adjust top spacing as needed
              right: "20px", // Adjust right spacing as needed
              fontSize: "24px",
            }}
          >
            <FaLocationArrow />
          </div>
        </div>
        <div className="comment" style={{ border: "1px solid lightblue" }}>
          <h3>John Doe</h3>

          <p>
            I just tried this recipe and it was amazing! The instructions were
            clear and easy to follow, and the end result was delicious. I will
            definitely be making this again. Thanks for sharing!
          </p>
          <p className="time">5 minutes ago</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
