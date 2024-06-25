/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useSidebar } from "../../../hooks/use-sidebar"

export const ShowType = ({ showType }) => {
  const { collapsed } = useSidebar((state) => state);
  return (
    <>
      {!collapsed && (
        <>
          {showType === "user" && <div> hey ami user</div>}
          {showType === "plus" && <div> hey ami plus</div>}
          {showType === "call" && <div> hey ami call</div>}
          {showType === "message" && <div> hey ami message</div>}
          {showType === "light" && <div> hey ami light</div>}
          {showType === "tv" && <div> hey ami tv</div>}
        </>
      )}
    </>
  );
};
