import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function Images({ artworks, setSelectedImg }) {
  return (
    <div className="min-h-full block relative justify-center overflow-hidden">
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-center items-center lg:ml-[240px] relative">
        {artworks.map((artwork, index) => (
          <div
            onClick={() => setSelectedImg(artwork.link)}
            key={index}
            className=" m-2 lg:m-8 lg:p-5 p-1 relative"
          >
            <Image
              src={artwork.link}
              alt="Image"
              width={500}
              height={300}
              priority={true}
              className="top-0 left-0 w-full h-full hover:scale-110 duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
