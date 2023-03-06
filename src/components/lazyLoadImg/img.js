import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const img = ({ src, className }) => {
  return (
    <LazyLoadImage
      className={className || ""}
      alt="lazy load"
      effect="blur"
      src={src}
    />
  );
};

export default img;
