import Head from "next/head";

export default function CustomHead({ title }) {
  return (
    <Head>
      <title>{`Adote Patinhas | ${title}`}</title>
    </Head>
  );
}
