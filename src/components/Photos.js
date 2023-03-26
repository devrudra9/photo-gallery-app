import React from "react";
import "./styles.css";

const Photos = ({ src, alt = "", className = "", onClick = () => {} }) => {
  return (
    <div className={"photo " + className} onClick={onClick}>
      <img className="photos" src={src} alt={alt}></img>
    </div>
  );
};

export default Photos;
