import hand from "../../../assets/Hand Money.png";
import profilePhoto from "../../../assets/Ellipse49.png";
import { useState } from "react";

const DisplayCommentUser = () => {
  const [subscribing, setSubscribing] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <div className="mt-3 p-4 w-full flex items-center">
        {/* User Image */}
        <div className="relative mr-2">
          <img
            src={profilePhoto}
            alt="userName"
            className=" h-12 w-12 sm:h-16 sm:w-16 rounded-full object-cover"
          />
        </div>
        {/* User Info */}
        <div>
          <div className="text-start">
            <p className="sm:text-xl font-bold text-[#1C1E25] text-nowrap">
              User Name
            </p>
          </div>
          <div className="text-start">
            <p className="sm:text font-semibold text-[#454853] text-nowrap">
              #hashtag
            </p>
          </div>
          <div className="text-start">
            <p className="mt-1 text-[#5F6064] text-sm text-nowrap">
              <span className="text-[#454853] font-semibold">Public:</span>{" "}
              worldwide{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-3 w-full">
        <button className={`border rounded px-4 lg:px-4 py-2 ${subscribing ? "border-blue-500 bg-blue-500  text-white" : "border-[#FB3C5B] text-[#FB3C5B]"} font-semibold grow`}
          onClick={() => setSubscribing((prev) => !prev)}
        >
          {subscribing ? "SubsCribed" : "SubsCribe"}

        </button>
        <div className="flex justify-center items-center sm:w-[60px] sm:h-[40px] w-[40px] h-[25px] rounded bg-[#FB3C5B] cursor-pointer">
          <img src={hand} alt="hand" />
        </div>
      </div>
    </div>
  );
};

export default DisplayCommentUser;