import VideoCard from "./VideoCard";

const Videos = () => {
  return (
    <div className=" p-4">
      <VideoCard
        videoSrc="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        title="Video Title Here"
        author="Author Name"
        likes="123"
        comments="45"
        width="w-full sm:w-5/6"
        height="h-[550px]"
        type="normal"
      />
      {/* Render more InstagramReelCards as needed */}
    </div>
  );
};

export default Videos;