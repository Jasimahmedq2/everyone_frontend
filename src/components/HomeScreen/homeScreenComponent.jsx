import { Outlet } from "react-router-dom";
import LeftSidebar from "./leftSidebar/leftSidebar";

const HomeScreenComponent = () => {
  return (
    <div>
      <div className="flex justify-between px-4">
        <LeftSidebar />
        <Outlet />
      </div>
      {/* <Videos /> */}
    </div>
  );

};

export default HomeScreenComponent;