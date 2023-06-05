import React, { useState } from "react";
import SingleNews from "../../../components/news.component/SingleNews";
import { useParams } from "react-router-dom";


const News = () => {
  const { id } = useParams();
  return (
    <div>
      <SingleNews id={id} />
    </div>
  );
};

export default News;
