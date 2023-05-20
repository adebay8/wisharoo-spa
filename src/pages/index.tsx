import { Meta } from "@/components";
import DefaultLayout from "@/layouts/default";
import { TimeLine } from "@/sections";

export default function Home() {
  return (
    <DefaultLayout>
      <Meta title="Wisharoo" description="Wisharoo" image="Wisharoo" />
      <TimeLine />
    </DefaultLayout>
  );
}
