import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk for creating an order
export const createOrder = createAsyncThunk(
  "order/createOrder",
  async (formData) => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const token = user.token;

      const response = await axios.post(
        "http://localhost:5000/api/user/cart/cash-order",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      throw new Error("Failed to create order.");
    }
  }
);

// Async thunk for fetching user's orders
export const fetchUserOrders = createAsyncThunk(
  "order/fetchUserOrders",
  async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/order/get");
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch user orders.");
    }
  }
);

// Async thunk for fetching all orders
export const fetchAllOrders = createAsyncThunk(
  "order/fetchAllOrders",
  async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/order/getAll"
      );
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch all orders.");
    }
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState: {
    order: [],
    allOrders: [],
    isLoading: false,
    isError: false,
    errorMessage: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Create order reducers...
      .addCase(createOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.order = action.payload;
        window.alert(
          "Your order is placed. You will receive a confirmation call soon."
        );
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.error.message;
      })
      // Fetch user orders reducers...
      .addCase(fetchUserOrders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUserOrders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.order = action.payload;
      })
      .addCase(fetchUserOrders.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.error.message;
      })
      // Fetch all orders reducers...
      .addCase(fetchAllOrders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllOrders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allOrders = action.payload;
      })
      .addCase(fetchAllOrders.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.error.message;
      });
  },
});

export default orderSlice.reducer;
