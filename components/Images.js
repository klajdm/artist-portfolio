import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Images({ artworks, setSelectedImg, setImageTitle }) {
  function handleArtworkClick(link, title) {
    setSelectedImg(link);
    setImageTitle(title);
  }
  return (
    <div className="min-h-full block relative justify-center overflow-hidden">
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-center items-center lg:ml-[240px] relative">
        {artworks.map((artwork, index) => (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            onClick={() => handleArtworkClick(artwork.link, artwork.title)}
            key={index}
            className=" m-2 lg:m-8 lg:p-5 p-1 relative"
          >
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              src={artwork.link}
              alt="Image"
              className="top-0 left-0 w-[500px] h-auto hover:scale-110 duration-500"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
