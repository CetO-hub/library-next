import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/SVG/logo.svg";
import { RiMenuUnfoldFill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <ul className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <li className="cursor-pointer">
              <Link href="/">
                <div className="flex gap-2 items-center">
                  <div className="relative w-[50px] h-[50px]">
                    <Image src={logo} layout="fill" objectFit="cover" />
                  </div>
                  <div className="text-xl font-bold leading-none">
                    <h1>Mark</h1>
                    <h1>Buk</h1>
                  </div>
                </div>
              </Link>
            </li>
            <div className="flex justify-between gap-4 items-center text-sm sm:text-lg cursor-pointer mt-4 sm:mt-0">
              <li className="bg-gray-400/25 sm:bg-white px-4 py-2 rounded-2xl ">
                <Link href="/">
                  <h2>Home</h2>
                </Link>
              </li>
              <li className="bg-gray-400/25 sm:bg-white px-4 py-2 rounded-2xl ">
                <Link href="/server">
                  <h2>Server storage</h2>
                </Link>
              </li>
              <li className="bg-gray-400/25 sm:bg-white px-4 py-2 rounded-2xl ">
                <Link href="/local">
                  <h2>Local storage</h2>
                </Link>
              </li>
            </div>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
