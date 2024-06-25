/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

export const SideIcons = () => {
  const [selectedContent, setSelectedContent] = useState("");

  const handleImageClick = (content) => {
    setSelectedContent(content);
  };
  return (
    <div>
      <div className="flex flex-col max-w-[55px]">
        <div className="flex flex-col justify-center p-1.5 w-full rounded-lg bg-neutral-100">
          <div className="flex gap-2">
            <div className="shrink-0 my-auto w-1 bg-rose-500 rounded-3xl h-[19px]" />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7324c101e0087d4340ec23d09d0a275081941ff3d3d679a2559190094e53d79b?apiKey=bef308c750544a03a3bf2b5acb540117&"
              className="shrink-0 aspect-square w-[30px]"
              onClick={() => handleImageClick("Content for first image")}
            />
          </div>
        </div>
        <div className="flex flex-col justify-center p-1.5 mt-3.5 w-full bg-white rounded-lg">
          <div className="flex gap-2">
            <div className="shrink-0 my-auto w-1 bg-white rounded-3xl h-[19px]" />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d2ada0394d0a1bccd412dc7b91528a447393d522c7631a0837fb78142e458a3b?apiKey=bef308c750544a03a3bf2b5acb540117&"
              className="shrink-0 aspect-square w-[30px]"
              onClick={() => handleImageClick("Content for second image")}
            />
          </div>
        </div>
        <div className="flex flex-col justify-center p-1.5 mt-3.5 w-full bg-white rounded-lg">
          <div className="flex gap-2">
            <div className="shrink-0 my-auto w-1 bg-white rounded-3xl h-[19px]" />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d17f5253ab830b8bbdc6cae3500de64468f25b3e555990e9fbf90fd2c5b0c3d1?apiKey=bef308c750544a03a3bf2b5acb540117&"
              className="shrink-0 aspect-square w-[30px]"
              onClick={() => handleImageClick("Content for third image")}
            />
          </div>
        </div>
        <div className="flex flex-col justify-center p-1.5 mt-3.5 w-full bg-white rounded-lg">
          <div className="flex gap-2">
            <div className="shrink-0 my-auto w-1 bg-white rounded-3xl h-[19px]" />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/98d67d6acfca19cafecf628e9a65110f205bb610fedcaf278548aadbecdecec9?apiKey=bef308c750544a03a3bf2b5acb540117&"
              className="shrink-0 aspect-square w-[30px]"
              onClick={() => handleImageClick("Content for fourth image")}
            />
          </div>
        </div>
        <div className="flex flex-col justify-center p-1.5 mt-3.5 w-full bg-white rounded-lg">
          <div className="flex gap-2">
            <div className="shrink-0 my-auto w-1 bg-white rounded-3xl h-[19px]" />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/86fb82b16083556c0d74b13777e9a01ffc61d1b29033ee1443e20b638945139b?apiKey=bef308c750544a03a3bf2b5acb540117&"
              className="shrink-0 aspect-square w-[30px]"
              onClick={() => handleImageClick("Content for fifth image")}
            />
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/590b63f357c1bb1e33cf0be492a8b1f91e0660bf8d011ff6b05217548b30ec8a?apiKey=bef308c750544a03a3bf2b5acb540117&"
          className="self-center mt-64 w-5 aspect-[0.91] fill-zinc-600"
          onClick={() => handleImageClick("Content for sixth image")}
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/01e826b8334f92f4e6ffc4967c416fd14981b57be0758471ce75bc17a9074079?apiKey=bef308c750544a03a3bf2b5acb540117&"
          className="self-center mt-4 w-5 aspect-[0.91] fill-zinc-600"
          onClick={() => handleImageClick("Content for seventh image")}
        />

        <div className="mt-4 p-2 text-center bg-gray-100 rounded-lg">
          {selectedContent && <p>{selectedContent}</p>}
        </div>
      </div>
    </div>
  );
};
