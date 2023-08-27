import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Images({ artworks, setSelectedImg, setImageTitle }) {
  const [isLoading, setIsLoading] = useState(true);

  // Simulating a 3-second loading time
  setTimeout(() => {
    setIsLoading(false);
  }, 5000);

  function handleArtworkClick(link, title) {
    setSelectedImg(link);
    setImageTitle(title);
  }
  return (
    <div className="min-h-full block relative overflow-hidden scrollbar-thin">
      <div className="grid grid-cols-3 gap-3 md:gap-5 md:grid-cols-4  xl:grid-cols-5 justify-between  relative">
        {artworks.map((artwork, index) => (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            onClick={() => handleArtworkClick(artwork.link, artwork.title)}
            key={index}
            className=" 3xl:m-10 xl:m-2 lg:p-5 p-2 md:p-3 relative flex justify-center items-center"
          >
            {isLoading ? (
              <div className="loader">
                <div className="loading-icon" />
              </div>
            ) : (
              ""
            )}
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 5.5 }}
              src={artwork.link}
              alt="Artwork"
              loading="lazy"
              className="top-0 left-0 w-[500px] h-auto hover:scale-110 duration-500 hover:cursor-pointer"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
