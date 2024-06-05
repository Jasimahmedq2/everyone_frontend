import { Outlet } from "react-router-dom";
import HomeComment from "./comment/homeComment";
import FeedContent from "./feed/FeedContent";
import Videos from "./feed/videoScreen/videos";
const HomeAndThreadScreen = () => {
    return (
        <>
            {/* middle threads video timeline  */}
            <FeedContent />
            {/* right side   */}
            <HomeComment />
            <Outlet />
        </>
    )
}

export default HomeAndThreadScreen;