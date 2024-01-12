import React from "react";
import "./picture.css";
import { useLocation } from "react-router-dom";

function PictureHeader({ image, altText }) {
  const location = useLocation();
  return (
    <div className="picture">
      <div className="pictureImg">
      <img className="image" src={image} alt={altText} />
      </div>
      <div className="titleContainer">

      {location.pathname === "/" && <p className="pictureText">{altText}</p>}
      </div>
    </div>
  );
}

export default PictureHeader;
