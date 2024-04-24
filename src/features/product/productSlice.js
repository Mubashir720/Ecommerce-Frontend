import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk("products/getAll", async () => {
  try {
    const response = await axios.get("http://localhost:5000/api/product/");
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch products.");
  }
});

export const getProductById = createAsyncThunk(
  "products/getById",
  async (productId, thunkAPI) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/product/${productId}`
      );
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch product.");
    }
  }
);

export const getProductBySlug = createAsyncThunk(
  "products/getBySlug",
  async (slug, thunkAPI) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/productSlug/${slug}`
      );
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch product by slug.");
    }
  }
);

const initialState = {
  products: [],
  product: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  errorMessage: "",
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.error.message;
      })
      .addCase(getProductById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.product = action.payload;
      })
      .addCase(getProductById.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.error.message;
      })
      .addCase(getProductBySlug.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductBySlug.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.product = action.payload;
      })
      .addCase(getProductBySlug.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.error.message;
      });
  },
});

export default productSlice.reducer;
