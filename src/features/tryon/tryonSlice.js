import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
// Async thunk for posting a review
export const tryon = createAsyncThunk(
  "tryon/posttryon",
  async ({ imageFile, slug }) => {
    try {
      const formData = new FormData();
      formData.append("file", imageFile);

      const response = await axios.post(
        `http://localhost:5000/api/product/${slug}/try-on`, // Include slug in the URL
        formData, // Send formData containing the image
        {
          headers: {
            "Content-Type": "multipart/form-data", // Set content type for FormData
          },
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(
        error.response.data.message || "Failed to post tryon data."
      );
    }
  }
);

const tryonSlice = createSlice({
  name: "tryon",
  initialState: {
    isLoading: false,
    isError: false,
    errorMessage: "",
    images: [], // Array to store uploaded images
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(tryon.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        toast.loading("Loading...");
      })
      .addCase(tryon.fulfilled, (state, action) => {
        state.isLoading = false;
        state.images = action.payload; // Assuming the payload contains the uploaded image URL
      })
      .addCase(tryon.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        if (action.error.message === "Failed to post tryon data.") {
          toast.error("Server is crashed due to Internet Conection Failure"); // Display server overload error toast notification
        } else {
          toast.error(action.error.message); // Display other error messages
        }
      });
  },
});

export default tryonSlice.reducer;
