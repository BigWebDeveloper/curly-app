"use client";
import Link from "@node_modules/next/link";
import ImageTemp from "@app/templates/ImageTemp";
import a from "@public/profile.jpeg";
import { FaPlus, FaEdit } from "@node_modules/react-icons/fa";
import EditUser from "./EditUser";
import Interest from "./Interest";
import Hobby from "./Hobby";
import AboutMe from "./AboutMe";
import { useRouter } from "@node_modules/next/navigation";
import LookingFor from "./LookingFor";

const page = () => {
  const user = ["Temiloluwa", 27, "Lagos"];
  const router = useRouter();
  return (
    <div className="">
      <div
        className={`relative p-2 banner-1 bg-cover bg-center bg-no-repeat h-40 rounded-md text-[12px]`}
      >
        <div className="flex justify-between p-2">
          <button
            className=" cursor-pointer rounded-sm bg-black/80 py-1 px-5 text-white"
            onClick={router.back}
          >
            Back
          </button>
          <button className="cursor-pointer rounded-sm bg-black/80 py-1 px-5 text-white">
            Update
          </button>
          <div className=" flex flex-cols absolute top-16 left-15  max-sm:bottom-0  max-sm:top-auto max-sm:left-0  ">
            <div className="relative">
              <ImageTemp
                alt="profile"
                src={a}
                className="h-full object-center object-cover"
                containerClass="rounded-md w-30 h-30 max-sm:w-25 max-sm:h-25 overflow-hidden"
              />
              <span className="absolute -right-2 -bottom-1 bg-blue-800 inline-flex rounded-full text-white p-[6px]">
                <FaPlus size={8} />
              </span>
            </div>

            <div className="font-black dark:text-gray-800 p-4">
              <p className="flex items-center gap-4">
                {user[0]}, {user[1]}{" "}
                <FaEdit size={18} className="text-black/70" />
              </p>
              <p className="mt-2">{user[2]}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex text-[12px] justify-end gap-2 mt-2">
        <Link
          href="/edit-user-profile"
          className=" cursor-pointer rounded-2xl bg-black/80 py-[6px] px-[10px] text-white"
        >
          Edit Profile
        </Link>
        <Link
          href="/edit-match-setup"
          className=" cursor-pointer rounded-2xl bg-black/80 py-[6px] px-[10px] text-white"
        >
          Edit Match Setup
        </Link>
      </div>
      <EditUser />
      <div className="flex mt-4 dark:text-gray-800 flex-row gap-4 flex-wrap">
        <Hobby />
        <Interest />
        <AboutMe />
        <LookingFor />
      </div>
    </div>
  );
};

export default page;
