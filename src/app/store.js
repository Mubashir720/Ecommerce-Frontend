import { configureStore } from "@reduxjs/toolkit";
import userCartReducer from "../features/usercart/userCartSlice"; // Import the userCart reducer
import productReducer from "../features/product/productSlice";
import authReducer from "../features/auth/authSlice";
import orderReducer from "../features/order/orderSlice";
import searchReducer from "../features/search/searchSlice";
import reviewReducer from "../features/review/reviewSlice";
import tryonReducer from "../features/tryon/tryonSlice";
import sentimentReducer from "../features/sentiment/sentimentSlice";
import recommendReducer from "../features/recommend/recommendSlice";
import chatbotReducer from "../features/chatbot/chatbotSlice"; // Import the auth reducer
const store = configureStore({
  reducer: {
    product: productReducer,
    userCart: userCartReducer,
    auth: authReducer,
    order: orderReducer,
    search: searchReducer,
    review: reviewReducer,
    tryon: tryonReducer,
    sentiment: sentimentReducer,
    recommend: recommendReducer,
    chatbot: chatbotReducer,
    // Add the userCart reducer to the store
  },
});

export default store;
