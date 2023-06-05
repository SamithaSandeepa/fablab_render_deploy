import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { API_URL } from "../../config/index";
import { useStateContext } from "../../context/ContextProvider";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import ReactPlayer from "react-player";

const CreateEvent = ({ isAuthenticated }) => {
  const [validated, setValidated] = useState(false);
  const { setLoading } = useStateContext();
  const history = useHistory();
  const [title_pastevent, setTitle] = useState("");
  const [summery_pastevent, setSummery] = useState("");
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

  function addEvents(e) {
    // the raw state, stringified
    const content_pastevent = JSON.stringify(
      convertToRaw(editorState.getCurrentContent())
    );
    console.log(content_pastevent);
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.preventDefault();

      setValidated(true);
      e.stopPropagation();
    } else {
      e.preventDefault();

      const newEvents = {
        videos: videos.map((video) => video.url),
        title_pastevent,
        summery_pastevent,
        content_pastevent,
        image_project_m,
        status,
      };
      console.log(newEvents);
      const csrftoken = getCookie("csrftoken");
      axios.defaults.headers.common["X-CSRFToken"] = csrftoken;
      axios
        .post(`${API_URL}/event/create/`, newEvents, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access")}`,
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log(res.data);
          // history.push("/events");
        })
        .then(() => {
          alert("New Event Added");
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
  }
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
        <div className="flex justify-content-center">
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
          <h2 className="text-3xl font-bold mb-8 text-center">Add Event</h2>
          <form noValidate validated={validated} onSubmit={addEvents}>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="newsTitle"
              >
                Event Title
              </label>
              <input
                type="text"
                required
                minLength="2"
                value={title_pastevent}
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
                Summery
              </label>
              <input
                type="text"
                required
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Summarize your Event"
                id="summery"
                value={summery_pastevent}
                onChange={(e) => {
                  setSummery(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-wrap mb-4">
              <div className="w-full md:w-2/3 mb-4 md:mb-0 pr-0 md:pr-4">
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
              <div className="w-full md:w-1/3 mb-4 md:mb-0 text-center">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="status"
                >
                  Status
                </label>
                <select
                  className="appearance-none bg-white border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
            {videos.map((video, index) => (
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
            ))}
            <div>{renderVideos()}</div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="newsContent"
              >
                Add Event Content
              </label>
              <div className="border rounded">
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

export default connect(mapStateToProps)(CreateEvent);
