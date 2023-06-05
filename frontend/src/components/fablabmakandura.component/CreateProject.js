import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../config/index";
import { useStateContext } from "../../context/ContextProvider";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import ReactPlayer from "react-player";

const CreatNews = ({ isAuthenticated }) => {
  const { setLoading } = useStateContext();
  const history = useHistory();
  const [loading, setLoadingState] = useState(true);
  const [validated, setValidated] = useState(false);

  const [title_project_m, setTitle] = useState("");
  const [summery_project_m, setSummery] = useState("");
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );
  const [image_project_m, setImage] = useState("");
  const [status, setStatus] = useState(true);
  const [videos, setVideos] = useState([{ url: "" }]);

  useEffect(() => {
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

  useEffect(() => {
    renderVideos();
  }, [videos]);


  const addProject = (e) => {
    // the raw state, stringified
    const content_project_m = JSON.stringify(
      convertToRaw(editorState.getCurrentContent())
    );
    // convert the raw state back to a useable ContentState object
    // const content = convertFromRaw(JSON.parse(rawDraftContentState));
    console.log(content_project_m);
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.preventDefault();

      setValidated(true);
      e.stopPropagation();
    } else {
      e.preventDefault();

      const csrftoken = getCookie("csrftoken");
      axios.defaults.headers.common["X-CSRFToken"] = csrftoken;

      const newProject = {
        videos: videos.map((video) => video.url),
        title_project_m,
        summery_project_m,
        content_project_m,
        image_project_m,
        status,
      };

      console.log(newProject);

      axios
        .post(`${API_URL}/projectmakandura/create/`, newProject, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access")}`,
            "Content-Type": "application/json",
          },
        })
        .then(() => {
          alert("New Project Added");
          setTitle("");
          setSummery("");
          setEditorState("");
          setImage("");
          setStatus(true);
          setValidated(false);
        })
        .catch((err) => {
          alert(err);
        });
    }
  };

  const clearForm = () => {
    setVideos([{ url: "" }]);
    setTitle("");
    setSummery("");
    setEditorState("");
    setImage("");
    setStatus(true);
    setValidated(false);
  };

  const renderVideos = () => {
    if (videos && videos.length > 0) {
      return (
        <div className="d-flex justify-content-center">
          <div className="row">
            {videos.map((video, index) => (
              <div key={index} className="col-4">
                <div className="player-wrapper mb-4">
                  <ReactPlayer
                    url={video.url}
                    className="react-player pl-5 pt-5"
                    width="100%"
                    height="100%"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
    return null;
  };



  return (
    <>
      <div className="container">
        <div className="mx-auto max-w-3xl my-5">
          <h2 className="text-3xl font-bold mb-8 text-center">Add Project</h2>
          <form noValidate validated={validated} onSubmit={addProject}>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="newsTitle"
              >
                Event Project
              </label>
              <input
                type="text"
                required
                minLength="2"
                value={title_project_m}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter Event Title"
                id="newsTitle"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="summery"
              >
                Summary of Project
              </label>
              <input
                type="text"
                required
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Summarize your Event"
                id="summery"
                value={summery_project_m}
                onChange={(e) => {
                  setSummery(e.target.value);
                }}
              />
            </div>
            <div className="mb-4 flex flex-col md:flex-row">
              <div className="w-full md:w-3/4 md:mr-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="image"
                >
                  Image URL
                </label>
                <input
                  type="text"
                  required
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter Image Url"
                  id="image"
                  value={image_project_m}
                  onChange={(e) => {
                    setImage(e.target.value);
                  }}
                />
              </div>
              <div className="w-full md:w-1/3 md:mt-0">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="status"
                >
                  Status
                </label>
                <select
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={status}
                  onChange={(e) => {
                    setStatus(e.target.value);
                  }}
                >
                  <option disabled hidden>
                    Select your option
                  </option>
                  <option value={true}>Active</option>
                  <option value={false}>Inactive</option>
                </select>
              </div>
            </div>
            {videos.map(
              (video, index) => (
                console.log(video, "videos"),
                (
                  <div className="mb-4" key={index}>
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor={`video-${index}`}
                    >
                      Video {index + 1}
                    </label>
                    <input
                      type="text"
                      required
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Enter Video Url"
                      id={`video-${index}`}
                      value={video.url}
                      onChange={(e) => {
                        const newVideos = [...videos];
                        newVideos[index].url = e.target.value;
                        setVideos(newVideos);
                      }}
                    />
                    {index === videos.length - 1 && (
                      <button
                        className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={(e) => {
                          e.preventDefault();
                          setVideos([...videos, { url: "" }]);
                        }}
                      >
                        Add another video
                      </button>
                    )}
                    {index !== 0 && (
                      <button
                        className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => {
                          const newVideos = [...videos];
                          newVideos.splice(index, 1);
                          setVideos(newVideos);
                        }}
                      >
                        Remove
                      </button>
                    )}
                  </div>
                )
              )
            )}
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="eventContent"
              >
                Add Project Content
              </label>
              <div className="border rounded-md p-2">
                <Editor
                  editorState={editorState}
                  onEditorStateChange={setEditorState}
                  toolbar={{
                    inline: { inDropdown: true },
                    list: { inDropdown: true },
                    textAlign: { inDropdown: true },
                    link: { inDropdown: true },
                    history: { inDropdown: true },
                    image: {
                      previewImage: true,
                      alt: { present: true, mandatory: false },
                    },
                  }}
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={clearForm}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
  // }
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

export default connect(mapStateToProps)(CreatNews);
