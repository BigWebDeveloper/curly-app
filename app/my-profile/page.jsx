import Link from "@node_modules/next/link";
import ImageTemp from "@app/templates/ImageTemp";
import a from "@public/profile.jpeg";
import { FaPlus } from "@node_modules/react-icons/fa";
import { FaEdit } from "@node_modules/react-icons/fa";
import EditUser from "./EditUser";
import Interest from "./Interest";
import Hobby from "./Hobby";
import AboutMe from "./AboutMe";

const page = () => {
  const user = ["Temiloluwa", 27, "Lagos"];

  return (
    <div className="mr-30">
      <div
        className={`relative p-2 banner-1 bg-cover bg-center bg-no-repeat h-40 rounded-md text-[12px]`}
      >
        <div className="flex justify-between p-2">
          <button className=" cursor-pointer rounded-sm bg-black/80 py-1 px-5 text-white">
            Back
          </button>
          <button className="cursor-pointer rounded-sm bg-black/80 py-1 px-5 text-white">
            Update
          </button>
          <div className=" flex flex-cols absolute top-16 left-15">
            <div className="relative">
              <ImageTemp
                alt="profile"
                src={a}
                className="h-full object-center object-cover"
                containerClass="rounded-md w-30 h-30 bg-green-500 overflow-hidden"
              />
              <span className="absolute -right-2 -bottom-1 bg-blue-800 inline-flex rounded-full text-white p-[6px]">
                <FaPlus size={8} />
              </span>
            </div>

            <div className="font-black p-4">
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
      <div className="flex flex-row gap-5">
      <Hobby />
      <Interest />
      <AboutMe />
      </div>
    </div>
  );
};

export default page;
