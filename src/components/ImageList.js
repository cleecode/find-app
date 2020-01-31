import React from "react";
import "../assets/App.css";
import ImageCard from "./ImageCard";

const ImageList = props => {
  const images = props.images.map(image => {
    return <ImageCard img key={image.id} image={image} />;
  });

  return <div className="image-list">{images}</div>;
};

export default ImageList;
