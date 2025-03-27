"use client";
import ImageTemp from "@app/templates/ImageTemp";
import Search from "./Search";
import Filter from "./Filter";
import a from "../../asset/favicon.png";
import b from "../../asset/profile.jpeg";
import { useGlobalContext } from "@app/templates/GlobalContext";
import { BiSolidBellRing } from "react-icons/bi";
import Link from "@node_modules/next/link";
import { IoMdSearch } from "react-icons/io";
import { useState } from "react";
import {} from "react-icons/io";
import { FaFilter } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";

const Header = () => {
  const [hide, setHide] = useState(true);
  const { jainiPurva } = useGlobalContext();
  return (
    <header className="fixed top-0 left-0 flex flex-row items-center max-md:px-5 max-xl:gap-15 max-md:gap-10 bg-white  w-full h-17 py-4 px-15 gap-30 z-100">
      <Link href="/" className="flex items-center max-md:gap-1 gap-3">
        <ImageTemp
          src={a}
          alt="logo"
          containerClass="w-10 h-10 rounded-full overflow-hidden"
          className="object-center object-cover h-full"
        />
        <p className={`${jainiPurva} text-2xl`}>Curly</p>
      </Link>
      <div id="search-section" className="flex gap-5 max-md:hidden">
        <Search />
        <Filter />
      </div>

      <div className="flex items-center gap-5 ml-auto max-sm:gap-3">
        <button className=" text-black max-md:flex hidden">
          <IoMdSearch
            className="cursor-pointer"
            size={25}
            title="search-icon"
            onClick={() => setHide(!hide)}
          />
        </button>
        <button type="button" onClick={() => console.log("woring....")}>
          <BiSolidBellRing
            title="notification"
            size={22}
            className="text-red-500 cursor-pointer"
          />
        </button>

        <Link href="/my-profile">
          <ImageTemp
            src={b}
            alt="logo1"
            containerClass="w-12 h-12 rounded-full overflow-hidden"
            className="object-center object-cover h-full"
          />
        </Link>
      </div>

      <div
        id="header-backdrop"
        className="shadow-sm -z-98 absolute bg-white top-0 left-0 w-full h-full"
      ></div>
      <div
        id="search-mobile-dropdown"
        className={` flex -z-99 gap-4 absolute left-1/2 -translate-x-1/2 rounded-full ${
          hide ? "top-0" : "top-17"
        } min-w-4/5 h-15 max-md:flex max-sm:w-full hidden items-center max-sm:rounded-none justify-center transition-all duration-300 bg-white`}
      >
        <label className="flex items-center min-w-35 h-9 border-1 focus-within:border-blue-500 border-gray-300 rounded-full">
          <IoIosSearch className="ml-5 mr-1 text-xl" />
          <input
            id="search2"
            type="search"
            placeholder="Search"
            className="w-full text-[14px] mr-3 py-1 pl-2 focus:outline-none"
          />
        </label>
        <label className="flex items-center h-9 w-35 border-1 focus-within:border-blue-500 border-gray-300 rounded-full">
          <FaFilter size={20} className="ml-5 mr-1" />
          <input
            id="search"
            type="search"
            placeholder="Filter"
            className="w-full text-[14px] mr-3  py-1 pl-2 focus:outline-none"
          />
        </label>
      </div>
    </header>
  );
};

export default Header;
