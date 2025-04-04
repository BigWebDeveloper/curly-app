"use client";
import { usePathname } from "next/navigation";
import { IoMdMenu } from "react-icons/io";
import { useGlobalContext } from "@app/templates/GlobalContext";
import Nav from "./Nav";

const Sidebar = () => {
  const pathname = usePathname;
  const { setIsShowNav, isShowNav } = useGlobalContext();

  const handleIsShow = () => {
    setIsShowNav(!isShowNav);
  };

  return (
    <div className="w-35 absolute flex justify-center items-start p-10" onClick={handleIsShow}>
      <button type="button" className="fixed max-sm:hidden cursor-pointer" onClick={handleIsShow}>
        <IoMdMenu title="menu" size={30} />
      </button>
      <Nav />
    </div>
  );
};

export default Sidebar;
