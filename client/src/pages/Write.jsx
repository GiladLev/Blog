import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import { useLocation, useNavigate } from "react-router-dom";

const Write = () => {
    const state = useLocation().state;
    const [value, setValue] = useState(state?.title || "");
    const [title, setTitle] = useState(state?.desc || "");
    const [file, setFile] = useState(null);
    const [cat, setCat] = useState(state?.cat || "");
  return (
    <div className="add">
        <div className="content">
            <input type="text" placeholder='Title'/>
            <div className="editorContainer">
            <ReactQuill className="editor" theme="snow" value={value} onChange={setValue} />;
            </div>
        </div>
        <div className="menu">
            <div className="item">
                <h1>Publish</h1>
                <span>
                    <b>Status: </b>Draft
                </span>
                <span>
                    <b>Visbility: </b>Public
                </span>
                <input style={{display: "none"}} type="file" id="file" name=""/>
                <label className="file" htmlFor="file">Upload image</label>
                <div className="buttons">
                    <button>Save as a draft</button>
                    <button>Update</button>
                </div>
            </div>
            <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "art"}
              name="cat"
              value="art"
              id="art"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="art">Art</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "science"}
              name="cat"
              value="science"
              id="science"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="science">Science</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "technology"}
              name="cat"
              value="technology"
              id="technology"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="technology">Technology</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "cinema"}
              name="cat"
              value="cinema"
              id="cinema"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="cinema">Cinema</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "design"}
              name="cat"
              value="design"
              id="design"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="design">Design</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "food"}
              name="cat"
              value="food"
              id="food"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="food">Food</label>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Write