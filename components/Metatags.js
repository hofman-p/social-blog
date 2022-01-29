import Head from "next/head";

export default function Metatags({
  title = "Blog",
  description = "A social blog for sharing ideas",
  image = "https://wl-sympa.cf.tsp.li/resize/728x/jpg/3c4/52c/1c5e9d50d383826ecbb495ea0e.jpg",
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}