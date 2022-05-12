import "../Styles/ImageList.css";
import ImageCard from "./ImageCard";
import React from "react";

const ImageList = (props) => {
  // console.log(props.images);
  const images = props.images.map((image) => {
    //we assign the key to the root element
    return <ImageCard key={image.id} image={image} />;
  });

  return <div className="image-list">{images}</div>;
};

export default ImageList;
