import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleProjectMakandura from "../../../components/fablabmakandura.component/SingleProjectMakandura";
import { API_URL } from "../../../config/index";
import { useParams } from "react-router-dom";


const Project = () => {
  const { id } = useParams();

  // const [news, setProject] = useState({});
  // console.log(setNews, "news");

  // fetching news data using useEffect and storing in state
  // useEffect(() => {
  //   const getNews = async () => {
  //     console.log(id, "id");
  //     console.log(`${API_URL}/news/${id}/`);
  //     const response = await axios.get(`${API_URL}/news/${id}/`);
  //     console.log(response.data);
  //     setNews(response.data);
  //   };
  //   getNews();
  // }, [id]);

  return (
    <div>
      <SingleProjectMakandura id={id} />
    </div>
  );
};

export default Project;
