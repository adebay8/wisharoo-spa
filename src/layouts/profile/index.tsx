import React from "react";
import DefaultLayout from "../default";
import { useRouter } from "next/router";
import { Tabs } from "@/components";
import { ProfileLayoutProps } from "./types";
import ProfileDetails from "./components/profile-details";

const ProfileLayout: React.FC<ProfileLayoutProps> = ({ children }) => {
  const { query } = useRouter();

  const tabs = [
    {
      id: 1,
      name: "Lists",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 12.091">
          <path d="M10.182 0A4.006 4.006 0 007 1.909 4.006 4.006 0 003.818.001 3.818 3.818 0 000 3.819c0 3.646 7 8.273 7 8.273s7-4.578 7-8.273A3.818 3.818 0 0010.182.001z" />
        </svg>
      ),
      slug: `/${query?.username}`,
    },
    {
      id: 2,
      name: "Collections",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
          <g>
            <path d="M13.462 10.238c-.72-.062-.732-.642-.732-1.365a6.575 6.575 0 001.545-3.918C14.275 2.582 12.925 1 10.98 1a3.15 3.15 0 00-1.34.287 5.345 5.345 0 012.62 4.95 7.8 7.8 0 01-1.21 3.974.431.431 0 00.237.644 6.977 6.977 0 013.573 2.329A6.268 6.268 0 0115.89 15h1.628a.436.436 0 00.44-.431v-.03c-.289-3.145-3.511-4.215-4.496-4.301z" />
            <path d="M14.487 17a.466.466 0 00.471-.46v-.034c-.31-3.367-3.762-4.514-4.818-4.606-.772-.067-.785-.689-.785-1.462a7.046 7.046 0 001.656-4.2C11.011 3.7 9.564 2 7.48 2S3.951 3.7 3.951 6.239a7.046 7.046 0 001.656 4.2c0 .774-.013 1.4-.785 1.462-1.057.091-4.509 1.238-4.821 4.605A.465.465 0 00.437 17h14.05z" />
          </g>
        </svg>
      ),
      slug: `/${query?.username}/collections`,
    },
    {
      id: 3,
      name: "Favourites",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17.53"
          height="16.742"
          viewBox="0 0 17.53 16.742"
          aria-labelledby="Star-description-5e360f08-9cdb-47ae-b4f1-440d2c04d14c"
        >
          <desc id="Star-description-5e360f08-9cdb-47ae-b4f1-440d2c04d14c" />
          <path
            d="M9.253.3l2.164,5.74,6.116.29a.256.256,0,0,1,.147.456L12.9,10.627l1.615,5.926a.256.256,0,0,1-.387.281L9.014,13.459,3.9,16.832a.256.256,0,0,1-.387-.281l1.615-5.926L.346,6.786a.256.256,0,0,1,.147-.459L6.61,6.041,8.774.3a.255.255,0,0,1,.479,0Z"
            transform="translate(-0.246 -0.134)"
          />
        </svg>
      ),
      slug: `/${query.username}/favourites`,
    },
  ];

  return (
    <DefaultLayout>
      <ProfileDetails />
      <Tabs tabs={tabs} />
      {children}
    </DefaultLayout>
  );
};

export default ProfileLayout;
