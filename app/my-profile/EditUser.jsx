"use client";
import { BiPencil } from "@node_modules/react-icons/bi";
import { useState } from "react";
import { images } from "./Data";
import ImageTemp from "@app/templates/ImageTemp";
import Link from "@node_modules/next/link";
import a from "@public/add-image.png";

const EditUser = () => {
  const [isFocus, setIsFocus] = useState(false);
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleFocus = () => {
    setIsFocus(true);
  };

  const handleBlur = () => {
    setIsFocus(false);
  };

  return (
    <div id="edit-myself" className="grid gap-3 w-90 h-full text-[12px]">
      <label className="relative h-full block bg-white  rounded-md border-2 border-gray-300">
        <textarea
          placeholder="A few words about myself..."
          className="resize-none flex w-full h-full p-2"
          name="edit-about-user"
          id="edit-about-user"
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={text}
          onChange={handleChange}
        ></textarea>
        {isFocus ? (
          ""
        ) : (
          <BiPencil
            className={`absolute ${
              text.length ? "bottom-2 right-2" : "top-[10px] left-40"
            }`}
          />
        )}
      </label>

      <div className="flex justify-between p-2 w-full bg-white rounded-md border-2 border-gray-300">
        {images.map((items, index) => {
          return items ? (
            <div key={index}>
              <ImageTemp
                alt={`user-${index}`}
                index={index}
                src={items}
                className="h-full object-center object-cover"
                containerClass="w-13 h-13 bg-yellow-500 rounded-md overflow-hidden"
              />
            </div>
          ) : (
            <Link
              key={index}
              href="/edit"
              className="w-13 h-13 flex justify-center items-center flex-col rounded-md border-1 border-gray-500 bg-white"
            >
              <span className="text-[9px]">Add Photo</span>
              <ImageTemp src={a} className="w-6" alt={`user-${index}`} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default EditUser;
