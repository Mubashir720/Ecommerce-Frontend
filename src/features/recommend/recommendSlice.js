import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk for fetching recommendations
export const recommend = createAsyncThunk(
  "recommend/getRecommend",
  async (slug) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/api/product/recommend/${slug}`
      );
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);

const recommendSlice = createSlice({
  name: "recommend",
  initialState: {
    isLoading: false,
    isError: false,
    errorMessage: "",
    recommend: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(recommend.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(recommend.fulfilled, (state, action) => {
        state.isLoading = false;
        state.recommend = action.payload; // Update recommendations with fetched data
      })
      .addCase(recommend.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage =
          action.payload || "Failed to fetch recommendations.";
      });
  },
});

export default recommendSlice.reducer;
