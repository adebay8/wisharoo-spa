import React from "react";
import classes from "./category-item.module.scss";
import { CategoryItemProps } from "./types";

const CategoryItem: React.FC<CategoryItemProps> = ({
  name,
  url = "/",
  svg,
}) => {
  return (
    <div className={classes.categoryItemContainer}>
      {svg}
      <span className={classes.categoryItemName}>{name}</span>
    </div>
  );
};

export default CategoryItem;
