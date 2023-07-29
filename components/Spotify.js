import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function Spotify() {
  const songs = [
    {
      id: 1,
      link: "https://open.spotify.com/embed/track/5YpnEZxYlfCNpj090dN99O?utm_source=generator",
    },
    {
      id: 2,
      link: "https://open.spotify.com/embed/track/1wxxZ5OHQiWQ4YAXvf93vg?utm_source=generator",
    },
    {
      id: 3,
      link: "https://open.spotify.com/embed/track/6GYRzVDBI7DzrOOKzQuxHs?utm_source=generator",
    },
    {
      id: 4,
      link: "https://open.spotify.com/embed/track/2Ng1gkzu5itZl4BMx17ehT?utm_source=generator",
    },
    {
      id: 5,
      link: "https://open.spotify.com/embed/track/12Ze1QrUhm7BgBnGVacitN?utm_source=generator",
    },
    {
      id: 6,
      link: "https://open.spotify.com/embed/track/5ZNz3g22vTeyPxkBNlmdr8?utm_source=generator",
    },
    {
      id: 7,
      link: "https://open.spotify.com/embed/track/6igFnKUEN9trGryrtD830N?utm_source=generator",
    },
  ];

  const item = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  };
  return (
    <div className=" relative block my-10 md:mx-8">
      <div className="text-center mb-7 ">
        <h2 className=" py-3 lg:text-xl">
          Below you can see some of my artworks which have been lincesed on{" "}
          <Link
            href="https://artgrab.co/"
            target="_blank"
            className="font-semibold tracking-wide"
          >
            Artgrab
          </Link>
          .{" "}
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4">
        {songs.map(({ id, link }) => (
          <motion.div
            initial={{
              opacity: 0,
            }}
            transition={{
              duration: 2,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{ once: true }}
            key={id}
          >
            <embed
              src={link}
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="w-[100%] h-20 rounded-2xl md:w-[100%] md:h-[352px]"
            ></embed>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
