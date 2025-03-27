import { IoIosSearch } from "react-icons/io";

const Search = () => {
  return (
    <div>
      <label className="flex items-center min-w-35 border-2 focus-within:border-blue-500 border-gray-300 rounded-full">
        <IoIosSearch className="ml-5 mr-1 text-xl" />
        <input
          id="search2"
          type="text"
          placeholder="Search"
          className="w-full text-[14px] mr-3 py-1 pl-2 focus:outline-none"
        />
      </label>
    </div>
  );
};

export default Search;
