/* eslint-disable no-unused-vars */
import { useSidebar } from "../../../hooks/use-sidebar"
import { LuArrowLeftFromLine } from "react-icons/lu";
import { MdMenu } from "react-icons/md";

export const Toggle = () => {
  const { collapsed, onExpand, onCollapse } = useSidebar((state) => state);

  return (
    <div className="flex justify-between">
      <div
        onClick={onExpand}
        className="p-3 cursor-pointer border"
      >
        <MdMenu className="h-8 w-8" />
      </div>

      {!collapsed && (
        <div className="p-3 pt-0 pl-6 mb-2 flex items-center w-full">
          <p className="font-semibold text-primary">Create post</p>
          <button onClick={onCollapse} className="h-auto p-2 ml-auto">
            <LuArrowLeftFromLine className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
};
