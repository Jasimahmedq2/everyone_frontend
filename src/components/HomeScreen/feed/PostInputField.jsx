/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const PostInputField = () => {
  const [subscribing, setSubscribing] = useState(false);
  return (
    <div>
      <div className="flex flex-col max-w-[413px] font-poppins">
        <div className="flex gap-4">
          <div className="flex gap-2.5 self-start text-sm">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b35b807082f912db5c256c213ac05b00b19ec973f49bb9e24b8709f2913a90da?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b35b807082f912db5c256c213ac05b00b19ec973f49bb9e24b8709f2913a90da?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b35b807082f912db5c256c213ac05b00b19ec973f49bb9e24b8709f2913a90da?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b35b807082f912db5c256c213ac05b00b19ec973f49bb9e24b8709f2913a90da?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b35b807082f912db5c256c213ac05b00b19ec973f49bb9e24b8709f2913a90da?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b35b807082f912db5c256c213ac05b00b19ec973f49bb9e24b8709f2913a90da?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b35b807082f912db5c256c213ac05b00b19ec973f49bb9e24b8709f2913a90da?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b35b807082f912db5c256c213ac05b00b19ec973f49bb9e24b8709f2913a90da?apiKey=bef308c750544a03a3bf2b5acb540117&"
              className="shrink-0 self-start aspect-square w-[43px]"
            />
            <div className="flex flex-col px-5">
              <div className="font-medium text-zinc-900">Channel Name</div>
              <div className="flex gap-2 justify-between pr-6 mt-1.5 text-xs text-black whitespace-nowrap">
                <div>Private</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/18007b114a524da55a5e6752fd331552e67100d32aba73778395576c4f858206?apiKey=bef308c750544a03a3bf2b5acb540117&"
                  className="shrink-0 my-auto aspect-square w-[11px]"
                />
              </div>
              <div className="mt-1.5 text-zinc-600">545-465-657-547</div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex gap-1.5">
              <div className="flex flex-col justify-center items-start px-4 py-1.5 my-auto rounded bg-zinc-100">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/5be0d55ae1810ded494b5bebb654a014154778ef6055b4d50b5ca0d7c3e2c128?apiKey=bef308c750544a03a3bf2b5acb540117&"
                  className="aspect-square w-[19px]"
                />
              </div>
              <div className="justify-center px-4 py-2 text-sm font-medium text-rose-500 whitespace-nowrap rounded border border-rose-500 border-solid">
                Subscribe
              </div>
            </div>
            <div className="flex gap-2 justify-between self-end px-5 mt-6 text-xs text-black whitespace-nowrap">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/982acb847e34061fce855b445f0b80dc47a81bbe4b4fb8e7f57c35972d862a4d?apiKey=bef308c750544a03a3bf2b5acb540117&"
                className="shrink-0 my-auto w-4 aspect-[2.27]"
              />
              <div>TESTNAME</div>
            </div>
          </div>
        </div>
        <div className="flex gap-5 mt-3">
          <div className="flex overflow-hidden relative flex-col grow shrink-0 pt-3 pr-3 pb-9 pl-1.5 aspect-[0.61] basis-0 w-fit">
            <video
              className="object-cover absolute inset-0 w-full h-full"
              controls
              autoPlay
              loop
              muted
            />
            <div className="flex relative gap-5 justify-between">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/152f9cd32ab9916a40201ec710f74751d8b3949abcd6748899c2e66edf6cdb4f?apiKey=bef308c750544a03a3bf2b5acb540117&"
                className="shrink-0 w-6 aspect-square"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a14e64feee53da6215baf3f85a4ace0e2ebe92b065ed2cf8c40413e3ee8a17c?apiKey=bef308c750544a03a3bf2b5acb540117&"
                className="shrink-0 self-start aspect-square w-[23px]"
              />
            </div>
            <div className="flex relative gap-3 mt-96 text-xs font-medium text-white">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/899b93eafc795450ec3930e8a1c9e87033dd7471bed6f44fb963fbdbb3866f90?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/899b93eafc795450ec3930e8a1c9e87033dd7471bed6f44fb963fbdbb3866f90?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/899b93eafc795450ec3930e8a1c9e87033dd7471bed6f44fb963fbdbb3866f90?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/899b93eafc795450ec3930e8a1c9e87033dd7471bed6f44fb963fbdbb3866f90?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/899b93eafc795450ec3930e8a1c9e87033dd7471bed6f44fb963fbdbb3866f90?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/899b93eafc795450ec3930e8a1c9e87033dd7471bed6f44fb963fbdbb3866f90?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/899b93eafc795450ec3930e8a1c9e87033dd7471bed6f44fb963fbdbb3866f90?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/899b93eafc795450ec3930e8a1c9e87033dd7471bed6f44fb963fbdbb3866f90?apiKey=bef308c750544a03a3bf2b5acb540117&"
                className="shrink-0 self-start aspect-square w-[42px]"
              />
              <div className="flex flex-col">
                <div className="text-sm">Username/Channel name</div>
                <div className="text-xs">Username/Channel name</div>
                <div>Title here How to Bake a Cake</div>
                <div className="flex flex-wrap gap-x-1 font-light text-white">
                  <span className="text-white">#Tags here</span>
                  <span className="text-white">#foodie</span>
                  <span className="text-white">#carving</span>
                  <span className="text-white">#cooking</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center self-end px-5 mt-28 text-xs font-semibold tracking-wide text-center whitespace-nowrap text-zinc-900">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b4b2036a28bb9eb9f59a5b82bc3a7ae51477970b61f7f154690cf2ef87efa490?apiKey=bef308c750544a03a3bf2b5acb540117&"
              className="w-10 aspect-square"
            />
            <div className="self-stretch">11.9K</div>
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5d4c0080097b14a86b84c63afa30c3711fc8179251669a9ec1bd465c729588bf?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d4c0080097b14a86b84c63afa30c3711fc8179251669a9ec1bd465c729588bf?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d4c0080097b14a86b84c63afa30c3711fc8179251669a9ec1bd465c729588bf?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d4c0080097b14a86b84c63afa30c3711fc8179251669a9ec1bd465c729588bf?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d4c0080097b14a86b84c63afa30c3711fc8179251669a9ec1bd465c729588bf?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d4c0080097b14a86b84c63afa30c3711fc8179251669a9ec1bd465c729588bf?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d4c0080097b14a86b84c63afa30c3711fc8179251669a9ec1bd465c729588bf?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d4c0080097b14a86b84c63afa30c3711fc8179251669a9ec1bd465c729588bf?apiKey=bef308c750544a03a3bf2b5acb540117&"
              className="mt-5 w-10 aspect-square"
            />
            <div className="self-stretch mt-2">11.9K</div>
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3a269776914b6e47610815dd9667b4d97a2fa889765a001717a0df902cd6799a?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a269776914b6e47610815dd9667b4d97a2fa889765a001717a0df902cd6799a?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a269776914b6e47610815dd9667b4d97a2fa889765a001717a0df902cd6799a?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a269776914b6e47610815dd9667b4d97a2fa889765a001717a0df902cd6799a?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a269776914b6e47610815dd9667b4d97a2fa889765a001717a0df902cd6799a?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a269776914b6e47610815dd9667b4d97a2fa889765a001717a0df902cd6799a?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a269776914b6e47610815dd9667b4d97a2fa889765a001717a0df902cd6799a?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a269776914b6e47610815dd9667b4d97a2fa889765a001717a0df902cd6799a?apiKey=bef308c750544a03a3bf2b5acb540117&"
              className="mt-5 w-10 aspect-square"
            />
            <div className="self-stretch mt-2.5">11.9K</div>
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/163d0ced8a38d1e7e7ad637f34ad5660df23d927ac21c701a6fcb545474fecd1?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/163d0ced8a38d1e7e7ad637f34ad5660df23d927ac21c701a6fcb545474fecd1?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/163d0ced8a38d1e7e7ad637f34ad5660df23d927ac21c701a6fcb545474fecd1?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/163d0ced8a38d1e7e7ad637f34ad5660df23d927ac21c701a6fcb545474fecd1?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/163d0ced8a38d1e7e7ad637f34ad5660df23d927ac21c701a6fcb545474fecd1?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/163d0ced8a38d1e7e7ad637f34ad5660df23d927ac21c701a6fcb545474fecd1?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/163d0ced8a38d1e7e7ad637f34ad5660df23d927ac21c701a6fcb545474fecd1?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/163d0ced8a38d1e7e7ad637f34ad5660df23d927ac21c701a6fcb545474fecd1?apiKey=bef308c750544a03a3bf2b5acb540117&"
              className="mt-5 w-10 aspect-square"
            />
            <div className="self-stretch mt-2.5">11.9K</div>
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9b2a19edb268a9a4b92ee93e80febc800333d19a7f256a9431164bc31da4a349?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9b2a19edb268a9a4b92ee93e80febc800333d19a7f256a9431164bc31da4a349?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9b2a19edb268a9a4b92ee93e80febc800333d19a7f256a9431164bc31da4a349?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9b2a19edb268a9a4b92ee93e80febc800333d19a7f256a9431164bc31da4a349?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9b2a19edb268a9a4b92ee93e80febc800333d19a7f256a9431164bc31da4a349?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9b2a19edb268a9a4b92ee93e80febc800333d19a7f256a9431164bc31da4a349?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9b2a19edb268a9a4b92ee93e80febc800333d19a7f256a9431164bc31da4a349?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9b2a19edb268a9a4b92ee93e80febc800333d19a7f256a9431164bc31da4a349?apiKey=bef308c750544a03a3bf2b5acb540117&"
              className="mt-5 w-10 aspect-[1.03]"
            />
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4726d38c9c4f92e341a404b17741c2d1a6b2129a8cecb7e82a250b3e606e7852?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4726d38c9c4f92e341a404b17741c2d1a6b2129a8cecb7e82a250b3e606e7852?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4726d38c9c4f92e341a404b17741c2d1a6b2129a8cecb7e82a250b3e606e7852?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4726d38c9c4f92e341a404b17741c2d1a6b2129a8cecb7e82a250b3e606e7852?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4726d38c9c4f92e341a404b17741c2d1a6b2129a8cecb7e82a250b3e606e7852?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4726d38c9c4f92e341a404b17741c2d1a6b2129a8cecb7e82a250b3e606e7852?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4726d38c9c4f92e341a404b17741c2d1a6b2129a8cecb7e82a250b3e606e7852?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4726d38c9c4f92e341a404b17741c2d1a6b2129a8cecb7e82a250b3e606e7852?apiKey=bef308c750544a03a3bf2b5acb540117&"
              className="mt-5 w-10 aspect-square"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostInputField;
