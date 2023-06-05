import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { API_URL } from "../../config/index";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { convertFromRaw, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import ReactPlayer from "react-player";


const EditNews = ({ isAuthenticated, id }) => {
  const [validated, setValidated] = useState(false);
  const [title, setTitle] = useState("");
  const [summery, setSummery] = useState("");
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [image, setImage] = useState("");
  const [status, setStatus] = useState("");
  const [videos, setVideos] = useState([{ url: "" }]);

  useEffect(() => {
    axios
      .get(`${API_URL}/news/${id}/`)
      .then((response) => {
        console.log(response);
        // set state with news data
        setTitle(response.data.title);
        setSummery(response.data.summery);
        // setEditorState(response.data.content);
        const contentState = convertFromRaw(JSON.parse(response.data.content));
        setEditorState(EditorState.createWithContent(contentState));
        setImage(response.data.image);
        setStatus(response.data.status);

        setVideos(response.data.videos.map((video) => ({ url: video })));
        //...
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  useEffect(() => {
    renderVideos();
  }, [videos]);

  // updateupdateNews news data to the database
  const updateNews = (e) => {
    // the raw state, stringified
    const content = JSON.stringify(
      convertToRaw(editorState.getCurrentContent())
    );
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      const news = {
        videos: videos.map((video) => video.url),
        title: title,
        summery: summery,
        content: content,
        image: image,
        status: status,
      };
      const csrftoken = getCookie("csrftoken");
      axios.defaults.headers.common["X-CSRFToken"] = csrftoken;
      axios
        .put(`${API_URL}/news/${id}/update/`, news, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access")}`,
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log(res);
          window.location.href = "/show-all-news";
        })
        .catch((err) => {
          console.log(err);
        });
    }
    setValidated(true);
  };

  const renderVideos = () => {
    if (videos && videos.length > 0) {
      return (
        <div className="d-flex justify-content-center">
          <div className="row">
            {videos.map((video, index) => (
              <div key={index} className="col-6">
                <div className="player-wrapper">
                  <ReactPlayer
                    url={video.url}
                    className="react-player pl-10 pt-10"
                    width="100%"
                    height="200px"
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
        <div className="col-md-8 mt-4 mx-auto">
          <h2 className="h3 mb-3 font-weight-normal text-center">Edit News</h2>
          <form noValidate validated={validated} onSubmit={updateNews}>
            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label className="form-label" style={{ marginBottom: "5px" }}>
                News Title
              </label>
              <input
                type="text"
                required
                minLength="2"
                value={title}
                className="form-control"
                placeholder="Enter News Title"
                id="newsTitle"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label className="form-label" style={{ marginBottom: "5px" }}>
                {" "}
                Summery{" "}
              </label>
              <input
                type="text"
                required
                className="form-control"
                placeholder="Summarize your news"
                id="summery"
                value={summery}
                onChange={(e) => {
                  setSummery(e.target.value);
                }}
              />
            </div>
            <div className="row">
              <div
                className="form-group col-md-8"
                style={{ marginBottom: "15px" }}
              >
                <label className="form-label" style={{ marginBottom: "5px" }}>
                  {" "}
                  Image{" "}
                </label>
                <input
                  type="text"
                  required
                  className="form-control"
                  placeholder="Enter Image Url"
                  id="image"
                  value={image}
                  onChange={(e) => {
                    setImage(e.target.value);
                  }}
                />
              </div>
              <div
                className="form-group col-md-4 text-center m-auto"
                style={{ marginBottom: "15px" }}
              >
                <select
                  className=" btn btn-secondary btn-sm dropdown-toggle rounded-3 bg-color-white"
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
            <div className="row">{renderVideos()}</div>
            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label className="form-label" style={{ marginBottom: "5px" }}>
                {" "}
                Add News Content{" "}
              </label>
              <div className="editor">
                <Editor
                  editorState={editorState}
                  onEditorStateChange={setEditorState}
                  toolbar={{
                    inline: { inDropdown: true },
                    list: { inDropdown: true },
                    textAlign: { inDropdown: true },
                    link: { inDropdown: true },
                    history: { inDropdown: true },
                  }}
                />
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-success float-right"
              style={{ marginTop: "15px", marginBottom: "15px" }}
            >
              <i className="far fa-check-square"></i>
              &nbsp; Save
            </button>
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

export default connect(mapStateToProps)(EditNews);
