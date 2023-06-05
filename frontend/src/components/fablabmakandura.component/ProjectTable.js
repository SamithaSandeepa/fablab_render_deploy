import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useStateContext } from "../../context/ContextProvider";
import { useHistory } from "react-router-dom";

// import { data } from "../data";
import { API_URL } from "../../config/index";

const ProjectTable = ({ isAuthenticated }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { setLoading } = useStateContext();
  const [project, setProject] = useState([]);
  const history = useHistory();

  const filteredProject = project.filter((item) =>
    item.title_project_m.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [history, isAuthenticated]);

  const csrftoken = getCookie("csrftoken");
  axios.defaults.headers.common["X-CSRFToken"] = csrftoken;

  const getProject = async () => {
    try {
      // console.log("access", token);
      const response = await axios.get(`${API_URL}/projectmakandura/`);
      //only status is true data will be shown
      setProject(response.data); //only status is true data will be shown
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProject();
  }, []);

  // using isCheck function and update the status in database
  const onChange = (id, status) => {
    const csrftoken = getCookie("csrftoken");
    axios.defaults.headers.common["X-CSRFToken"] = csrftoken;
    axios
      .patch(
        `${API_URL}/projectmakandura/${id}/update/`,
        { status: status },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access")}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        alert("Status updated successfully");
        window.location.reload(); // optional - refreshes the page after the update
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelete = async (id) => {
    console.log(id)
    const csrftoken = getCookie("csrftoken");
    try {
      const response = await axios.delete(`${API_URL}/projectmakandura/${id}/delete/`, {
        headers: {
          "X-CSRFToken": csrftoken,
          Authorization: `Bearer ${localStorage.getItem("access")}`,
          "Content-Type": "application/json",
        },
      });
      console.log(response.data);
      getProject();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto py-10">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-2xl mb-4">Project</h1>
        <div className="relative w-full mb-4">
          <input
            type="search"
            className="w-full rounded border-gray-300 shadow-sm pl-10 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            placeholder="Search news by title"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              className="h-5 w-5 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M9.444 0C4.229 0 0 4.229 0 9.444c0 5.214 4.229 9.444 9.444 9.444 5.214 0 9.444-4.23 9.444-9.444C18.889 4.229 14.659 0 9.444 0zm4.516 14.614a.63.63 0 01-.903 0l-2.028-2.028a5.327 5.327 0 01-3.364 1.226c-2.932 0-5.308-2.375-5.308-5.308S2.932 2.67 5.864 2.67s5.308 2.375 5.308 5.308a5.294 5.294 0 01-1.226 3.364l2.028 2.028a.637.637 0 010 .903zM5.864 3.934c-1.96 0-3.558 1.597-3.558 3.558s1.597 3.558 3.558 3.558 3.558-1.597 3.558-3.558-1.597-3.558-3.558-3.558z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">#</th>
                <th className="py-3 px-6 text-left">Image</th>
                <th className="py-3 px-6 text-left">Project Title</th>
                <th className="py-3 px-6 text-left">Summary</th>
                <th className="py-3 px-6 text-left">Status</th>
                <th className="py-3 px-6 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {filteredProject.map((curElem) => {
                console.log(curElem.status);

                return (
                  <tr key={curElem.id}>
                    <td className="py-3 px-6">{curElem.id}</td>
                    <td className="py-3 px-6">
                      <img
                        src={curElem.image_project_m}
                        alt={curElem.title_project_m}
                        className="w-16 h-16 rounded-full border-2 border-gray-300"
                      />
                    </td>
                    <td className="py-3 px-6">{curElem.title_project_m}</td>
                    <td className="py-3 px-6">{curElem.summery_project_m}</td>
                    <td className="py-3 px-6">
                      <div className="flex items-center">
                        {/* <span
                          className={`bg-${
                            curElem.status ? "green" : "red"
                          }-200 text-${
                            curElem.status ? "green" : "red"
                          }-800 py-1 px-3 rounded-full text-xs mr-2`}
                        >
                          {curElem.status.toString()}
                        </span> */}
                        <button
                          className={`bg-${
                            curElem.status ? "red" : "green"
                          }-500 bg-${
                            curElem.status ? "red" : "green"
                          }-700 text-black font-bold py-2 px-4 rounded-full text-sm`}
                          onClick={() => onChange(curElem.id, !curElem.status)}
                        >
                          {curElem.status ? "False" : "True"}
                        </button>
                      </div>
                    </td>

                    <td className="py-3 px-6 text-center">
                      <div className="flex item-center justify-center">
                        <Link
                          to={`/edit-project/${curElem.id}`}
                          className="text-gray-400 hover:text-gray-600 mx-2"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0zM19 21a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h5M14 2h6a2 2 0 012 2v6M3 14v6a2 2 0 002 2h6"
                            />
                          </svg>
                        </Link>
                        <button
                          onClick={() => handleDelete(curElem.id)}
                          className="text-gray-400 hover:text-gray-600 mx-2"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

function getCookie(name) {
  const cookieValue = document.cookie.match(
    "(^|[^;]+)\\s*" + name + "\\s*=\\s*([^;]+)"
  );
  return cookieValue ? cookieValue.pop() : "";
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(ProjectTable);
