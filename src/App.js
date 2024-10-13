import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Article from "./components/articlesList/Article";
import ArticleDetails from "./components/articleDetails/ArticleDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Article />} />
        <Route path="/articles/:id" element={<ArticleDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
