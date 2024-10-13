import { configureStore } from "@reduxjs/toolkit";
import articleReducer from "./components/articlesList/articleSlice";

export default configureStore({
  reducer: {
    articles: articleReducer,
  },
});
