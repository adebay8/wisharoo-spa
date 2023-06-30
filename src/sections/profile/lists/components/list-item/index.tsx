import React from "react";
import clx from "classnames";
import classes from "./list-item.module.scss";
import Link from "next/link";

const ListItem = () => {
  const items = [
    {
      id: 1,
      imageUrl:
        "https://images.unsplash.com/photo-1604242692760-2f7b0c26856d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80",
    },
    {
      id: 2,
      imageUrl:
        "https://images.unsplash.com/photo-1594576722512-582bcd46fba3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    },
    {
      id: 3,
      imageUrl:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      id: 4,
      imageUrl:
        "https://images.unsplash.com/photo-1616663308968-58162d332720?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
  ];

  return (
    <li className={classes.listItem}>
      <Link
        className={classes.listItemLink}
        href="/oluwaponnle/lists/6522941-Wisharoo"
      >
        <div className={classes.thumbnailsContainer}>
          <div className={classes.thumbnailsContent}>
            <div
              className={clx(classes.listImage, classes.mainImage)}
              style={{
                backgroundImage: `url("${items[0].imageUrl}")`,
              }}
            />
            <div className={classes.otherListImagesContainer}>
              {items.slice(1).map(({ id, imageUrl }) => (
                <div
                  key={id}
                  className={clx(classes.listImage, classes.otherListImage)}
                  style={{
                    backgroundImage: `url("${imageUrl}")`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
        <div className={classes.listsDescriptionContainer}>
          <div className={classes.listName}>20th Birthday</div>
        </div>
      </Link>
    </li>
  );
};

export default ListItem;
