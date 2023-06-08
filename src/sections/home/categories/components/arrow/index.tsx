import React from "react";
import clx from "classnames";
import { ArrowProps } from "./types";
import classes from "./arrow.module.scss";

const Arrow: React.FC<ArrowProps> = ({ position }) => {
  return (
    <div
      className={clx(classes.arrowContainer, {
        [classes.right]: position === "right",
      })}
    >
      <div
        className={clx(classes.arrowIconContainer, {
          [classes.right]: position === "right",
        })}
      >
        <div
          className={clx({
            [classes.transform]: position === "left",
          })}
        >
          <svg
            fill="currentColor"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            className="flip-rtl "
          >
            <path d="M39.76 24 24.59 8.83a1 1 0 0 1 0-1.42L27.4 4.6a1 1 0 0 1 1.42 0l17.3 17.29a3 3 0 0 1 0 4.24l-17.3 17.3a1 1 0 0 1-1.42 0l-2.82-2.83a1 1 0 0 1 0-1.42L39.76 24Z" />
          </svg>
        </div>
      </div>
      <div
        className={clx(classes.shadow, {
          [classes.right]: position === "right",
        })}
      />
    </div>
  );
};

export default Arrow;
