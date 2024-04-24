import { configureStore } from "@reduxjs/toolkit";
import userCartReducer from "../features/usercart/userCartSlice"; // Import the userCart reducer
import productReducer from "../features/product/productSlice";
import authReducer from "../features/auth/authSlice";
import orderReducer from "../features/order/orderSlice"; // Import the auth reducer
const store = configureStore({
  reducer: {
    product: productReducer,
    userCart: userCartReducer,
    auth: authReducer,
    order: orderReducer, // Add the userCart reducer to the store
  },
});

export default store;
