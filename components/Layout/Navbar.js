import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "../../public/logo.png";
import classNames from "classnames";

import {
  BsChevronDown,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";
import Footer from "./Footer";

export default function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const ulClasses = classNames({ hidden: isCollapsed });
  const svgClasses = classNames({ "transform rotate-180": !isCollapsed });
  return (
    <div className="fixed w-[240px] h-screen shadow top-0 left-0 z-20 bg-white overflow-hidden ">
      <div className="w-full flex justify-center p-5 lg:pt-10 bg-white">
        <Link href="/">
          <Image
            src={Logo}
            alt="Logo"
            width={200}
            height={100}
            className="cursor-pointer h-auto "
            priority
          />
        </Link>
      </div>
      <aside className="p-[20%]">
        <nav>
          <ul className="text-xl space-y-4 font-['Signika'] ">
            <li className="hover:text-gray-400 transition duration-300 ease-in-out">
              <Link href="/">Artworks</Link>
            </li>
            <li>
              <a
                onClick={toggleCollapse}
                className="flex items-center  cursor-pointer hover:text-gray-400 transition duration-300 ease-in-out"
              >
                <BsChevronDown className={`${svgClasses} w-4 h-4`} />
                <span className="ml-1">Shop</span>
              </a>
              <ul
                className={`${ulClasses} text-base space-y-4 font-light pl-5`}
              >
                <li className="pt-4 ">
                  <Link href="https://artgrab.co/art/klajdart" target="_blank">
                    Artgrab
                  </Link>
                </li>
                <li>
                  <Link href="http://tee.pub/lic/7ToRAbSJO5o" target="_blank">
                    Teepublic
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.redbubble.com/people/klajdart/shop"
                    target="_blank"
                  >
                    Redbubble
                  </Link>
                </li>
              </ul>
            </li>
            <li className="hover:text-gray-400 transition duration-300 ease-in-out">
              <Link href="/about">About</Link>
            </li>
            <li className="hover:text-gray-400 transition duration-300 ease-in-out">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </aside>
      <div className="absolute inset-x-0 bottom-0">
        <div className="flex text-xl justify-center space-x-9 py-5">
          <Link href="https://www.instagram.com/klajdmurataj/" target="_blank">
            <BsInstagram />
          </Link>
          <Link href="https://twitter.com/klajdmurataj" target="_blank">
            <BsTwitter />
          </Link>
          <Link
            href="https://www.linkedin.com/in/klajdi-murataj-511617285/"
            target="_blank"
          >
            <BsLinkedin />
          </Link>
        </div>
        <div className="p-4 text-sm text-center">
          <Footer />
        </div>
      </div>
    </div>
  );
}

//  initial={{
//             x: -200,
//             opacity: 0,
//             scale: 0.5,
//           }}
//           animate={{
//             x: 0,
//             opacity: 1,
//             scale: 1,
//           }}
//           transition={{
//             duration: 1.5,
//           }}
//           viewport={{ once: true }}
