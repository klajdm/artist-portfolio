import Contact from "@/components/Contact";
import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";

export default function contact() {
  return (
    <Layout>
      <Head>
        <title>Artwork Portfolio: Contact</title>
      </Head>
      <Contact />
    </Layout>
  );
}
