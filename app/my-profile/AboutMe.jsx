
import ImageTemp from "@app/templates/ImageTemp";
import { AboutMeData } from "./Data";

const AboutMe = () => {
  return (
    <div className="w-75 mt-4 rounded-md h-85 border-1 border-gray-300 shadow-sm bg-white py-4 px-5">
      <h1 className="text-sm font-bold">About Me</h1>
      <div className="grid gap-2 mt-4">
        {AboutMeData.map((items, index) => {
          return (
            <p className=" flex gap-1 items-center" key={index}>
              <ImageTemp
                alt={items.alt}
                src={items.src}
                className="h-full"
                containerClass={`${items.color} p-1 rounded-full w-[20px] h-[20px]  overflow-hidden`}
              />
              <span className="text-sm block w-25">{items.name}:</span>
              <span className="text-sm font-bold">{items.value}</span>
            </p>
            
          );
        })}
      </div>
    </div>
  );
};

export default AboutMe;
