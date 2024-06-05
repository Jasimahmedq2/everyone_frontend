/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import {
  useFollowUserMutation,
  useGetFollowStatusQuery,
  useUnfollowUserMutation,
} from "../../../redux/features/follow/followApi";
import { useSelector } from "react-redux";
import { formatDistanceToNow } from "date-fns";

const DisplayUser = ({ user, post }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const timeAgo = formatDistanceToNow(new Date(post?.createdAt), {
    addSuffix: true,
  });

  const { loginInfo, user: tokenUser } = useSelector((state) => state.auth);

  const [followUser, { isLoading: followLoading }] = useFollowUserMutation();
  const [unfollowUser, { isLoading: unfollowLoading }] =
    useUnfollowUserMutation();

  const { data, isLoading: statusLoading } = useGetFollowStatusQuery({
    token: loginInfo?.token,
    userId: user?._id,
  });

  useEffect(() => {
    if (data?.data === "following") {
      setIsFollowing(true);
    } else {
      setIsFollowing(false);
    }
  }, [data]);

  const handleFollow = async (userId) => {
    console.log({ userId, h: "from follow" });
    try {
      await followUser({
        token: loginInfo?.token,
        userId: userId,
      });
      setIsFollowing(true);
    } catch (error) {
      console.error("Error following user:", error);
    }
  };

  const handleUnfollow = async (userId) => {
    console.log({ userId, un: "from unfollow" });
    try {
      await unfollowUser({
        token: loginInfo?.token,
        userId: userId,
      });
      setIsFollowing(false);
    } catch (error) {
      console.error("Error unfollowing user:", error);
    }
  };

  const followButtonClick = (userId) => {
    if (isFollowing) {
      handleUnfollow(userId);
    } else {
      handleFollow(userId);
    }
  };

  return (
    <div className="flex justify-between items-center p-4">
      <div className="mt-3 p-2 w-full">
        <div className="relative flex items-center">
          {/* User Image */}
          <div className="relative mr-2">
            <img
              src={
                post?.image ||
                "https://everyone-media.s3.us-east-1.amazonaws.com/1716552226980-images.jpeg"
              }
              alt={user?.name}
              className="h-12 w-12 sm:h-16 sm:w-16 rounded-full object-cover"
            />
          </div>
          {/* User Info */}
          <div>
            <div className="flex items-center space-x-2">
              <p className="sm:text-xl font-bold text-[#1C1E25] text-nowrap">
                {user?.name} Name
              </p>
            </div>
            <div className="text-start">
              <p className="mt-1 text-[#5F6064] text-md font-md text-nowrap">
                {post?.text.length > 18
                  ? post?.text?.substring(0, 18) + "..."
                  : post?.text}
              </p>
              <p className="mt-1 text-[#5F6064] text-md font-md text-nowrap">
                {timeAgo}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        {tokenUser?.userId !== user?._id && (
          <button
            className={`border rounded py-2 ${
              isFollowing
                ? "border-blue-500 bg-blue-500 text-white px-4"
                : "border-[#FB3C5B] text-[#FB3C5B] px-6"
            } font-semibold`}
            onClick={() => followButtonClick(user?._id)}
            disabled={followLoading || unfollowLoading || statusLoading}
          >
            {statusLoading ? "loading..." : isFollowing ? "Unfollow" : "Follow"}
          </button>
        )}
      </div>
    </div>
  );
};

export default DisplayUser;
