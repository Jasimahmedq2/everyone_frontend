/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
// import { useAuth } from "../../../../Context/AuthProvider";
import VideoCard from "./VideoCard";

const Reel = ({ post, displayFile }) => {
  const { setCommentsById } = useSelector((state) => state.auth);
  return (
    <div className="p-4">
      <VideoCard
        videoSrc={displayFile}
        author="Author Name"
        likes="123"
        comments="45"
        height="h-[748px]"
        width="w-full"
        type="reel"
        setCommentsById={setCommentsById}
      />
      {/* Render more InstagramReelCards as needed */}
    </div>
  );
};

export default Reel;

// http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4
