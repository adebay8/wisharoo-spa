import Head from "next/head";
import { MetaProps } from "./types";

const Meta: React.FC<MetaProps> = ({
  title,
  description,
  image,
  slug = "/",
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`https://app.wisharoo.ponnle.xyz${slug}`} />
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:locale" content="en_gb" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={image} />
      <meta property="og:description" content={description} />
      <meta
        property="og:url"
        content={`https://app.wisharoo.ponnle.xyz${slug}`}
      />
      <meta property="og:site_name" content="Wisharoo" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:description" content={description} />
    </Head>
  );
};

export default Meta;
