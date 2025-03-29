
import { interestData } from "./Data";
import { LiaEdit } from "react-icons/lia";
import ImageTemp from "@app/templates/ImageTemp";

const Interest = () => {
  return (
    <div className="w-75 max-sm:w-full rounded-md h-85 border-1 border-gray-300 shadow-sm bg-white py-4 px-5">
    <h1 className="flex justify-between">
      <p className="text-sm font-bold">My Interest</p>
      <button title="edit" className="cursor-pointer">
        <LiaEdit size={18} />
      </button>
    </h1>
    <div className="grid grid-cols-4 mt-4  gap-2 flex-wrap">
      {interestData.map((items, index) => {
        return (
          <p key={index} className={`flex flex-col items-center`}>
            <ImageTemp
              alt={items.alt}
              src={items.src}
              className="h-full"
              containerClass={`${items.color} p-2 rounded-full w-11 h-11 overflow-hidden`}
            />
            <span className="text-[10px] text-center">{items.name}</span>
          </p>
        );
      })}
    </div>
  </div>
  )
}

export default Interest