import React from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://cdn.britannica.com/50/180050-138-521974A7/tree-limits-height-width-growth-ring-discussion.jpg?w=800&h=450&c=crop"
          alt=""
        />
        <div className="user">
          <img
            src="https://cdn.britannica.com/50/180050-138-521974A7/tree-limits-height-width-growth-ring-discussion.jpg?w=800&h=450&c=crop"
            alt=""
          />
        
        <div className="info">
          <span>Gilad</span>
          <p>Posted 2 days ago</p>
        </div>
        <div className="edit">
          <Link to={`/write?edit=2`}>
            <img src={Edit} alt="" />
          </Link>
          <img src={Delete} alt="" />
        </div>
        </div>
        <h1>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sint sequi eos voluptatem, iure aliquam reprehenderit, repudiandae vero eligendi exercitationem, quisquam doloribus blanditiis esse placeat amet et incidunt vitae quis.</p>
      </div>
      <div className="menu">
        <Menu/>
      </div>
    </div>
  );
};

export default Single;
