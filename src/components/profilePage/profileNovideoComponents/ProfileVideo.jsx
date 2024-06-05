import React from 'react';
import { Link } from 'react-router-dom';

const ProfileVideo = () => {
  return (
    <div className='mt-10'>
      <div className="flex flex-col items-center px-5 text-zinc-900">

        <div className="flex items-center justify-center h-full">
          <div className="flex flex-col items-center px-5 text-zinc-900">
            <div className="flex gap-0 self-stretch text-2xl whitespace-nowrap max-md:flex-wrap max-md:pr-5">
              <div className="flex-auto self-start w-full border-[1px] border-solid bg-zinc-300 border-zinc-300 min-h-[2px] max-md:max-w-full" />
              <div className="flex shrink gap-5 justify-center basis-auto grow-0 max-md:flex-wrap max-md:max-w-full">
                <div className="flex gap-2.5 justify-center p-3 font-medium text-rose-500 border-t-2 border-rose-500 border-solid">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/97b35abed1146216e7ed538175661a4d237ea5478e2c90f6028d55211bb88ae8?apiKey=bef308c750544a03a3bf2b5acb540117&"
                    className="shrink-0 my-auto w-5 aspect-square"
                  />
                  <div className='text-xl'>Posts</div>
                </div>
                <div className="flex gap-3 justify-center p-3">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf30ca332b2ae7eeecdd4f331e6ca34992581f3858baecacc225e49ef0f670c3?apiKey=bef308c750544a03a3bf2b5acb540117&"
                    className="shrink-0 my-auto w-5 aspect-square"
                  />
                  <div className='text-xl'>Favorites</div>
                </div>
                <div className="flex gap-3 justify-center p-3">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/cefd33a0fd0fac5d62e3779806d5004f1875854a7307d99a48363fbc04857526?apiKey=bef308c750544a03a3bf2b5acb540117&"
                    className="shrink-0 my-auto w-5 aspect-square"
                  />
                  <div className='text-xl'>Liked</div>
                </div>
              </div>
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f8f95b8e776e79802a23842a92c3befce90a476510262231970b81928ad7658?apiKey=bef308c750544a03a3bf2b5acb540117&"
              className="mt-14 max-w-5xl aspect-square w-[280px] max-md:mt-10"
            />
            <div className="mt-7 text-2xl font-semibold">Upload Your First Video</div>
            <div className="mt-2 text-lg text-zinc-600">
              Your Videos will be appear here
            </div>
            <Link to="/profile/upload-video" className="justify-center items-center px-16 py-4 mt-7 max-w-full text-xl font-semibold text-white bg-rose-600 rounded-lg w-[274px] max-md:px-5 lg:mb-16">
              Upload Video
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileVideo;