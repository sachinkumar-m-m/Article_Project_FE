import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchArticleById } from "../articlesList/articleSlice";
import { useParams } from "react-router-dom";

const ArticleDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { article } = useSelector((state) => state.articles);

  useEffect(() => {
    dispatch(fetchArticleById(id));
  }, [dispatch, id]);

  if (!article) {
    return <p>Loading article...</p>;
  }

  return (
    <div className="row justify-content-center mt-5">
      <div className="col-md-10 col-sm-6 border p-3">
        <h1>Article Id : {article.id}</h1>
        <h2>Article Title : {article.title}</h2>
        <h6>Article Summary : {article.summary}</h6>
        <p className="text-info-emphasis">
          Article FullText : {article.fullText}
        </p>
      </div>
    </div>
  );
};

export default ArticleDetails;
