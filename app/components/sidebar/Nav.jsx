"use client";
import Link from "next/link";
import Image from "@node_modules/next/image";
import { usePathname } from "next/navigation";
import { navlink } from "./data";
import a from "@public/profile.jpeg";
import { useGlobalContext } from "@app/templates/GlobalContext";
import { RxCross2 } from "react-icons/rx";
import ImageTemp from "@app/templates/ImageTemp";

const Nav = () => {
  const pathname = usePathname;
  const { isShowNav, setIsShowNav } = useGlobalContext();
  return (
    <>
      <div
        className={`fixed z-9 ${
          isShowNav ? "top-0 left-0" : "hidden"
        } w-full h-full bg-black/40`}
      ></div>
      <div
        className={`fixed z-9 top-1/2 mt-9 -left-60 rounded-md -translate-y-1/2 w-60 bg-white p-8 text-black shadow-lg transition-all duration-300 ${
          isShowNav ? "left-5" : "-left-60"
        }`}
      >
        <div className="flex flex-col items-center">
          <ImageTemp
            src={a}
            alt="Image"
            className="object-cover object-center h-full"
            containerClass="overflow-hidden rounded-full w-20 h-20 bg-white"
          />
          <p className="my-3">Tomiloluwa</p>
        </div>
        <nav className="flex flex-col space-y-1 mt-4">
          {navlink.map((item, index) => {
            return (
              <Link
                key={index}
                href={item.links}
                onClick={() => setIsShowNav(!isShowNav)}
                className={`group flex items-center p-2 rounded text-black hover:text-white hover:bg-red-500 gap-3 `}
              >
                <Image
                  src={item.images}
                  alt={item.alt}
                  className="w-5 hover:filter group-hover:brightness-0 group-hover:invert"
                />
                <p className="text-sm">{item.name}</p>
              </Link>
            );
          })}
        </nav>
        <button
          type="button"
          onClick={() => setIsShowNav(!isShowNav)}
          className="absolute top-4 right-4 cursor-pointer"
        >
          <RxCross2 title="cross" />
        </button>
      </div>
    </>
  );
};

export default Nav;
