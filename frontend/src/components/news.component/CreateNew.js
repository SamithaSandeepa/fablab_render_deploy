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
  const [validated, setValidated] = useState(false);

  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );
  const [image, setImage] = useState(null);
  const [status, setStatus] = useState(true);
  const [videos, setVideos] = useState([{ url: null }]);

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

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const addNews = (e) => {
    // the raw state, stringified
    const content = JSON.stringify(
      convertToRaw(editorState.getCurrentContent())
    );
    // convert the raw state back to a useable ContentState object
    // const content = convertFromRaw(JSON.parse(rawDraftContentState));
    console.log(content);
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.preventDefault();

      setValidated(true);
      e.stopPropagation();
    } else {
      e.preventDefault();

      const csrftoken = getCookie("csrftoken");
      axios.defaults.headers.common["X-CSRFToken"] = csrftoken;

      const newNews = new FormData();
      newNews.append("title", title);
      newNews.append("summary", summary);
      newNews.append("content", content);
      newNews.append("image", image);
      newNews.append("status", status);
      videos.forEach((video, index) => {
        newNews.append(`videos[${index}]`, video.url);
      });
      setLoading(true);
      //  {
      //   videos: videos.map((video) => video.url),
      //   title,
      //   summary,
      //   content,
      //   image,
      //   status,
      // };

      axios
        .post(`${API_URL}/news/create/`, newNews, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access")}`,
            "Content-Type": "multipart/form-data",
          },
        })
        .then(() => {
          alert("New News Added");
          setTitle("");
          setSummary("");
          setEditorState(EditorState.createEmpty()); // Set the editor state to empty
          setImage(null); // Reset the image field to null
          setVideos([{ url: "" }]);
          setStatus(true);
          setValidated(false);
        })
        .catch((err) => {
          alert(err);
        });
      setLoading(false);
    }
  };

  const clearForm = () => {
    setVideos([{ url: "" }]);
    setTitle("");
    setSummary("");
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
          <h2 className="text-3xl font-bold mb-8 text-center">Add New News</h2>
          <form noValidate validated={validated} onSubmit={addNews}>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="newsTitle"
              >
                News Title
              </label>
              <input
                type="text"
                required
                minLength="2"
                value={title}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter News Title"
                id="newsTitle"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="summary"
              >
                Summary
              </label>
              <input
                type="text"
                required
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Summarize your news"
                id="summary"
                value={summary}
                onChange={(e) => {
                  setSummary(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-wrap mb-4">
              <div className="w-full md:w-2/3 mb-4 md:mb-0 pr-0 md:pr-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="image"
                >
                  Image
                </label>
                <input
                  type="file"
                  required
                  className="appearance-none border rounded w-full  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter Image Url"
                  id="image"
                  onChange={(e) => {
                    setImage(e.target.files[0]);
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
            <div className="row">{renderVideos()}</div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="newsContent"
              >
                News Content
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
