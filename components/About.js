import React from "react";
import Image from "next/image";
import ProfilePic from "../public/profile2.jpg";

export default function About() {
  return (
    <div className="relative min-w-fit min-h-screen lg:ml-[240px]">
      <div>
        <div className="flex flex-col items-center justify-center text-center">
          <div className="mt-20">
            <Image src={ProfilePic} alt="" className="w-[250px] h-auto" />
          </div>
          <div className=" mt-10">
            <h3 className=" top-24 uppercase tracking-[10px] text-gray-500">
              About
            </h3>
            <p>
              <br />
            </p>
            <p className="max-w-xl">
              I&apos;m Klajdi Murataj, an Albanian visual artist. I got my start
              as a graphic designer by creating a logo for my I&apos;ve
              developed my technique... Most of my finished pieces are black and
              white with the occasional colour embellishment. I focus more on
              the shapes and shadows in an Today, I am open to all kinds of
              design work, although I am always drawn to passion projects that
              let me...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
