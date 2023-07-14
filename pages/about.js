import About from "@/components/About";
import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";

export default function about() {
  return (
    <Layout>
      <Head>
        <title>Artwork Portfolio: About</title>
      </Head>
      <About />
    </Layout>
  );
}
