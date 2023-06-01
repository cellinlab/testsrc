import type { AppProps } from "next/app";
import Head from "next/head";

import "../styles/globals.css";

import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>TestSrc</title>
        <meta name="description" content="Generate Video or Audio Test Sources" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
