import React from "react";
import classes from "./list-item.module.scss";
import { ListItemCardProps } from "./types";

const ListItem: React.FC<ListItemCardProps> = ({ name, price, image }) => {
  return (
    <li
      id="screenshot-16342449"
      data-thumbnail-id={16342449}
      className={classes.listItemContainer}
    >
      <div className={classes.listItemThumbnail}>
        <figure className={classes.listItemThumbnailPlaceholder}>
          <img
            alt="Squadded - social commerce platform community ecommerce social social commerce social shopping ui ui design ux design web app web design"
            width={330}
            height={247}
            src={image}
          />
        </figure>
      </div>
      {/* <div className={classes.listItemDetails}>
        <h6 className={classes.listItemName}>
          {name}
        </h6>
        <div className={classes.listItemPrice}>${price}</div>
      </div> */}
      <button type="submit" className={classes.button}>
        <div className={classes.buttonWrapper}>
          <div className={classes.buttonText}>Gift This</div>
        </div>
      </button>
    </li>
  );
};

export default ListItem;
