import React, { useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import classes from "./timeline.module.scss";
import { useLazyQuery } from "@apollo/client";
import { GET_TIMELINE } from "./query";
import { TimelineItemType } from "@/gql/graphql";
import InfiniteScroll from "react-infinite-scroll-component";
import { TimelineItem } from "./components";

const TimeLine = () => {
  const [nextPage, setNextPage] = useState<number>(1);
  const [timelineItems, setTimelineItems] = useState<TimelineItemType[]>([]);

  const [getTimeline, { loading, error }] = useLazyQuery(GET_TIMELINE, {
    fetchPolicy: "network-only",
    onCompleted(data) {
      setTimelineItems((items) => [...items, ...data.getTimeline]);
      setNextPage((page) => page + 1);
    },
  });

  useEffect(() => {
    getTimeline({
      variables: {
        keyword: "fashion",
        perPage: 50,
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <InfiniteScroll
      dataLength={timelineItems.length}
      next={() =>
        getTimeline({
          variables: {
            keyword: "fashion",
            perPage: 50,
            page: nextPage,
          },
        })
      }
      hasMore={true}
      loader={<h4>Loading...</h4>}
    >
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 2, 700: 3, 1024: 4 }}
        className={classes.masonry}
      >
        <Masonry gutter="14px">
          {timelineItems.map((timeline: any, i: number) => (
            <TimelineItem
              key={i}
              mediaUrl={timeline.imageUrl}
              description={timeline.description}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </InfiniteScroll>
  );
};

export default TimeLine;
