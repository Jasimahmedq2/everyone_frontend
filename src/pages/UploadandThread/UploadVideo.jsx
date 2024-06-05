import * as React from "react";


export const UploadVideo = () => {
  const [selectedVideo, setSelectedVideo] = React.useState(null);

  const handleVideoChange = (event) => {
    const file = event.target.files[0];
    setSelectedVideo(file);
  };
  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center self-center px-16 py-20 mt-16 w-full text-sm text-center capitalize bg-blue-50 max-w-[1332px] rounded-[30px] text-zinc-900 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col items-center mt-3 mb-5 max-w-full w-[856px]">
          <div className="text-3xl font-bold text-zinc-600 w-[367px]">
            Select the video which you want to upload
          </div>
          <div className="flex flex-col justify-center self-stretch mt-14 bg-white max-md:mt-10 max-md:max-w-full">
      <div className="flex justify-center items-center px-16 py-20 rounded-3xl border-dashed border-[3px] border-zinc-600 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col justify-center items-center mt-5 mb-5 max-w-full w-[280px]">
         <div className=""> <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d539bab24129bd1143c3362e4de342e91ec2ea2a7f90fb11de0014bd2f6eef0?apiKey=bef308c750544a03a3bf2b5acb540117&"
            className="max-w-full aspect-square w-[148px]"
            alt="Video Icon"
          /></div>
          <div className="self-stretch mt-8 text-2xl font-semibold">
            {selectedVideo ? selectedVideo.name : 'Drag and drop video file'}
          </div>
          <div className="mt-5">OR</div>
          <label htmlFor="videoInput">
            <div className="justify-center items-center px-16 py-4 mt-10 max-w-full text-white whitespace-nowrap bg-rose-600 rounded-lg w-[191px] max-md:px-5 cursor-pointer">
              Browse
            </div>
          </label>
          <input
            type="file"
            id="videoInput"
            accept="video/*"
            onChange={handleVideoChange}
            className="hidden"
          />
        </div>
      </div>
    </div>
          <div className="mt-12 font-medium w-[307px] max-md:mt-10">
            MP4 or WebM 720x1280 resolution or higher Up to 10 minutes Less than
            10 GB
          </div>
        </div>
      </div>
    </div>
  );
}