import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk for interacting with the chatbot
export const interactWithChatbot = createAsyncThunk(
  "chatbot/interactWithChatbot",
  async (input) => {
    try {
      const response = await axios.post("http://localhost:8502/chat", {
        user_input: input,
      });
      console.log("Response from server:", response.data); // Debug log
      return response.data.response;
    } catch (error) {
      console.error("Error interacting with the chatbot:", error); // Debug log
      throw new Error("Failed to interact with the chatbot.");
    }
  }
);

const chatbotSlice = createSlice({
  name: "chatbot",
  initialState: {
    output: [],
    isLoading: false,
    isError: false,
    errorMessage: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(interactWithChatbot.pending, (state) => {
        console.log("Pending action triggered"); // Debug log
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(interactWithChatbot.fulfilled, (state, action) => {
        console.log("Fulfilled action triggered", action.payload); // Debug log
        state.isLoading = false;
        state.output.push(action.payload);
      })
      .addCase(interactWithChatbot.rejected, (state, action) => {
        console.error("Rejected action triggered", action.error); // Debug log
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.error.message;
      });
  },
});

export default chatbotSlice.reducer;
