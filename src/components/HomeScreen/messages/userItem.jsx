/* eslint-disable react/prop-types */
import { FaCircle } from "react-icons/fa";
// eslint-disable-next-line react/prop-types
const UserItem = ({ userProfile, userName, time, message, userImage }) => {
  return (
    <div className="mt-3 p-2 bg-[#F9F9F9] rounded-md w-full">
      {/* Render user image and active bullet point icon */}
      <div className="relative flex items-center">
        {/* User Image */}
        <div className="relative mr-2 w-20">
          <img
            src={userImage}
            alt={userName}
            className="h-[60px] w-[60px] rounded-full"
          />
          {/* Active bullet point icon */}
          {userProfile === "active" && (
            <div className="absolute bottom-2 right-1 -mr-1 -mb-1">
              <FaCircle className="h-3 w-3 text-green-500" />
            </div>
          )}
        </div>
        {/* User Info */}
        <div className="w-full">
          <div className="flex justify-between items-center space-x-2">
            <p className="sm:text-md font-semibold text-[#232323] text-nowrap">
              {userName.length > 10
                ? userName.substring(0, 10) + "..."
                : userName}
            </p>
            <span className="text-gray-500 text-sm text-nowrap">{time}</span>
          </div>
          <div className="flex justify-between items-center space-x-2">
            <p className="mt-1 text-[393939] text-sm text-nowrap">
              jasim:{" "}
              {message.length > 10 ? message.substring(0, 10) + "..." : message}
            </p>
            <div className="bg-red-400 h-5 w-5 rounded-full p-2">
              <span className="text-white text-sm font-semibold h-full flex items-center justify-center">
                2
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
