import { Tabs, Tab } from "@nextui-org/react";
import Videos from "../feed/videoScreen/videos";
import Reel from "../feed/videoScreen/reel";
import CommentCard from "./commentCard";
import { useState } from "react";
// import { useAuth } from "../../../Context/AuthProvider";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const TabsComponents = () => {
  const variants = ["underlined"];
  let [stateShow, setStateShow] = useState("posts");
  console.log('stateShow:', stateShow);
  const { commentsById } = useSelector((state) => state.auth)

  useEffect(() => {
    if (commentsById) {
      setStateShow("comments")
    }
  }), [commentsById];

  console.log('commentsById-On-leftSide:', commentsById);

  return (
    <div className="flex justify-between flex-wrap gap-4 w-full">
      <div className="flex justify-center items-center w-full text-[#64748B] font-semibold pt-4">
        <div className={`p-2 border-b ${stateShow == "comments" ? "border-red-700" : "border-white cursor-pointer"} `}
          onClick={() => setStateShow("comments")}
        >
          <h6 className="p-2 text-center">Comments {"12,345"}</h6>
        </div>
        {/* <div className={`p-2 border-b ${stateShow == "posts" ? "border-red-700" : "border-white cursor-pointer"} `}
          onClick={() => setStateShow("posts")}
        >
          <h6 className="p-2">Creator Posts</h6>
        </div> */}
      </div>
      <div>
        
         
            <CommentCard />
            
           
       

      </div>
    </div>
  );
};

export default TabsComponents;
