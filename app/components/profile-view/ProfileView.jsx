import React from "react";

const ProfileView = () => {
  return (
    <div id="profile-view">
      <h1 className=" text-sm font-semibold max-sm:text-center mb-2">Welcome, Temiloluwa</h1>
      <p className="text-xs max-sm:text-center">My Profile Completeness:</p>
      <div className="flex flex-rows  items-center w-60 gap-5 mt-1">
        <div className="relative w-full h-2 rounded-lg bg-white">
          <div
            className="absolute top-0 left-0 h-2 bg-red-500 rounded-lg"
            style={{ width: "60%" }}
          ></div>
        </div>
        <span className="text-xs font-medium">60%</span>
      </div>
    </div>
  );
};

export default ProfileView;
