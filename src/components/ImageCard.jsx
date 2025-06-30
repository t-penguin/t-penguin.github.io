import React from "react";
import "./ImageCardStyles.css";

const ImageCard = ({ src, alt, header, text }) => {
  

  return (
    <div className="image-card hover-scale">
      <div className="image-card-image">
        <img src={src} alt={alt} />
      </div>
      <div className="image-card-text">
        <h2>{header}</h2>
        {text}
      </div>
    </div>
  );
};

export default ImageCard;