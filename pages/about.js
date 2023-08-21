import About from "@/components/About";
import Layout from "@/components/Layout/Layout";
import Head from "next/head";
import React from "react";

export default function about() {
  return (
    <>
      <Head>
        <title>Artwork Portfolio: About</title>
      </Head>
      <About />
    </>
  );
}
