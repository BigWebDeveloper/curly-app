"use client";
import { useState } from "react";
import { RiHeart3Fill } from "react-icons/ri";
import { RiHeart3Line } from "react-icons/ri";

const Likes = () => {
  const [isLike, setIsLike] = useState(false);
  return (
    <>
      {isLike ? (
        <RiHeart3Fill
          className="text-red-500 cursor-pointer"
          onClick={() => setIsLike(!isLike)}
        />
      ) : (
        <RiHeart3Line
          className="cursor-pointer"
          onClick={() => setIsLike(!isLike)}
        />
      )}
    </>
  );
};

export default Likes;
