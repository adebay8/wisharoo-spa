import React, { useEffect, useRef } from "react";
import { MasonryProps } from "./types";
import classes from "./masonry.module.scss";
import ReactDOM from "react-dom";

const Masonry: React.FC<MasonryProps> = ({ images }) => {
  const masonryRef = useRef(null);

  function resizeMasonryItem(item: HTMLElement) {
    const grid = ReactDOM.findDOMNode(masonryRef.current) as Element;
    const rowGap = parseInt(
      window.getComputedStyle(grid).getPropertyValue("grid-row-gap")
    );
    const rowHeight = parseInt(
      window.getComputedStyle(grid).getPropertyValue("grid-auto-rows")
    );

    //
    var rowSpan = Math.ceil(
      (item.querySelector(".masonry-content")!.getBoundingClientRect().height +
        rowGap) /
        (rowHeight + rowGap)
    );

    console.log(item);

    /* Set the spanning as calculated above (S) */
    item.style.gridRowEnd = "span " + rowSpan;

    /* Make the images take all the available space in the cell/item */
    const content = item.querySelector(".masonry-content") as HTMLElement;
    content.style.height = rowSpan * 10 + "px";
  }

  const resizeAllMasonryItems = () => {
    const allItems = document.getElementsByClassName(
      "masonry-item"
    ) as HTMLCollectionOf<HTMLElement>;

    for (var i = 0; i > allItems.length; i++) {
      resizeMasonryItem(allItems[i]);
    }
  };

  //   function waitForImages() {
  //     var allItems = document.getElementsByClassName("masonry-item");
  //     for (var i = 0; i < allItems.length; i++) {
  //       imagesLoaded(allItems[i], function (instance) {
  //         var item = instance.elements[0];
  //         resizeMasonryItem(item);
  //       });
  //     }
  //   }

  useEffect(() => {
    const masonryEvents = ["load", "resize"];

    masonryEvents.map((event) => {
      window.addEventListener(event, resizeAllMasonryItems);
    });

    return () => {
      masonryEvents.map((event) => {
        window.removeEventListener(event, resizeAllMasonryItems);
      });
    };
  }, []);

  return (
    <div className={classes.masonry} ref={masonryRef}>
      {images.map((image) => (
        <div
          className={classes.masonryItem}
          key={image.id}
          onLoad={(e) => {
            resizeMasonryItem(e.currentTarget);
          }}
        >
          <img
            src={image.url}
            alt="Masonry Brick #1"
            className={classes.masonryContent}
          />
        </div>
      ))}
    </div>
  );
};

export default Masonry;
