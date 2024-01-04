import React from "react";
import "./location.css";
import { Link } from "react-router-dom";

function Location({ id, title, pictures }) {
  return (
    <div>
      <div className="container">
        <Link to={`/logement/${id}`}>
          <article className="location">
            <img className="img" src={pictures} alt={title}></img>
            <h3 className="title">{title}</h3>
            <div className="dark"></div>
          </article>
        </Link>
      </div>
    </div>
  );
}
export default Location;
