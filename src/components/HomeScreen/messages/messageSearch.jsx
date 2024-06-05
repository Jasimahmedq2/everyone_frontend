import { FaRegEdit } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

const MessageSearch = () => {
  return (
    <>
      <div className="flex justify-between items-center mt-6 sm:mt-8">
        <h4 className="text-md font-medium sm:text-xl sm:font-medium text-[#1C1E25] px-2">
          Messages
        </h4>
        <div className="flex space-x-4">
          <span className="cursor-pointer">
            {" "}
            <FaRegEdit className="text-xl" />
          </span>
          <span className="cursor-pointer">
            {" "}
            <CiHeart className="text-xl" />
          </span>
        </div>
      </div>

      {/* search  */}
      <div className="relative mt-2 rounded-md">
        <input
          type="text"
          className="bg-[#F9F9F9] focus:outline-none focus:shadow-outline border-transparent rounded py-2 px-4 pl-10 h-14 w-full"
          placeholder="Search..."
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg
            className="h-6 w-6 text-gray-600"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M21 21l-4.98-4.98M17 10a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default MessageSearch;
