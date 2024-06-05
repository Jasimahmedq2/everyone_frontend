import React from 'react';
import Toggle from '../../toggle/Toggle';

const ProfileNovideo = () => {
    return (
        <div className="flex flex-col self-stretch px-11 py-5 mt-11 rounded-3xl bg-blue-500 bg-opacity-10 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[53%] max-md:ml-0 max-md:w-full">
              <div className="grow max-md:mt-6 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-[23%] max-md:ml-0 max-md:w-full">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bed1dd41e7b2859a992ace6341ed57821387d0ef99670142e7cf2d1489f47338?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bed1dd41e7b2859a992ace6341ed57821387d0ef99670142e7cf2d1489f47338?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bed1dd41e7b2859a992ace6341ed57821387d0ef99670142e7cf2d1489f47338?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bed1dd41e7b2859a992ace6341ed57821387d0ef99670142e7cf2d1489f47338?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bed1dd41e7b2859a992ace6341ed57821387d0ef99670142e7cf2d1489f47338?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bed1dd41e7b2859a992ace6341ed57821387d0ef99670142e7cf2d1489f47338?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bed1dd41e7b2859a992ace6341ed57821387d0ef99670142e7cf2d1489f47338?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bed1dd41e7b2859a992ace6341ed57821387d0ef99670142e7cf2d1489f47338?apiKey=bef308c750544a03a3bf2b5acb540117&"
                      className="shrink-0 max-w-full aspect-square w-[142px] max-md:mt-6"
                    />
                  </div>
                  <div className="flex flex-col ml-5 w-[77%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow items-start max-md:mt-6 max-md:max-w-full font-poppins">
                      <div className="text-3xl font-semibold text-zinc-900">
                        Fitness Club
                      </div>
                      <div className="text-2xl lowercase text-neutral-600">
                        @fitness_institute
                      </div>
                      <div className="self-stretch mt-3 text-[14px] font-normal text-zinc-600 max-md:max-w-full font-poppins">
                        Bio should need to be here, Welcome to my profile I,m
                        uploading videos about fitness and health care, don’t
                        forget to follow me on Everyone!
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-1/5 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col justify-center max-md:mt-6">
                <div className="flex flex-col justify-center px-3 py-2.5 w-full bg-white rounded-[90px] max-md:px-5">
                  <div className="flex gap-2.5 justify-center">
                    <div className="my-auto text-[15px] leading-5 text-zinc-900 font-poppins">
                      Turn on Connect
                    </div>
                    <div className="flex flex-col justify-center items-start py-0.5 fill-neutral-200">
                    

<Toggle />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[27%] max-md:ml-0 max-md:w-full">
              <div className="flex gap-2 text-sm font-bold text-zinc-900 max-md:mt-6">
                <div className="flex gap-2 justify-center px-4 py-3 border border-solid border-zinc-900 rounded-[97px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a6f0bcd7d11e857b6fb6a521e52178da938abca24325f8a4944374f09ab6154?apiKey=bef308c750544a03a3bf2b5acb540117&"
                    className="shrink-0 aspect-square w-[21px]"
                  />
                  <div className="my-auto">Edit Profile</div>
                </div>
                <div className="flex gap-2 justify-center px-4 py-3 border border-solid border-zinc-900 rounded-[97px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a2e7ab59b393ebf7c6dc76cc0d0917e217fb77ea50904ffc87f83fb504c6a30?apiKey=bef308c750544a03a3bf2b5acb540117&"
                    className="shrink-0 aspect-square w-[21px]"
                  />
                  <div className="my-auto">Share Profile</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-5 justify-between self-center mt-2 w-full max-w-[1096px] max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-4 justify-between self-end mt-6">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/246838e65e7883da2f0243a2a6855058c795420c9887ec4f4194dda2c4eebf1a?apiKey=bef308c750544a03a3bf2b5acb540117&"
              className="shrink-0 w-9 aspect-square"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2fe6454b9204c208d9c383529640516000f02ebb22dc8f1df406eda7997d6e07?apiKey=bef308c750544a03a3bf2b5acb540117&"
              className="shrink-0 w-9 aspect-square"
            />
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7cff2000ab4adb1503c664215c24add08712dd40966d0a976649103a9e8e394c?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7cff2000ab4adb1503c664215c24add08712dd40966d0a976649103a9e8e394c?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7cff2000ab4adb1503c664215c24add08712dd40966d0a976649103a9e8e394c?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7cff2000ab4adb1503c664215c24add08712dd40966d0a976649103a9e8e394c?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7cff2000ab4adb1503c664215c24add08712dd40966d0a976649103a9e8e394c?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7cff2000ab4adb1503c664215c24add08712dd40966d0a976649103a9e8e394c?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7cff2000ab4adb1503c664215c24add08712dd40966d0a976649103a9e8e394c?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7cff2000ab4adb1503c664215c24add08712dd40966d0a976649103a9e8e394c?apiKey=bef308c750544a03a3bf2b5acb540117&"
              className="shrink-0 w-9 aspect-square"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/38f2a3887a74c1b0ca159e702a582c474a48eb18f716a5491824c4f005539e91?apiKey=bef308c750544a03a3bf2b5acb540117&"
              className="shrink-0 w-9 aspect-square"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/76af2894c0b77b93b5fef4264a81f7059d0097e8e8be87dfe94578698c553921?apiKey=bef308c750544a03a3bf2b5acb540117&"
              className="shrink-0 w-9 aspect-square"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b368aeb2112b91e28ac71631b7daf48e3a38be81a5f1f8b7e4f7ed1c066bfa2?apiKey=bef308c750544a03a3bf2b5acb540117&"
              className="shrink-0 w-9 aspect-square"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9cd5d60a541826fdf3fc6e7dbc3cdd1fb07bf59bfe0d34136e26e1f72cbaf094?apiKey=bef308c750544a03a3bf2b5acb540117&"
              className="shrink-0 w-9 aspect-square"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1fc4460ae6c6e00e24e7131b1db389af037b47143af9c27532cc7d58e0f0a7c7?apiKey=bef308c750544a03a3bf2b5acb540117&"
              className="shrink-0 w-9 aspect-square"
            />
          </div>
          <div className="flex gap-5 justify-between whitespace-nowrap text-zinc-900">
            <div className="flex flex-col">
              <div className="self-center text-2xl font-semibold">00</div>
              <div className="text-lg">Followers</div>
            </div>
            <div className="flex flex-col">
              <div className="self-center text-2xl font-semibold">00</div>
              <div className="text-lg">Followings</div>
            </div>
            <div className="flex flex-col">
              <div className="text-2xl font-semibold">00</div>
              <div className="text-lg">Likes</div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ProfileNovideo;