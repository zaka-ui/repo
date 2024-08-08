import React from "react";
import Menu from "./Menu";

import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-3  max-w-6xl mx-auto">
      <div className="flex gap-4">
        <Menu title="Home" address="/" Icon={AiFillHome} />
        <Menu title="About" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <Link className="flex gap-1 items-center" href="/">
        <span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg ">
          IMDB
        </span>
        <span className="text-xl hidden sm:inline">clone</span>
      </Link>
    </div>
  );
};

export default Header;
