import React from "react";
import clx from "classnames";
import classes from "./tabs.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { TabsProps } from "./types";

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const { asPath } = useRouter();

  return (
    <div className={classes.tabContainer} role="tablist">
      {tabs.map(({ id, slug, svg, name }) => (
        <div className={classes.tabWrapper} role="tab" key={id}>
          <Link
            aria-current="page"
            href={slug}
            className={clx(classes.tabMenuTab, {
              [classes.activeTab]: asPath === slug,
            })}
            tabIndex={0}
          >
            {svg}
            {name}
          </Link>
          <div className={classes.tabDivider} />
        </div>
      ))}
    </div>
  );
};

export default Tabs;
