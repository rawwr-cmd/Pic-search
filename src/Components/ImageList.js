import React from "react";

const ImageList = (props) => {
  // console.log(props.images);
  const images = props.images.map(({ urls, id, description }) => {
    //we assign the key to the root element
    return <img key={id} src={urls.regular} alt={description} />;
  });

  return <div>{images}</div>;
};

export default ImageList;
