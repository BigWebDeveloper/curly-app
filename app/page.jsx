"use client";
import { useState } from "react";
import ImageTemp from "./templates/ImageTemp";
import a from "@public/profile.jpeg";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import User from "./components/user/User";
import ProfileView from "./components/profile-view/ProfileView";

const Dashboard = () => {
  const options = ["Dating", "Marriage", "Friendship", "Professional"];
  const [isOpen, setIsOpen] = useState(false);
  const [dropValue, setDropValue] = useState(options[0]);

  const handleDropValue = (e) => {
    setDropValue(e);
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className=" flex max-sm:flex-col max-sm:justify-center flex-wrap items-center gap-10 max-sm:gap-5">
        <ImageTemp
          src={a}
          alt="user profile"
          className="object-center object-cover h-full "
          containerClass="rounded-full w-23 h-23 overflow-hidden"
        />
        <div className="flex flex-wrap max-sm:justify-center flex-1 gap-4">
          <ProfileView />
          <div id="relationship" className="flex items-center gap-3">
            <p className="text-sm font-bold">Relationship Type:</p>

            <div className="relative">
              <button
                className=" flex items-center dark:text-gray-800 w-35 justify-between bg-white py-1 px-4 pr-2 rounded-lg text-sm"
                onClick={() => setIsOpen(!isOpen)}
              >
                {dropValue.length > 11
                  ? dropValue.substring(0, 11) + "..."
                  : dropValue}
                {isOpen ? (
                  <MdOutlineKeyboardArrowDown size={20} />
                ) : (
                  <MdOutlineKeyboardArrowUp size={20} />
                )}
              </button>
              {isOpen && (
                <div className="dark:text-gray-800 absolute z-7 mt-4 text-sm bg-white shadow-md p-2 rounded-lg w-full">
                  <ul>
                    {options.map((item, index) => (
                      <li
                        key={index}
                        className="py-1 hover:bg-gray-100 rounded-lg pl-2"
                        onClick={(e) => handleDropValue(e.target.textContent)}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <User />
    </div>
  );
};

export default Dashboard;
