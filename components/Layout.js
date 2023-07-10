import Head from "next/head";
import React, { useState } from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import Logo from "../public/logo.png";

export default function Layout({ children }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Artwork Portfolio</title>
        <meta name="description" content="By Klajdi Murataj" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </Head>

      <main>
        <div className="w-screen h-full flex relative overflow-hidden">
          <div
            className={`-translate-x-[240px] left-0 top-0 lg:transform-none z-50 ${
              isDrawerOpen
                ? "transform-none ease-out duration-300"
                : "ease-linear duration-300"
            }`}
          >
            <Navbar />
          </div>
          <div className="lg:hidden">
            <nav className="absolute flex w-full h-24 top-0 bg-white z-0 justify-between items-center px-5">
              <div>
                <Link href="/">
                  <Image
                    src={Logo}
                    alt="Logo"
                    width={100}
                    className="cursor-pointer z-0"
                    priority
                  />
                </Link>
              </div>
              <div>
                <HiOutlineMenuAlt3
                  className={`text-2xl cursor-pointer ${
                    isDrawerOpen ? "hidden" : ""
                  }`}
                  onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                />
                <IoMdClose
                  className={`text-2xl cursor-pointer ${
                    isDrawerOpen ? "visible" : "hidden"
                  }`}
                  onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                />
              </div>
            </nav>
          </div>
          <div className="flex-grow px-5 md:px-0 mt-24 lg:mt-0">
            <div
              className={`overflow-y-auto ${
                isDrawerOpen
                  ? "translate-x-[240px] ease-out duration-300"
                  : "ease-linear duration-300"
              }`}
            >
              {children}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

//  <HiOutlineMenuAlt3
//                   className={`text-2xl cursor-pointer ${
//                     isDrawerOpen ? "hidden" : "flex"
//                   }`}
//                   on
//                   Click={() => setIsDrawerOpen(!isDrawerOpen)}
//                 />
//                 <IoMdClose
//                   className={`text-2xl cursor-pointer ${
//                     isDrawerOpen ? "flex" : "hidden"
//                   }`}
