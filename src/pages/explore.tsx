import { Meta } from "@/components";
import { DefaultLayout } from "@/layouts";
import { Categories, TimeLine } from "@/sections";
import React from "react";

const Explore = () => {
  return (
    <DefaultLayout>
      <Meta title="Wisharoo" description="Wisharoo" image="Wisharoo" />
      <Categories />
      <div style={{ padding: "76px 0" }}>
        <TimeLine />
      </div>
    </DefaultLayout>
  );
};

export default Explore;
