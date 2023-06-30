import React from "react";
import classes from "./list.module.scss";
import { ListItemCard } from "@/components";

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
                  'url("https://images.unsplash.com/photo-1633358561379-4bbd7a98236c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80")',
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
        <div className={classes.listItemsContainer}>
          {/* <div
            data-layer="simple"
            className="joykit-box dtuHg jyse-jyse-container-0"
          >
           
          </div> */}
          <ol className={classes.listItemsWrapper}>
            <ListItemCard
              image="https://images.unsplash.com/photo-1604242692760-2f7b0c26856d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80"
              name="Watch from amazon"
              price="200.00"
            />
            <ListItemCard
              image="https://images.unsplash.com/photo-1594576722512-582bcd46fba3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              name="test"
              price="200"
            />
            <ListItemCard
              image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              name="test"
              price="200"
            />
          </ol>
        </div>
      </div>
    </div>
  );
};

export default List;
