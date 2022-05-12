import React from "react";

const ImageList = (props) => {
  // console.log(props.images);
  const images = props.images.map(({ urls }) => {
    return <img src={urls.regular} alt="images.urls.regular" />;
  });

  return <div>{images}</div>;
};

export default ImageList;
