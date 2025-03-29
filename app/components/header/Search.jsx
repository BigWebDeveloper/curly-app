import { IoIosSearch } from "react-icons/io";

const Search = () => {
  return (
    <div>
      <label className="flex items-center  min-w-35 border-1 focus-within:border-blue-500  border-gray-300 rounded-full">
        <IoIosSearch className="dark:text-gray-800 ml-5 mr-1 text-xl" />
        <input
          id="search2"
          type="text"
          placeholder="Search"
          className="w-full dark:placeholder-gray-800 dark:text-gray-800  text-[14px] mr-3 py-1 pl-2 focus:outline-none"
        />
      </label>
    </div>
  );
};

export default Search;
