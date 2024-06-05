import React from "react";

const ChatBox = () => {
  return (
    <div className="grow flex flex-col">
      <div className="flex gap-5 justify-between px-4 py-3 w-full bg-white border-b border-solid border-black border-opacity-10 max-md:flex-wrap max-md:max-w-full">
        <div className="flex gap-2 justify-between my-auto">
          <div className="flex overflow-hidden relative flex-col justify-end items-start self-start px-7 pt-8 aspect-square rounded-[94.449px] w-[42px] max-md:pl-5">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cf9bb8bef99ca1df6d7daad8e245331e0a84ae5276647a934228ad045170f1a1?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf9bb8bef99ca1df6d7daad8e245331e0a84ae5276647a934228ad045170f1a1?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf9bb8bef99ca1df6d7daad8e245331e0a84ae5276647a934228ad045170f1a1?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf9bb8bef99ca1df6d7daad8e245331e0a84ae5276647a934228ad045170f1a1?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf9bb8bef99ca1df6d7daad8e245331e0a84ae5276647a934228ad045170f1a1?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf9bb8bef99ca1df6d7daad8e245331e0a84ae5276647a934228ad045170f1a1?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf9bb8bef99ca1df6d7daad8e245331e0a84ae5276647a934228ad045170f1a1?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf9bb8bef99ca1df6d7daad8e245331e0a84ae5276647a934228ad045170f1a1?apiKey=bef308c750544a03a3bf2b5acb540117&"
              className="object-cover absolute inset-0 size-full"
            />
            <div className="relative shrink-0 h-3 bg-green-500 border-2 border-solid border-zinc-300 rounded-[877.521px]" />
          </div>
          <div className="flex flex-col py-1 pr-1.5 pl-0.5 font-poppins">
            <div className="text-lg font-semibold leading-5 text-zinc-900">
              Raheel Khan
            </div>
            <div className="text-sm leading-4 text-sky-950 text-opacity-80 font-normal">
              +92 3228402289
            </div>
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5bd7925c2b59e216c4de454acb54d7f9904e3f39d0ef20d54e5c864d31f7598f?apiKey=bef308c750544a03a3bf2b5acb540117&"
          className="shrink-0 w-36 max-w-full aspect-[3.03]"
        />
      </div>
      <div className="px-12 mt-6">
        <div className="flex gap-3.5 max-md:flex-wrap">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7d8fff70a29e1e83e4e156f832856d1faf4953bc6ea91ce1f7dd1b673919d49d?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7d8fff70a29e1e83e4e156f832856d1faf4953bc6ea91ce1f7dd1b673919d49d?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7d8fff70a29e1e83e4e156f832856d1faf4953bc6ea91ce1f7dd1b673919d49d?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7d8fff70a29e1e83e4e156f832856d1faf4953bc6ea91ce1f7dd1b673919d49d?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7d8fff70a29e1e83e4e156f832856d1faf4953bc6ea91ce1f7dd1b673919d49d?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7d8fff70a29e1e83e4e156f832856d1faf4953bc6ea91ce1f7dd1b673919d49d?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7d8fff70a29e1e83e4e156f832856d1faf4953bc6ea91ce1f7dd1b673919d49d?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7d8fff70a29e1e83e4e156f832856d1faf4953bc6ea91ce1f7dd1b673919d49d?apiKey=bef308c750544a03a3bf2b5acb540117&"
            className="shrink-0 self-start aspect-square w-[41px]"
          />
          <div className="flex flex-col max-md:max-w-full">
            <div className="flex gap-3.5 justify-between self-start">
              <div className="text-lg font-medium text-neutral-900">
                Raheel Khan
              </div>
              <div className="text-base text-slate-500">10:12 AM</div>
            </div>
            <div className="flex gap-2.5 justify-between pr-3 mt-2 text-lg font-medium text-zinc-900 max-md:flex-wrap">
              <div className="justify-center px-6 py-4 bg-blue-50 rounded-none max-md:px-5 max-md:max-w-full">
                Lorem ipsum dLorem ipsum dolor sit ametolor sit amet
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b29757a30b3179c8d5ecfa3ee4cf3b9a9e8ddca888b0a7d172d03f11175cbed2?apiKey=bef308c750544a03a3bf2b5acb540117&"
                className="shrink-0 my-auto w-1 aspect-[0.24] fill-slate-500"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-3 justify-between self-end mt-10 max-md:flex-wrap">
          <div className="flex flex-col items-end">
            <div className="flex gap-2 pr-5">
              <div className="text-base text-slate-500">10:30 AM</div>
              <div className="text-base font-semibold text-zinc-900">
                Dristin Watson
              </div>
            </div>
            <div className="flex gap-1.5 justify-between self-stretch pl-3 mt-2 text-base font-medium text-zinc-900">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/133fad49c414e61854207e529f81f3d88f9c50edbd6ba0a8632ac66c2db6750c?apiKey=bef308c750544a03a3bf2b5acb540117&"
                className="shrink-0 my-auto w-1 aspect-[0.24] fill-slate-500"
              />
              <div className="justify-center px-7 py-4 bg-blue-50 rounded-xl max-md:px-5">
                Great That’s a nice design Idea. 😍👏
              </div>
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fec4aaeefd40e93039f2e4e74d7c6f9f7966746f6a47557f28c7c540b8c38621?apiKey=bef308c750544a03a3bf2b5acb540117&"
              className="mt-2 w-6 aspect-square"
            />
          </div>
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/77ec7959c053ac2071195d427248e32e64a1a035efd337bc06c6cbe546a2c4df?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/77ec7959c053ac2071195d427248e32e64a1a035efd337bc06c6cbe546a2c4df?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/77ec7959c053ac2071195d427248e32e64a1a035efd337bc06c6cbe546a2c4df?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/77ec7959c053ac2071195d427248e32e64a1a035efd337bc06c6cbe546a2c4df?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/77ec7959c053ac2071195d427248e32e64a1a035efd337bc06c6cbe546a2c4df?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/77ec7959c053ac2071195d427248e32e64a1a035efd337bc06c6cbe546a2c4df?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/77ec7959c053ac2071195d427248e32e64a1a035efd337bc06c6cbe546a2c4df?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/77ec7959c053ac2071195d427248e32e64a1a035efd337bc06c6cbe546a2c4df?apiKey=bef308c750544a03a3bf2b5acb540117&"
            className="shrink-0 self-start aspect-square w-[41px]"
          />
        </div>
        <div className="flex flex-col max-w-[441px]">
          <div className="flex gap-3.5">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/36e31f1cd7f5322a6c46a0cc29dfb01e2257bfc0d0b085b887cb3f3066967519?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/36e31f1cd7f5322a6c46a0cc29dfb01e2257bfc0d0b085b887cb3f3066967519?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/36e31f1cd7f5322a6c46a0cc29dfb01e2257bfc0d0b085b887cb3f3066967519?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/36e31f1cd7f5322a6c46a0cc29dfb01e2257bfc0d0b085b887cb3f3066967519?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/36e31f1cd7f5322a6c46a0cc29dfb01e2257bfc0d0b085b887cb3f3066967519?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/36e31f1cd7f5322a6c46a0cc29dfb01e2257bfc0d0b085b887cb3f3066967519?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/36e31f1cd7f5322a6c46a0cc29dfb01e2257bfc0d0b085b887cb3f3066967519?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/36e31f1cd7f5322a6c46a0cc29dfb01e2257bfc0d0b085b887cb3f3066967519?apiKey=bef308c750544a03a3bf2b5acb540117&"
              className="shrink-0 self-start aspect-square w-[41px]"
            />
            <div className="flex flex-col">
              <div className="flex gap-3.5 justify-between px-5">
                <div className="text-lg font-medium text-neutral-900">
                  Raheel Khan
                </div>
                <div className="text-base text-slate-500">10:12 AM</div>
              </div>
              <div className="flex gap-2.5 justify-between pr-3 mt-1.5 text-lg font-medium text-zinc-900">
                <div className="justify-center px-6 py-4 bg-blue-50 rounded-none">
                  Lorem ipsum Lorem amet sit amet
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/58fe9d1f2084bf2e80c944a6c41150debc6b16aa6a101ff5def38110df76c0bd?apiKey=bef308c750544a03a3bf2b5acb540117&"
                  className="shrink-0 my-auto w-1 aspect-[0.24] fill-slate-500"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-4 justify-between self-center mt-4 ml-7">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ff406a1c01679cd3dc04e22e7eecb7a8d066f9a01374992bad5dcd810dcd6e10?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff406a1c01679cd3dc04e22e7eecb7a8d066f9a01374992bad5dcd810dcd6e10?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff406a1c01679cd3dc04e22e7eecb7a8d066f9a01374992bad5dcd810dcd6e10?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff406a1c01679cd3dc04e22e7eecb7a8d066f9a01374992bad5dcd810dcd6e10?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff406a1c01679cd3dc04e22e7eecb7a8d066f9a01374992bad5dcd810dcd6e10?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff406a1c01679cd3dc04e22e7eecb7a8d066f9a01374992bad5dcd810dcd6e10?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff406a1c01679cd3dc04e22e7eecb7a8d066f9a01374992bad5dcd810dcd6e10?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff406a1c01679cd3dc04e22e7eecb7a8d066f9a01374992bad5dcd810dcd6e10?apiKey=bef308c750544a03a3bf2b5acb540117&"
              className="shrink-0 max-w-full aspect-[0.83] w-[186px]"
            />
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/82caff005915e404e5789572348390f08e57829abf1aa77d4190522d33bd9df5?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/82caff005915e404e5789572348390f08e57829abf1aa77d4190522d33bd9df5?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/82caff005915e404e5789572348390f08e57829abf1aa77d4190522d33bd9df5?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/82caff005915e404e5789572348390f08e57829abf1aa77d4190522d33bd9df5?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/82caff005915e404e5789572348390f08e57829abf1aa77d4190522d33bd9df5?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/82caff005915e404e5789572348390f08e57829abf1aa77d4190522d33bd9df5?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/82caff005915e404e5789572348390f08e57829abf1aa77d4190522d33bd9df5?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/82caff005915e404e5789572348390f08e57829abf1aa77d4190522d33bd9df5?apiKey=bef308c750544a03a3bf2b5acb540117&"
              className="shrink-0 max-w-full aspect-[0.83] w-[186px]"
            />
          </div>
          <div className="flex gap-3.5 mt-7">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/391cff1dda38c67c1acb7a5dcd57044c382074526ab2755923614c226cf02658?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/391cff1dda38c67c1acb7a5dcd57044c382074526ab2755923614c226cf02658?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/391cff1dda38c67c1acb7a5dcd57044c382074526ab2755923614c226cf02658?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/391cff1dda38c67c1acb7a5dcd57044c382074526ab2755923614c226cf02658?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/391cff1dda38c67c1acb7a5dcd57044c382074526ab2755923614c226cf02658?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/391cff1dda38c67c1acb7a5dcd57044c382074526ab2755923614c226cf02658?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/391cff1dda38c67c1acb7a5dcd57044c382074526ab2755923614c226cf02658?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/391cff1dda38c67c1acb7a5dcd57044c382074526ab2755923614c226cf02658?apiKey=bef308c750544a03a3bf2b5acb540117&"
              className="shrink-0 self-start aspect-[0.98] w-[41px]"
            />
            <div className="flex flex-col">
              <div className="flex gap-3.5 px-5">
                <div className="text-lg font-medium text-neutral-900">
                  Raheel Khan
                </div>
                <div className="text-base text-slate-500">10:12 AM</div>
              </div>
              <div className="flex gap-3 justify-between pr-5 mt-3.5">
                <div className="flex gap-3 py-2 pr-3 pl-2 bg-blue-50 rounded-3xl">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5137a26044fdb214f414cf93b3700d11d60c9d3cb7f7404e99c0c7c590e222f?apiKey=bef308c750544a03a3bf2b5acb540117&"
                    className="shrink-0 py-2 pr-1.5 pl-2 w-8 aspect-square"
                  />
                  <div className="flex gap-1 justify-between py-2 pr-3 pl-1.5">
                    <div className="flex gap-1 self-start">
                      <div className="shrink-0 my-auto w-0.5 h-2 bg-black rounded-sm" />
                      <div className="shrink-0 w-0.5 h-3.5 bg-black rounded-sm" />
                    </div>
                    <div className="flex gap-1 items-center">
                      <div className="shrink-0 self-stretch w-0.5 h-4 bg-black rounded-sm" />
                      <div className="shrink-0 self-start w-0.5 h-3.5 bg-black rounded-sm" />
                      <div className="shrink-0 self-stretch my-auto w-0.5 h-2.5 bg-black rounded-sm" />
                      <div className="shrink-0 self-stretch my-auto w-0.5 h-2.5 bg-black rounded-sm" />
                      <div className="shrink-0 self-stretch my-auto w-0.5 h-2.5 bg-black rounded-sm" />
                      <div className="shrink-0 self-start w-0.5 h-3.5 bg-black rounded-sm" />
                      <div className="shrink-0 self-stretch my-auto w-0.5 h-2.5 bg-black rounded-sm" />
                      <div className="shrink-0 self-stretch w-0.5 h-4 bg-black rounded-sm" />
                      <div className="shrink-0 self-stretch my-auto w-0.5 h-2.5 bg-black rounded-sm" />
                    </div>
                  </div>
                  <div className="my-auto text-sm leading-4 text-red-600">0:05</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea9be02619d3eb6e3729203e439e0d979f4ef47ed06b06339ca3e1eba9f7e456?apiKey=bef308c750544a03a3bf2b5acb540117&"
                    className="shrink-0 my-auto w-6 aspect-square"
                  />
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1dbce0ef9547a656edee39ec7f738dd3b9ac42f294e6fb3d212624c69a385b1?apiKey=bef308c750544a03a3bf2b5acb540117&"
                  className="shrink-0 my-auto w-1 aspect-[0.24] fill-slate-500"
                />
              </div>
            </div>

          </div>

        </div>
        <div className="flex gap-5 px-6 py-3.5 mt-12 w-full text-base bg-gray-50 rounded-xl text-stone-400 max-md:flex-wrap max-md:pl-5 max-md:mt-10 max-md:max-w-full">
          <div className="flex-auto my-auto">Type a message...</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b5c1502f4db2390a539b89d1466c535b600cee65b883f0cb729f39d07aa5192?apiKey=bef308c750544a03a3bf2b5acb540117&"
            className="shrink-0 max-w-full aspect-[3.7] w-[141px]"
          />
        </div>
      </div>

    </div>
  );
};

export default ChatBox;
