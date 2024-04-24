import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk for user login
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (formData) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/login",
        formData
      );
      return response.data;
    } catch (error) {
      throw new Error("Failed to log in.");
    }
  }
);

// Async thunk for user signup
export const signUpUser = createAsyncThunk(
  "auth/signUpUser",
  async (formData) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/register",
        formData
      );
      return response.data;
    } catch (error) {
      throw new Error("Failed to sign up.");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(localStorage.getItem("user")) || null,
    isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn")) || false,
    isLoading: false,
    isError: false,
    errorMessage: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Login reducers...
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.user = action.payload;
        localStorage.setItem("user", JSON.stringify(action.payload)); // Store user data in local storage
        localStorage.setItem("isLoggedIn", true); // Update isLoggedIn in local storage
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.user = null;
        localStorage.removeItem("user"); // Remove user data from local storage
        localStorage.setItem("isLoggedIn", false); // Update isLoggedIn in local storage
      })
      // Signup reducers...
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.user = action.payload;
        localStorage.setItem("user", JSON.stringify(action.payload)); // Store user data in local storage
        localStorage.setItem("isLoggedIn", true); // Update isLoggedIn in local storage
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.error.message;
        state.user = null;
        localStorage.removeItem("user"); // Remove user data from local storage
        localStorage.setItem("isLoggedIn", false); // Update isLoggedIn in local storage
      });
    // Logout reducers...
  },
});

export default authSlice.reducer;
