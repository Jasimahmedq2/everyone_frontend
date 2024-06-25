/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Toggle } from "./toggle";
import { SideIcons } from "./sideIcons";
import { ShowType } from "./showType";


const Drawer = () => {
  const [showType, setShowType] = useState("")

  
  return (
    <div>
      <div className="bg-[#ffffff] h-[746px] w-[314px] shadow-md">
        <div>
        <Toggle/>
        </div>
        <div className="flex ">
        <SideIcons setShowType={setShowType}/>
        <ShowType showType={showType}/>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
