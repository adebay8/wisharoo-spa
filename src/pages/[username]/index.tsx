import { Meta } from "@/components";
import { ProfileLayout } from "@/layouts";
import { Lists } from "@/sections";
import React from "react";

const Profile = () => {
  return (
    <ProfileLayout>
      <Meta title="Profile" description="Profile" image="image" />
      <Lists />
    </ProfileLayout>
  );
};

export default Profile;
