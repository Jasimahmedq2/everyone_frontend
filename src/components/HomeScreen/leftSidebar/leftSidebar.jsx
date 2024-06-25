import { useSelector } from "react-redux";
import Inboxes from "../messages/Inboxes";
import MessageList from "../messages/messageList";
import MessageSearch from "../messages/messageSearch";
import SidebarActiveStatus from "./sidebarActiveStatus";
import Drawer from "./Drawer";

const LeftSidebar = () => {

  const { user } = useSelector((state) => state.auth)

  return (
    <div className="w-[25%] sm:max-h-screen overflow-y-auto text-black px-2">
      {
        !user ?
          <div>

          </div>
          :
          <>
            {/* <div className="relative">
              <span className="ml-4 bg-white z-10 px-1 absolute top-[-14px]"> Your Status</span>
              <SidebarActiveStatus />
            </div> */}

            {/* message search */}

            {/* <MessageSearch /> */}

            {/* all inboxes select */}
            {/* <Inboxes /> */}
            {/* user list */}
            {/* <MessageList /> */}
            <Drawer />
          </>
      }
    </div>
  );
};

export default LeftSidebar;
