import { FaFilter } from "react-icons/fa";

const Filter = () => {
  return (
    <div>
      <label className="flex items-center w-35 border-1  focus-within:border-blue-500 border-gray-300 rounded-full">
        <FaFilter size={20} className="ml-5 mr-1" />
        <input
        id="search"
          type="search"
          placeholder="Filter"
          className="w-full text-[14px] mr-3  py-1 pl-2 focus:outline-none"
        />
      </label>
    </div>
  );
};

export default Filter;
