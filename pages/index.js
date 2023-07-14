import Images from "@/components/Images";
import Layout from "@/components/Layout";
import Modal from "@/components/Modal";
import { mongooseConnect } from "@/lib/mongoose";
import { Artworks } from "@/models/Artworks";
import { useState } from "react";

export default function Home({ artworks }) {
  const [selectedImg, setSelectedImg] = useState(null);
  const [imageTitle, setImageTitle] = useState(null);
  return (
    <Layout>
      <Images
        artworks={artworks}
        setSelectedImg={setSelectedImg}
        setImageTitle={setImageTitle}
      />
      {selectedImg && (
        <Modal
          selectedImg={selectedImg}
          setSelectedImg={setSelectedImg}
          imageTitle={imageTitle}
        />
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
