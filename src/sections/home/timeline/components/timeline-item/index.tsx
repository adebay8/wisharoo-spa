import React from "react";
import { TimelineItemProps } from "./types";
import classes from "./timeline-item.module.scss";
import Link from "next/link";

const TimelineItem: React.FC<TimelineItemProps> = ({
  mediaUrl,
  description,
}) => {
  return (
    <div className={classes.timelineItemWrapper}>
      <Link href="/username/p/123456">
        <img
          src={mediaUrl}
          alt={description}
          className={classes.timelineItemMedia}
        />
        <div className={classes.playContainer}>
          <svg
            className={classes.styledPlay}
            width={20}
            data-e2e=""
            height={20}
            viewBox="0 0 48 48"
            fill="#fff"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M24 11.84c-4.42-4.17-10.84-4.07-14.97 0a10.9 10.9 0 0 0 0 15.58l13.4 13.18c.87.87 2.27.87 3.15 0l13.4-13.18a10.9 10.9 0 0 0 0-15.58c-4.14-4.07-10.56-4.17-14.98 0Zm-2.53 3.86.06.07L24 18.2l2.47-2.43.06-.07c2.74-3.17 6.77-3.13 9.29-.65a6.4 6.4 0 0 1 0 9.16L24 35.84 12.18 24.21a6.4 6.4 0 0 1 0-9.16c2.52-2.48 6.55-2.52 9.3.65Z" />
          </svg>
          <strong className={classes.videoCount}>2.4M</strong>
        </div>
      </Link>
    </div>
  );
};

export default TimelineItem;
