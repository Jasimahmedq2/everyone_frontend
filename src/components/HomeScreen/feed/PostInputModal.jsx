/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { FiTrash, FiPlusCircle } from "react-icons/fi";
import { useCreatePostMutation } from "../../../redux/features/post/postApi";
import { useSelector } from "react-redux";

export const PostInputModal = ({
  postType,
  setPostType,
  isOpenModal,
  setIsOpenModal,
}) => {
  const [publicPrivet, setPublicPrivet] = useState("public");
  const [postTitle, setPostTitle] = useState("");
  const [pullOptions, setPullOptions] = useState([""]);
  const [dragActive, setDragActive] = useState(false);
  const [files, setFiles] = useState(null);

  const { loginInfo } = useSelector((state) => state.auth);

  const [createPost, { isLoading, isError, isSuccess }] =
    useCreatePostMutation();

  const [loading, setLoading] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDragEnter = () => {
    setDragActive(true);
  };

  const handleDragLeave = () => {
    setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    setFiles(e.dataTransfer.files);
    console.log({ e });
  };

  const handleFileChange = (e) => {
    setFiles(e.target.files[0]);
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...pullOptions];
    newOptions[index] = value;
    setPullOptions(newOptions);
  };

  const addOption = () => {
    setPullOptions([...pullOptions, ""]);
  };

  const removeOption = (index) => {
    const newOptions = pullOptions.filter((_, i) => i !== index);
    setPullOptions(newOptions);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("access_post", publicPrivet);
    formData.append("text", postTitle);

    if (files) {
      formData.append("file", files);
    }

    if (postType === "pull") {
      if (pullOptions.length < 2) {
        return alert("Pull Options must be 2 or more.");
      }
      formData.append("post_type", postType);
      pullOptions.forEach((option, index) => {
        formData.append(`pull[${index}]`, option);
      });
    }

    // if (postType === "reel") {
    //   formData.append("post_type", postType);
    // }

    const newData = {
      token: loginInfo?.token,
      info: formData,
    };

    console.log({ newData });

    await createPost(newData);
    setIsOpenModal(false);
  };

  const searchBarInputClass =
    "p-2 border border-gray-200 dark:border-gray-700 rounded-md bg-gray-100 dark:bg-gray-900 text-slate-700 dark:text-slate-400";
  const addButtonClass =
    "shrink-0 h-10 w-10 bg-primary/10 border border-primary dark:border-darkPrimary hover:bg-primary dark:hover:bg-darkPrimary hover:text-white rounded-full grid place-items-center text-primary dark:text-darkPrimary transition-all duration-500 hover:scale-100 scale-90";
  const removeButtonClass =
    "shrink-0 h-10 w-10 bg-primary/10 border border-red-600 hover:bg-red-600 text-red-600 hover:text-white rounded-full grid place-items-center transition-all duration-500 hover:scale-100 scale-90";

  const modalClose = () => {
    setIsOpenModal((prev) => !prev);
    setPostType("reel");
  };

  return (
    <div
      className={`transition-all duration-300 ${
        isOpenModal ? "scale-100" : "scale-0"
      } fixed top-0 bottom-0 left-0 right-0 w-full h-full bg-black/70 flex items-center justify-center z-[100] overflow-y-auto`}
      onClick={(e) => {
        if (e.target !== e.currentTarget) {
          return;
        }
        modalClose();
      }}
    >
      <div className="px-11 py-9 bg-white rounded-3xl max-w-[970px] max-md:px-5 overflow-y-auto max-h-screen hide-scrollbar">
        <div className="space-y-2 max-md:gap-0 min-w-[280px] xl:min-w-[420px] 2xl:min-w-[620px] text-black">
          <div>
            <select
              name="publicPrivet"
              id="publicPrivet"
              className={searchBarInputClass}
              aria-label="Select access level"
              value={publicPrivet}
              onChange={(e) => setPublicPrivet(e.target.value)}
            >
              <option disabled value="">
                Choose One
              </option>
              <option value="public">Public</option>
              <option value="privet">Private</option>
            </select>
          </div>
          <textarea
            className="bg-white border rounded-xl p-4 w-full min-h-28"
            type="text"
            placeholder="What's on your mind ? 😎"
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
          ></textarea>

          <div>
            {postType === "reel" || postType === "common" || !postType ? (
              <label
                htmlFor="images"
                className={`drop-container ${dragActive ? "drag-active" : ""}`}
                onDragOver={handleDragOver}
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <span className="drop-title">Drop files here</span>
                or
                <input
                  type="file"
                  id="images"
                  accept="image/*,application/pdf,video/*"
                  className="file-input cursor-pointer"
                  onChange={handleFileChange}
                />
              </label>
            ) : (
              <div className="flex flex-col w-full">
                <label className="pt-2 dark:text-slate-300">
                  Pull Options:
                </label>
                <div>
                  {pullOptions.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 mb-5">
                      <input
                        className={searchBarInputClass}
                        type="text"
                        value={item}
                        onChange={(e) =>
                          handleOptionChange(index, e.target.value)
                        }
                      />
                      <button
                        type="button"
                        onClick={() => removeOption(index)}
                        className={removeButtonClass}
                      >
                        <FiTrash size="20" title="Remove This Option" />
                      </button>
                    </div>
                  ))}
                  <div>
                    <button
                      type="button"
                      onClick={addOption}
                      className={addButtonClass}
                      disabled={loading}
                    >
                      <FiPlusCircle size="20" title="Add Another Option" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="pt-5">
            <button
              disabled={isLoading}
              className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
              onClick={handleSubmit}
            >
              {isLoading ? "loadin..." : "Submit"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
