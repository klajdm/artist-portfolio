import Images from "@/components/Images";
import Layout from "@/components/Layout";
import Modal from "@/components/Modal";
import { mongooseConnect } from "@/lib/mongoose";
import { Artworks } from "@/models/Artworks";
import { useState } from "react";

export default function Home({ artworks }) {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <Layout>
      <Images artworks={artworks} setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </Layout>
  );
}

export async function getServerSideProps() {
  await mongooseConnect();
  const artworks = await Artworks.find({}, null, { sort: { createdAt: -1 } });
  return {
    props: {
      artworks: JSON.parse(JSON.stringify(artworks)),
    },
  };
}
