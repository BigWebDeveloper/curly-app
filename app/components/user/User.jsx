import { postData } from "./data";
import ImageTemp from "@app/templates/ImageTemp";
import { MdVerified } from "react-icons/md";
import Link from "@node_modules/next/link";
import Likes from "./Likes";

const User = () => {
  return (
    <div
      id="post-section"
      className="flex gap-y-10 gap-x-5 flex-wrap max-sm:justify-center justify-baseline w-full h-full mt-10"
    >
      {postData.map((items, index) => {
        return (
          <section
            id="user"
            key={index}
            className="relative w-62 bg-white rounded-2xl overflow-hidden"
          >
            <ImageTemp
              src={items.banner}
              alt="banner"
              className="object-center object-cover h-full"
              containerClass="w-full h-20 overflow-hidden "
            />
            <ImageTemp
              src={items.profile}
              alt="profile"
              className="object-center object-cover h-full"
              containerClass="w-16 h-16 top-12 left-1/2 -translate-x-1/2 rounded-full overflow-hidden border-3 border-white absolute"
            />
            <div className="py-2 dark:text-gray-800 px-4 flex flex-col justify-between h-45 bg-white gap-2">
              <div className="flex justify-between text-[12px] font-medium">
                <div>
                  <p>
                    {items.name.split(" ")[0]}, {items.age}
                  </p>
                  <p>{items.state}</p>
                </div>
                <div className="text-right">
                  <p>{items.match} Match</p>
                  <p>
                    {items.addressVerification && (
                      <span className="flex items-center">
                        <MdVerified className="text-blue-500" />{" "}
                        <span>Verified Address</span>
                      </span>
                    )}
                  </p>
                </div>
              </div>
              <p className="text-[11px] mb-auto">
                {items.bio ? items.bio : "No Bio available"}
              </p>
              <div className=" flex items-center justify-between">
                <Link
                  className="bg-red-500 text-white rounded-2xl py-1 px-2 text-[11px]"
                  href={"/more-info"}
                >
                  More info
                </Link>
                <Likes />
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default User;
