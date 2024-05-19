import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChatBot from "react-simple-chatbot";
import { interactWithChatbot } from "../features/chatbot/chatbotSlice";

function HomePage() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.chatbot.isLoading);
  const isError = useSelector((state) => state.chatbot.isError);
  const errorMessage = useSelector((state) => state.chatbot.errorMessage);

  const handleUserInput = (message) => {
    console.log("User input:", message);
    dispatch(interactWithChatbot(message));
  };

  const steps = [
    {
      id: "0",
      message: "Hey there! How may I help you?",
      trigger: "user-input",
    },
    {
      id: "user-input",
      user: true,
      trigger: ({ value }) => {
        handleUserInput(value);
        return "loading";
      },
    },
    {
      id: "loading",
      message: "Processing...",
      delay: 12000,
      trigger: "output",
    },
    {
      id: "output",
      component: <ChatOutput />,
      asMessage: true,
      trigger: "user-input",
    },
  ];

  return (
    <div className="App" style={{ height: "100vh", width: "100vw" }}>
      <ChatBot steps={steps} style={{ width: "100%", height: "100%" }} />

      {isError && <p>Error: {errorMessage}</p>}
    </div>
  );
}

// Custom component to handle chat output
function ChatOutput() {
  const conversation = useSelector((state) => state.chatbot.output);
  const latestMessage = conversation[conversation.length - 1];

  useEffect(() => {
    const chatBotSteps = document.querySelector(".rsc-content-step");
    if (chatBotSteps) {
      chatBotSteps.scrollIntoView({ behavior: "smooth" });
    }
  }, [latestMessage]);

  return latestMessage ? <p>{latestMessage}</p> : null;
}

export default HomePage;
