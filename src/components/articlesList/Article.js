import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchArticles } from "./articleSlice";
import { Link } from "react-router-dom";

const Article = () => {
  const dispatch = useDispatch();
  const { articles, status, error } = useSelector((state) => state.articles);
  console.log("articles", articles);
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchArticles());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return <p>Loading articles...</p>;
  }

  if (status === "failed") {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1 className="p-2, m-2">Articles</h1>
      <div class="row p-0 m-0">
        {articles.map((article, index) => (
          <div class="col-4 align-self-stretch p-2 g-2" key={article.id}>
            <div class="card h-100">
              <h5 class="card-header">ID : {index + 1}</h5>
              <div class="card-body">
                <h4>Title </h4>
                <h5 class="card-title"> {article.title}</h5>
                <br />
                <h6>Summary</h6>
                <p class="card-text">{article.summary} </p>
                <Link to={`/articles/${article.id}`} class="btn btn-primary">
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Article;
