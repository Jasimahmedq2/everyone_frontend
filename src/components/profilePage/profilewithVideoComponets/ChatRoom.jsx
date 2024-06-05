import React from 'react';
import VideoSection from './VideoSection';
import UserProfile from './UserProfile';

const ChatRoom = () => {
  return (
    <div>
      {/* User Profile componets
      <UserProfile /> */}

      <div className='flex lg:mt-10 mt-6'>
        {/* 1st card */}
        <div>
          <div className="flex flex-col text-xl max-w-[314px]">
            <div className="flex overflow-hidden relative flex-col px-3 py-4 w-full text-white whitespace-nowrap rounded-2xl aspect-[0.85]">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a50e7b3a81f84364decc2c41c9da34790c8d616442648fbd005e13a94e2ce406?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a50e7b3a81f84364decc2c41c9da34790c8d616442648fbd005e13a94e2ce406?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a50e7b3a81f84364decc2c41c9da34790c8d616442648fbd005e13a94e2ce406?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a50e7b3a81f84364decc2c41c9da34790c8d616442648fbd005e13a94e2ce406?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a50e7b3a81f84364decc2c41c9da34790c8d616442648fbd005e13a94e2ce406?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a50e7b3a81f84364decc2c41c9da34790c8d616442648fbd005e13a94e2ce406?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a50e7b3a81f84364decc2c41c9da34790c8d616442648fbd005e13a94e2ce406?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a50e7b3a81f84364decc2c41c9da34790c8d616442648fbd005e13a94e2ce406?apiKey=bef308c750544a03a3bf2b5acb540117&"
                className="object-cover absolute inset-0 size-full"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/250b75bdffc38a9a549c205b0eb9218d30cc4bb6cbdfa55d4bca5aaf176bb4f5?apiKey=bef308c750544a03a3bf2b5acb540117&"
                className="self-end w-6 aspect-square"
              />
              <div className="flex relative gap-2.5 self-start mt-72">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a72f17f1d29e51635eb644312331f8e0ce809e42bc25e348f671bf36b4a9a063?apiKey=bef308c750544a03a3bf2b5acb540117&"
                  className="shrink-0 my-auto w-5 aspect-square"
                />
                <div>1.5M</div>
              </div>
            </div>
            <div className="mt-4 w-full font-medium text-zinc-900">
              Few Words from video title her...
            </div>
          </div>
        </div>


        {/* Second Card room */}
        <div className='flex justify-items-center'>
          <div className="flex flex-col px-7 mt-2.5 max-md:px-5">
            <div className="flex gap-5 text-left">
              <div>Everyone Chat Room</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b993a2b9c35f1b2d92b9bfc370da6195c46707b6a9255763988be8d275043641?apiKey=bef308c750544a03a3bf2b5acb540117&"
                className="shrink-0 my-auto w-5 aspect-square"
              />
            </div>
            <div className="flex gap-1.5 items-center self-stretch">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3313fd4aa14085ad5bffa8f74ef3ed6522cc6fd56682fb3aa1ef363252e0e3b6?apiKey=bef308c750544a03a3bf2b5acb540117&"
                className="shrink-0 self-stretch my-auto aspect-square w-[13px]"
              />
              <div className="self-stretch text-xs text-zinc-900">Last Message</div>
              <div className="self-stretch my-auto text-xs text-neutral-400">
                1 hour ago
              </div>
            </div>
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c188b1099c97a0b3d4cf31cfa2a44d9c766e00fb01bcfa4d9f1051f00653c8f9?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c188b1099c97a0b3d4cf31cfa2a44d9c766e00fb01bcfa4d9f1051f00653c8f9?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c188b1099c97a0b3d4cf31cfa2a44d9c766e00fb01bcfa4d9f1051f00653c8f9?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c188b1099c97a0b3d4cf31cfa2a44d9c766e00fb01bcfa4d9f1051f00653c8f9?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c188b1099c97a0b3d4cf31cfa2a44d9c766e00fb01bcfa4d9f1051f00653c8f9?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c188b1099c97a0b3d4cf31cfa2a44d9c766e00fb01bcfa4d9f1051f00653c8f9?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c188b1099c97a0b3d4cf31cfa2a44d9c766e00fb01bcfa4d9f1051f00653c8f9?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c188b1099c97a0b3d4cf31cfa2a44d9c766e00fb01bcfa4d9f1051f00653c8f9?apiKey=bef308c750544a03a3bf2b5acb540117&"
              className="mt-6 max-w-full aspect-[1.11] w-[194px]"
            />

            <div className="flex flex-col items-center">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2dbd9051768fa8a63cecfc464f56e61cc21d6b246f31d41225c2e942f8e4e293?apiKey=bef308c750544a03a3bf2b5acb540117&"
                className="mt-2 aspect-[1.08] w-[15px] mx-auto"
              />
              <div className="mt-1.5 text-sm font-medium text-zinc-900">
                This Room is Private
                <div className="text-center mt-1 text-sm text-neutral-400 max-md:text-left">
                  (You Can join when admin invite you)
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 3rd card */}
        <div className='flex justify-items-center'>
          {/* Second chat romm */}
          <div>
            <div className="flex gap-5 justify-center">
              <div>Everyone Chat Room</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a7d01deea3502a0fc6486fa1ff985fa81a697c48d10a80c079fc5787a3248492?apiKey=bef308c750544a03a3bf2b5acb540117&"
                className="shrink-0 my-auto w-5 aspect-square"
              />
            </div>
            <div className="flex gap-5 justify-between mt-2.5 mr-5 ml-5 max-md:mx-2.5">

              <div className="flex gap-1.5 justify-center items-center">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d20ffc2df2a5a34c6d43716a53db1a7c8384755ad72e4ac3b487adc61010c3b?apiKey=bef308c750544a03a3bf2b5acb540117&"
                  className="shrink-0 self-stretch my-auto aspect-square w-[13px]"
                />
                <div className="self-stretch text-xs text-zinc-900">Last Message</div>
                <div className="self-stretch my-auto text-xs text-neutral-400">
                  Just now
                </div>
              </div>
              <div className="flex gap-1.5 justify-center text-xs whitespace-nowrap text-zinc-900">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d391b82d9f6582e45996d84586cd50711fbce2e39c61b9463ecec7d3903e1e9a?apiKey=bef308c750544a03a3bf2b5acb540117&"
                  className="shrink-0 my-auto aspect-square w-[13px]"
                />
                <div>23</div>
              </div>
            </div>
            <div className="flex gap-3 mx-3.5 mt-6 text-xs text-center text-gray-500 max-md:mx-2.5">
              <div className="flex flex-col flex-1 self-start">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0bc8ad6f17f1e32a900dba6b61a204e476d93e220abf020641f8ed074ccdb8a7?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0bc8ad6f17f1e32a900dba6b61a204e476d93e220abf020641f8ed074ccdb8a7?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0bc8ad6f17f1e32a900dba6b61a204e476d93e220abf020641f8ed074ccdb8a7?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0bc8ad6f17f1e32a900dba6b61a204e476d93e220abf020641f8ed074ccdb8a7?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0bc8ad6f17f1e32a900dba6b61a204e476d93e220abf020641f8ed074ccdb8a7?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0bc8ad6f17f1e32a900dba6b61a204e476d93e220abf020641f8ed074ccdb8a7?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0bc8ad6f17f1e32a900dba6b61a204e476d93e220abf020641f8ed074ccdb8a7?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0bc8ad6f17f1e32a900dba6b61a204e476d93e220abf020641f8ed074ccdb8a7?apiKey=bef308c750544a03a3bf2b5acb540117&"
                  className="self-center aspect-[1.23] w-[63px]"
                />
                <div className="mt-1.5">Raheel Khan</div>
              </div>
              <div className="flex flex-col flex-1 self-start">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c7efbb9cef01066794c1771d40c0bf02e3336acef5a7cee44e73a4d0190671ba?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7efbb9cef01066794c1771d40c0bf02e3336acef5a7cee44e73a4d0190671ba?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7efbb9cef01066794c1771d40c0bf02e3336acef5a7cee44e73a4d0190671ba?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7efbb9cef01066794c1771d40c0bf02e3336acef5a7cee44e73a4d0190671ba?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7efbb9cef01066794c1771d40c0bf02e3336acef5a7cee44e73a4d0190671ba?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7efbb9cef01066794c1771d40c0bf02e3336acef5a7cee44e73a4d0190671ba?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7efbb9cef01066794c1771d40c0bf02e3336acef5a7cee44e73a4d0190671ba?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7efbb9cef01066794c1771d40c0bf02e3336acef5a7cee44e73a4d0190671ba?apiKey=bef308c750544a03a3bf2b5acb540117&"
                  className="self-center aspect-[1.23] w-[63px]"
                />
                <div className="mt-1.5">Lorri Warf</div>
              </div>
              <div className="flex flex-col flex-1">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8f25bf2f0b8984147fd73f7a142c2968c7220033174d0012f14acdd2ff7bd012?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8f25bf2f0b8984147fd73f7a142c2968c7220033174d0012f14acdd2ff7bd012?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8f25bf2f0b8984147fd73f7a142c2968c7220033174d0012f14acdd2ff7bd012?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8f25bf2f0b8984147fd73f7a142c2968c7220033174d0012f14acdd2ff7bd012?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8f25bf2f0b8984147fd73f7a142c2968c7220033174d0012f14acdd2ff7bd012?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8f25bf2f0b8984147fd73f7a142c2968c7220033174d0012f14acdd2ff7bd012?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8f25bf2f0b8984147fd73f7a142c2968c7220033174d0012f14acdd2ff7bd012?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8f25bf2f0b8984147fd73f7a142c2968c7220033174d0012f14acdd2ff7bd012?apiKey=bef308c750544a03a3bf2b5acb540117&"
                  className="self-center aspect-[1.23] w-[63px]"
                />
                <div className="mt-1.5">Bradley Lawlor</div>
              </div>
              <div className="flex flex-col flex-1">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/03033759a620a61500b9b99f19aeb1a5bf896cd066aca5754c86edf35dfe075b?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/03033759a620a61500b9b99f19aeb1a5bf896cd066aca5754c86edf35dfe075b?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/03033759a620a61500b9b99f19aeb1a5bf896cd066aca5754c86edf35dfe075b?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/03033759a620a61500b9b99f19aeb1a5bf896cd066aca5754c86edf35dfe075b?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/03033759a620a61500b9b99f19aeb1a5bf896cd066aca5754c86edf35dfe075b?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/03033759a620a61500b9b99f19aeb1a5bf896cd066aca5754c86edf35dfe075b?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/03033759a620a61500b9b99f19aeb1a5bf896cd066aca5754c86edf35dfe075b?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/03033759a620a61500b9b99f19aeb1a5bf896cd066aca5754c86edf35dfe075b?apiKey=bef308c750544a03a3bf2b5acb540117&"
                  className="self-center aspect-[1.23] w-[63px]"
                />
                <div className="mt-1.5">Autumn Phillips</div>
              </div>
            </div>
            <div className="flex gap-3 mx-3.5 mt-6 text-xs text-center text-gray-500 max-md:mx-2.5">
              <div className="flex flex-col flex-1 self-start">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0bc8ad6f17f1e32a900dba6b61a204e476d93e220abf020641f8ed074ccdb8a7?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0bc8ad6f17f1e32a900dba6b61a204e476d93e220abf020641f8ed074ccdb8a7?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0bc8ad6f17f1e32a900dba6b61a204e476d93e220abf020641f8ed074ccdb8a7?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0bc8ad6f17f1e32a900dba6b61a204e476d93e220abf020641f8ed074ccdb8a7?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0bc8ad6f17f1e32a900dba6b61a204e476d93e220abf020641f8ed074ccdb8a7?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0bc8ad6f17f1e32a900dba6b61a204e476d93e220abf020641f8ed074ccdb8a7?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0bc8ad6f17f1e32a900dba6b61a204e476d93e220abf020641f8ed074ccdb8a7?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0bc8ad6f17f1e32a900dba6b61a204e476d93e220abf020641f8ed074ccdb8a7?apiKey=bef308c750544a03a3bf2b5acb540117&"
                  className="self-center aspect-[1.23] w-[63px]"
                />
                <div className="mt-1.5">Raheel Khan</div>
              </div>
              <div className="flex flex-col flex-1 self-start">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c7efbb9cef01066794c1771d40c0bf02e3336acef5a7cee44e73a4d0190671ba?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7efbb9cef01066794c1771d40c0bf02e3336acef5a7cee44e73a4d0190671ba?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7efbb9cef01066794c1771d40c0bf02e3336acef5a7cee44e73a4d0190671ba?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7efbb9cef01066794c1771d40c0bf02e3336acef5a7cee44e73a4d0190671ba?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7efbb9cef01066794c1771d40c0bf02e3336acef5a7cee44e73a4d0190671ba?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7efbb9cef01066794c1771d40c0bf02e3336acef5a7cee44e73a4d0190671ba?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7efbb9cef01066794c1771d40c0bf02e3336acef5a7cee44e73a4d0190671ba?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7efbb9cef01066794c1771d40c0bf02e3336acef5a7cee44e73a4d0190671ba?apiKey=bef308c750544a03a3bf2b5acb540117&"
                  className="self-center aspect-[1.23] w-[63px]"
                />
                <div className="mt-1.5">Lorri Warf</div>
              </div>
              <div className="flex flex-col flex-1">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8f25bf2f0b8984147fd73f7a142c2968c7220033174d0012f14acdd2ff7bd012?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8f25bf2f0b8984147fd73f7a142c2968c7220033174d0012f14acdd2ff7bd012?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8f25bf2f0b8984147fd73f7a142c2968c7220033174d0012f14acdd2ff7bd012?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8f25bf2f0b8984147fd73f7a142c2968c7220033174d0012f14acdd2ff7bd012?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8f25bf2f0b8984147fd73f7a142c2968c7220033174d0012f14acdd2ff7bd012?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8f25bf2f0b8984147fd73f7a142c2968c7220033174d0012f14acdd2ff7bd012?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8f25bf2f0b8984147fd73f7a142c2968c7220033174d0012f14acdd2ff7bd012?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8f25bf2f0b8984147fd73f7a142c2968c7220033174d0012f14acdd2ff7bd012?apiKey=bef308c750544a03a3bf2b5acb540117&"
                  className="self-center aspect-[1.23] w-[63px]"
                />
                <div className="mt-1.5">Bradley Lawlor</div>
              </div>
              <div className="flex flex-col flex-1">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/03033759a620a61500b9b99f19aeb1a5bf896cd066aca5754c86edf35dfe075b?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/03033759a620a61500b9b99f19aeb1a5bf896cd066aca5754c86edf35dfe075b?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/03033759a620a61500b9b99f19aeb1a5bf896cd066aca5754c86edf35dfe075b?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/03033759a620a61500b9b99f19aeb1a5bf896cd066aca5754c86edf35dfe075b?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/03033759a620a61500b9b99f19aeb1a5bf896cd066aca5754c86edf35dfe075b?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/03033759a620a61500b9b99f19aeb1a5bf896cd066aca5754c86edf35dfe075b?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/03033759a620a61500b9b99f19aeb1a5bf896cd066aca5754c86edf35dfe075b?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/03033759a620a61500b9b99f19aeb1a5bf896cd066aca5754c86edf35dfe075b?apiKey=bef308c750544a03a3bf2b5acb540117&"
                  className="self-center aspect-[1.23] w-[63px]"
                />
                <div className="mt-1.5">Autumn Phillips</div>
              </div>

            </div>
            <div className="flex gap-1 self-center px-5 mt-8 text-xs font-medium text-center text-zinc-900">
              <div>Click to enter chat room</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7cc6e1037886c8b4e0cbe097f9bd17b8ea79b256bc89c3ecad7cee552d808831?apiKey=bef308c750544a03a3bf2b5acb540117&"
                className="shrink-0 my-auto aspect-square w-[15px]"
              />
            </div>
          </div>
        </div>


        {/* 4th Image */}
        <div className="flex flex-col text-xl max-w-[314px]">
          <div className="flex overflow-hidden relative flex-col px-3 py-4 w-full text-white whitespace-nowrap rounded-2xl aspect-[0.85]">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4cc41d841fbcc342b3f34ccf82b7978089dabac66f5c0c551384d19061a1cfbc?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4cc41d841fbcc342b3f34ccf82b7978089dabac66f5c0c551384d19061a1cfbc?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4cc41d841fbcc342b3f34ccf82b7978089dabac66f5c0c551384d19061a1cfbc?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4cc41d841fbcc342b3f34ccf82b7978089dabac66f5c0c551384d19061a1cfbc?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4cc41d841fbcc342b3f34ccf82b7978089dabac66f5c0c551384d19061a1cfbc?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4cc41d841fbcc342b3f34ccf82b7978089dabac66f5c0c551384d19061a1cfbc?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4cc41d841fbcc342b3f34ccf82b7978089dabac66f5c0c551384d19061a1cfbc?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4cc41d841fbcc342b3f34ccf82b7978089dabac66f5c0c551384d19061a1cfbc?apiKey=bef308c750544a03a3bf2b5acb540117&"
              className="object-cover absolute inset-0 size-full"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f41c69965e669fcd4cf10ecc99376dba52bc3aadeb77475999a0db69e98a8e6?apiKey=bef308c750544a03a3bf2b5acb540117&"
              className="self-end w-6 aspect-square"
            />
            <div className="flex relative gap-2.5 self-start mt-72">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1eefa51bb300a4445c14a3cd3c7528e7046552525027f2d2c8de17b10faae3f7?apiKey=bef308c750544a03a3bf2b5acb540117&"
                className="shrink-0 my-auto w-5 aspect-square"
              />
              <div>1.5M</div>
            </div>
          </div>
          <div className="mt-4 w-full font-medium text-zinc-900">
            Few Words from video title her...
          </div>
        </div>

      </div>

      <VideoSection />
    </div>
  );
};

export default ChatRoom;