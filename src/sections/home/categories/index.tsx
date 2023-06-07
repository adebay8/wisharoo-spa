import React from "react";
import classes from "./categories.module.scss";
import { Arrow, CategoryItem } from "./components";
import { categories } from "./data";

const Categories = () => {
  return (
    <div className={classes.categoryListWrapper}>
      <Arrow position="left" />
      <div className={classes.categoryListContainer}>
        {categories.map((category, index) => (
          <CategoryItem key={index} {...category} />
        ))}
      </div>
      <Arrow position="right" />
    </div>
  );
};

export default Categories;
