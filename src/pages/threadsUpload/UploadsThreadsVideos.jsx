import React from 'react';

const UploadsThreadsPhotos = () => {
    return (
        <div>
           <div className="flex justify-center items-center px-16 py-20 text-sm text-center capitalize bg-blue-50 rounded-[30px] text-zinc-900 max-md:px-5">
        <div className="flex flex-col items-center mt-3 max-w-full w-[856px]">
          <div className="text-3xl font-bold text-zinc-600 w-[367px]">
            Select the video which you want to upload
          </div>
          <div className="flex flex-col justify-center self-stretch mt-14 bg-white max-md:mt-10 max-md:max-w-full">
            <div className="flex justify-center items-center px-16 py-20 rounded-3xl border-dashed border-[3px] border-zinc-600 max-md:px-5 max-md:max-w-full">
              <div className="flex flex-col items-center mt-5 mb-5 max-w-full w-[280px]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d539bab24129bd1143c3362e4de342e91ec2ea2a7f90fb11de0014bd2f6eef0?apiKey=bef308c750544a03a3bf2b5acb540117&"
                  className="max-w-full aspect-square w-[148px]"
                />
                <div className="self-stretch mt-8 text-2xl font-semibold">
                  Drag and drop video file
                </div>
                <div className="mt-5">OR</div>
                <div className="justify-center items-center px-16 py-4 mt-10 max-w-full text-white whitespace-nowrap bg-rose-600 rounded-lg w-[191px] max-md:px-5">
                  Browse
                </div>
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
};

export default UploadsThreadsPhotos;