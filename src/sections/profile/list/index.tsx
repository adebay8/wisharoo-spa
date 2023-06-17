import React from "react";
import classes from "./list.module.scss";

const List = () => {
  return (
    <div className={classes.listPageContainer}>
      <div className={classes.listPageWrapper}>
        <div id="photo-welcome" />
        <div className={classes.imageCarouselContainer}>
          <div className={classes.imageCarouselWrapper}>
            <div
              style={{
                position: "absolute",
                inset: 0,
                height: "100vh",
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1636553184309-2029fb2495d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80")',
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                transition:
                  "background-position 500ms cubic-bezier(0.23, 1, 0.32, 1) 0s",
                opacity: 1,
              }}
            />
          </div>
        </div>
        <div className={classes.listContainer}>
          <div
            data-layer="simple"
            className="joykit-box dtuHg jyse-jyse-container-0"
          >
            <div className="jyse-jyse-c8399a5b-fd7c-4f7c-bdb0-a7421b3d0c91">
              <div />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
