import React from "react";
import "./picture.css";
import { useLocation } from "react-router-dom";

function PictureHeader({ image, altText }) {
  const location = useLocation();
  return (
    <div className="picture">
      <img className="pictureImg" src={image} alt={altText} />
      <div className="darkOverlay"></div>
      {location.pathname === "/" && <p className="pictureText">{altText}</p>}
    </div>
  );
}

export default PictureHeader;
