
import { interestData } from "./Data";
import { FaEdit } from "@node_modules/react-icons/fa";
import ImageTemp from "@app/templates/ImageTemp";

const Interest = () => {
  return (
    <div className="w-65 mt-4 rounded-md h-80 block border-1 bg-white p-4">
    <h1 className="flex justify-between">
      <p className="text-sm font-bold">My Interest</p>
      <button title="edit" className="cursor-pointer">
        <FaEdit size={15} />
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