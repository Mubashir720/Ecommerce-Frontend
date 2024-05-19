import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk for sentiment analysis
export const analyzeSentiment = createAsyncThunk(
  "sentiment/analyzeSentiment",
  async (slug) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/api/product/sentiment/${slug}`
      );
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);

const sentimentSlice = createSlice({
  name: "sentiment",
  initialState: {
    isLoading: false,
    isError: false,
    errorMessage: "",
    sentimentDataArray: [], // Array to store sentiment analysis data
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(analyzeSentiment.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(analyzeSentiment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.sentimentDataArray = action.payload; // Push the new data to the array
      })
      .addCase(analyzeSentiment.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload || "Failed to analyze sentiment.";
      });
  },
});

export default sentimentSlice.reducer;
