import React from "react";
import classes from "./lists.module.scss";
import { ListItem } from "./components";

const MyLists = () => {
  return (
    <div className={classes.section}>
      <div className={classes.containerLarge}>
        <ol className={classes.listsGrid}>
          <ListItem />
        </ol>
      </div>
    </div>
  );
};

export default MyLists;
