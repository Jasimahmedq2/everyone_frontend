import { useState } from "react";
import { PostInputModal } from "./PostInputModal";
import { useGetSinleProfileQuery } from "../../../redux/features/profile/profile";
import { useSelector } from "react-redux";

const PostInputField = () => {
  const [postType, setPostType] = useState("common");
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { loginInfo } = useSelector((state) => state.auth);

  const { data, isLoading } = useGetSinleProfileQuery(loginInfo?.token);

  const profile = data?.data;

  const postTypeChangeAndOpenModal = (value) => {
    setPostType(value);
    setIsOpenModal(true);
  };

  return (
    <div className="p-4">
      <div className="mt-3 p-2 w-full">
        <div className="relative flex items-center text-black">
          {/* User Image */}
          <div className="relative mr-2">
            <img
              src={
                profile?.image ||
                "https://everyone-media.s3.us-east-1.amazonaws.com/1716552226980-images.jpeg"
              }
              alt="userName"
              className=" h-12 w-12 sm:h-16 sm:w-16 rounded-full object-cover"
            />
            <div></div>
          </div>
          {/* User Info */}
          <div className="grow">
            <input
              className="bg-white border rounded-xl p-4 w-full"
              type="text"
              placeholder="What's on your mind ? 😎"
              onClick={() => setIsOpenModal(true)}
            />
            <div className="flex items-center gap-2">
              <button
                className={`border rounded mt-2 px-6 py-2 "border-blue-500 bg-blue-500 text-white font-semibold`}
                onClick={() => postTypeChangeAndOpenModal("pull")}
              >
                Pull
              </button>
            </div>
          </div>
        </div>
      </div>
      {isOpenModal && (
        <PostInputModal
          postType={postType}
          setPostType={setPostType}
          isOpenModal={isOpenModal}
          setIsOpenModal={setIsOpenModal}
        />
      )}
    </div>
  );
};

export default PostInputField;
