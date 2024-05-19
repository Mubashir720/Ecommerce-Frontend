import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk for posting a review
export const postReview = createAsyncThunk(
  "review/postReview",
  async ({ productId, comment }) => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const token = user.token;

      const response = await axios.post(
        `http://localhost:5000/api/user/review`,
        { productId, comment },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data; // Assuming response.data contains the updated review or confirmation
    } catch (error) {
      throw new Error(error.response.data.message || "Failed to post review.");
    }
  }
);

// Async thunk for getting comments of a product

export const getComments = createAsyncThunk(
  "review/getComments",
  async (slug, thunkAPI) => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const token = user.token;

      const response = await axios.get(
        `http://localhost:5000/api/productSlug/comment/${slug}`, // Adjust the endpoint URL to accept slug
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data; // Assuming response.data contains an array of comments
    } catch (error) {
      throw new Error(error.response.data.message || "Failed to get comments.");
    }
  }
);

const reviewSlice = createSlice({
  name: "review",
  initialState: {
    isLoading: false,
    isError: false,
    errorMessage: "",
    comments: [],
    // Initial state for comments
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postReview.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(postReview.fulfilled, (state, action) => {
        state.isLoading = false;
        // Handle the response data if needed
      })
      .addCase(postReview.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        alert("You have already posted a review.");
        state.errorMessage = action.error.message || "Failed to post review.";
      })
      .addCase(getComments.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(getComments.fulfilled, (state, action) => {
        state.isLoading = false;
        state.comments = action.payload;
        console.log(action.payload); // Update comments in state
      })
      .addCase(getComments.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.error.message || "Failed to get comments.";
      });
  },
});

export default reviewSlice.reducer;
