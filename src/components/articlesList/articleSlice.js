import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://ps-dev-1-partnergateway.patientsky.dev/assignment";

// Thunks for fetching data
export const fetchArticles = createAsyncThunk(
  "articles/fetchArticles",
  async () => {
    const response = await axios.get(`${BASE_URL}/articles`);
    return response.data;
  }
);

export const fetchArticleById = createAsyncThunk(
  "articles/fetchArticleById",
  async (id) => {
    const response = await axios.get(`${BASE_URL}/articles/${id}`);
    return response.data;
  }
);

// Slice configuration
const articlesSlice = createSlice({
  name: "articles",
  initialState: {
    articles: [],
    article: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.articles = action.payload;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchArticleById.fulfilled, (state, action) => {
        state.article = action.payload;
      });
  },
});

export default articlesSlice.reducer;
