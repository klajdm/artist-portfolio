import React from "react";
import Image from "next/image";
import ProfilePic from "../public/profile3.jpg";
import Spotify from "./Spotify";

export default function About() {
  return (
    <div className="relative min-w-fit min-h-screen flex flex-col items-center">
      <div>
        <div className="flex flex-col items-center justify-center text-center">
          <div className="mt-20">
            <Image src={ProfilePic} alt="" className=" w-[250px] h-auto" />
          </div>
          <div className=" mt-10">
            <h3 className=" font-['Roboto_Slab'] top-24 uppercase tracking-[10px] text-gray-500 text-lg lg:text-xl">
              About
            </h3>
            <p>
              <br />
            </p>
            <div className="max-w-3xl">
              <p>
                My name is Klajdi Murataj and I am a freelance visual artist
                from Albania. I have a bachelor&apos;s degree in Computer
                Science, but I am a self-taught digital artist. I got my start
                as a graphic designer by creating a logo for my high school
                using Adobe Photoshop. After that, I became curious about the
                photo manipulation tutorials suggested by YouTube, so I started
                practicing them extensively. It has been six years since my
                first photo manipulation edit, with some pauses here and there
                during these years. Throughout this time, I have honed my skills
                and expanded my repertoire as a visual artist.
              </p>{" "}
              <br />
              <p>
                As I continued to develop my artistic abilities, I also explored
                different software tools and techniques to enhance my creative
                process. In addition to Adobe Photoshop, I learned to utilize
                programs such as Adobe Illustrator, After Effects, and Blender
                to bring my artistic visions to life. These tools have allowed
                me to experiment with different styles and push the boundaries
                of my artistic expression.
              </p>
              <br />
              <p>
                In recent years, my focus as a visual artist has gravitated
                towards creating artworks that delve into spiritual and
                philosophical concepts, exploring the nature of existence and
                our interconnectedness with the universe. Drawing inspiration
                from various religious and spiritual traditions, as well as
                philosophical theories, I strive to visually depict abstract
                ideas such as transcendence, enlightenment, and the quest for
                higher consciousness. These artworks serve as visual metaphors,
                inviting viewers to ponder the deeper aspects of life and their
                own spiritual journeys.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Spotify />
    </div>
  );
}
