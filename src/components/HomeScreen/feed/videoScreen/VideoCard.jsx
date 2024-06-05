/* eslint-disable react/prop-types */
import { useState } from "react";
import heart from "../../../../assets/heart.png";
import { BsThreeDots } from "react-icons/bs";
import repeat from "../../../../assets/repeat.png";
import message from "../../../../assets/message-text.png";
import frame from "../../../../assets/Frame.png";
import bookmark from "../../../../assets/Bookmark.png";

const VideoCard = ({
  videoSrc,
  title,
  author,
  likes,
  comments,
  height,
  width,
  type,
  setCommentsById
}) => {
  const [clicked, setClicked] = useState(false);

  const handleClicked = (text) => {
    if (text === "1") {
      setClicked("1");
    } else if (text === "2") {
      setClicked("2");
    } else if (text === "3") {
      setClicked("3");
    } else if (text === "4") {
      setClicked("4");
    } else if (text === "5") {
      setClicked("5");
    }
  };

  const handleCommentClick = (value) => {
    handleClicked(value);
    dispatch(setCommentsById("commentId"));
  }

  return (
    <div
    className={`w-[30vw] h-[50vw] mx-auto rounded overflow-hidden shadow-lg relative`}
    >
      <video
        className="w-full h-full object-cover"
        muted
        controls
        alt={title}
      >
        <source src={videoSrc} type="video/mp4" />
        Your Browser does not support video tag
      </video>
    
      <div className="absolute top-0 flex space-x-4 z-50 items-center bg-black/80 w-full p-1">
        <img
          className="h-[27px] w-[27px] border-4 border-red-500 rounded-full object-cover"
          src={heart}
          alt=""
        />
        <p className="text-white text-sm text-nowrap">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      {/* <div className="absolute top-10 z-10 right-6 cursor-pointer">
        <div className="flex justify-center items-center cursor-pointer w-16 h-16 sm:w-[47px] sm:h-[47px] rounded-full">
          <BsThreeDots className="text-white text-2xl" />
        </div>
      </div> */}
      <div
        className={`absolute  ${type === "reel" ? "top-20 sm:top-44" : "top-5 sm:top-8"
          }  z-10 right-2 p-4 space-y-4`}
      >
        <div>
          <div
            onClick={() => handleClicked("1")}
            className={`flex justify-center items-center cursor-pointer w-16 h-16 sm:w-[47px] sm:h-[47px] rounded-full ${clicked === "1" ? "bg-[#FB3C5B]" : "bg-white/30"
              }  `}
          >
            <img className="" src={heart} alt="" />
          </div>
          <p className="text-white text-center">11.9k</p>
        </div>

        {/* <div>
          <div
            onClick={() => handleClicked("2")}
            className={`flex justify-center items-center cursor-pointer w-16 h-16 sm:w-[47px] sm:h-[47px] rounded-full ${clicked === "2" ? "bg-[#FB3C5B]" : "bg-white/30"
              }  `}
          >
            <img className="" src={repeat} alt="" />
          </div>
          <p className="text-white text-center">11.9k</p>
        </div> */}
        <div>
          <div
            onClick={() => handleCommentClick("3")}
            className={`flex justify-center items-center cursor-pointer w-16 h-16 sm:w-[47px] sm:h-[47px] rounded-full ${clicked === "3" ? "bg-[#FB3C5B]" : "bg-white/30"
              }  `}
          >
            <img className="" src={message} alt="" />
          </div>
          <p className="text-white text-center">10.9k</p>
        </div>
        <div>
          <div
            onClick={() => handleClicked("4")}
            className={`flex justify-center items-center cursor-pointer w-16 h-16 sm:w-[47px] sm:h-[47px] rounded-full ${clicked === "4" ? "bg-[#FB3C5B]" : "bg-white/30"
              }  `}
          >
            <img className="" src={frame} alt="" />
          </div>
          <p className="text-white text-center">11.9k</p>
        </div>
        <div>
          <div
            onClick={() => handleClicked("5")}
            className={`flex justify-center items-center cursor-pointer w-16 h-16 sm:w-[47px] sm:h-[47px] rounded-full ${clicked === "5" ? "bg-[#FB3C5B]" : "bg-white/30"
              }  `}
          >
            <img className="" src={bookmark} alt="" />
          </div>
          <p className="text-white text-center">11.9k</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
