import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import classes from "./timeline.module.scss";

const TimeLine = () => {
  const images = [...new Array(50).fill(0)].map((_, index) => ({
    id: index + 1,
    url: `https://unsplash.it/700/${index % 2 == 0 ? 800 : 700}?image=${
      index + 50
    }`,
  }));

  return (
    <ResponsiveMasonry
      columnsCountBreakPoints={{ 350: 1, 700: 3, 1024: 4 }}
      className={classes.masonry}
    >
      <Masonry gutter="14px">
        {images.map((image, i) => (
          <img
            key={i}
            src={image.url}
            style={{ width: "100%", display: "block", borderRadius: "14px" }}
          />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default TimeLine;
