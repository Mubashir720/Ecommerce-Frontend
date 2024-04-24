import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCart = createAsyncThunk("userCart/getCart", async () => {
  try {
    // Retrieve token from localStorage
    const user = JSON.parse(localStorage.getItem("user"));
    const token = user.token;

    const response = await axios.get("http://localhost:5000/api/user/cart", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch user cart.");
  }
});

export const emptyCart = createAsyncThunk("userCart/emptyCart", async () => {
  try {
    // Retrieve token from localStorage
    const user = JSON.parse(localStorage.getItem("user"));
    const token = user.token;

    const response = await axios.delete(
      "http://localhost:5000/api/user/empty-cart",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to empty user cart.");
  }
});

export const addToCart = createAsyncThunk(
  "userCart/addToCart",
  async ({ token, productId, price, color, quantity }) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/cart",
        { productId, price, color, quantity }, // Assuming the product object has an _id field
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      throw new Error("Failed to add product to cart.");
    }
  }
);
const userCartSlice = createSlice({
  name: "userCart",
  initialState: {
    cart: [],
    isLoading: false,
    isError: false,
    errorMessage: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cart = action.payload;
      })
      .addCase(getCart.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.error.message;
      })
      .addCase(emptyCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(emptyCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cart = action.payload;
      })
      .addCase(emptyCart.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.error.message;
      })
      .addCase(addToCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cart = action.payload.product;
        alert("Item has been successfully added to cart!");
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.error.message;
      });
  },
});

export default userCartSlice.reducer;
