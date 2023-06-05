import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../config";

import { useStateContext } from "../../context/ContextProvider";

const Admin = ({ isAuthenticated }) => {
  console.log("isAuthenticated", isAuthenticated);
  const { setLoading } = useStateContext();
  const history = useHistory();
  const [loading, setLoadingState] = useState(true);

  const [events, setEvents] = useState([]);
  const [news, setNews] = useState([]);
  const [projects, setProjects] = useState([]);

  const getEvents = async () => {
    try {
      const response = await axios.get(`${API_URL}/event/`);
      //only status is true data will be shown
      const numberOfEvents = response.data.length;
      setEvents(numberOfEvents); //only status is true data will be shown
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getNews = async () => {
    try {
      const response = await axios.get(`${API_URL}/news/`);
      //only status is true data will be shown
      const numberOfNews = response.data.length;
      setNews(numberOfNews); //only status is true data will be shown
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getProjects = async () => {
    try {
      const response = await axios.get(`${API_URL}/projectmakandura/`);
      //only status is true data will be shown
      const numberOfProjects = response.data.length;
      setProjects(numberOfProjects); //only status is true data will be shown
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(history);
    if (typeof isAuthenticated === "undefined") {
      console.log("undefined");
      // Authentication status not yet determined, do nothing
    } else if (!isAuthenticated) {
      // User is not authenticated, redirect to login page
      history.push("/login");
    } else {
      // User is authenticated, do something that takes time
      getEvents();
      getNews();
      getProjects();
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [history, isAuthenticated]);

  // if (loading) {
  //   // Show loading indicator
  //   return <div>Loading...</div>;
  // } else if (!isAuthenticated) {
  //   // Authentication failed, should have been redirected to login page
  //   return null;
  // } else {
  // Show the content if the user is authenticated
  return (
    <>
      <div className="container">
        <div className="top-0 left-0 width=100% z-1">
          <h1 className="mt-10 text-center text-3xl">Admin Page</h1>
        </div>

        <div className="row mt-5">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Event Count</h5>
                <p className="card-text">{events}</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">News Count</h5>
                <p className="card-text">{news}</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Project Makandura Count</h5>
                <p className="card-text">{projects}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  // }
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Admin);
