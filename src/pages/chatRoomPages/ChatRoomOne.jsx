import React from "react";
import { useNavigate } from "react-router-dom";

const ChatRoomOne = () => {
  const [isOpenModal, setIsOpenModal] = React.useState(true);
  const navigate = useNavigate();

  // React.useEffect(() => {
  //   if (user) {
  //     navigate("/"); // Use navigate function to navigate
  //   }
  // }, [user, navigate]);

  return (
    <div
      className={`transition-all duration-300 ${isOpenModal ? "scale-100" : "scale-0"
        } fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-black/70 flex items-center justify-center z-[100] overflow-y-auto`}
      onClick={(e) => {
        if (e.target !== e.currentTarget) {
          return;
        }
        setIsOpenModal((prev) => !prev);
        navigate(-1);
      }}
    >
      <div className="px-5 py-7 bg-white rounded-2xl shadow-2xl max-w-[708px] overflow-y-auto max-h-screen hide-scrollbar">
        <div className="flex flex-col">
          <div className="flex gap-5 justify-between items-center px-5 w-full text-base font-medium leading-6 text-black max-md:flex-wrap max-md:max-w-full">
            <div className="self-stretch my-auto underline">Archived</div>
            <div className="self-stretch my-auto">Join Chat Rooms</div>
            <div className="justify-center self-stretch px-5 py-2 text-white bg-green-500 rounded-lg cursor-pointer">
              Create New
            </div>
          </div>
          <div className="flex flex-col px-4 mt-7 w-full max-md:max-w-full">
          <div className="flex flex-col justify-center items-start px-5 py-3 text-xl whitespace-nowrap rounded-md bg-stone-50 text-zinc-900 max-md:pr-5 max-md:max-w-full">
      <div className="flex gap-1.5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/be59d94e439b98f995606d96e2d72038b5b3796dcac85be2c61db5d0a7c5f30d?apiKey=bef308c750544a03a3bf2b5acb540117&"
          className="shrink-0 my-auto aspect-square w-[22px]"
          alt="Search Icon"
        />
        <input
          type="text"
          placeholder="Search"
          className="border-none focus:outline-none"
          // Add any additional input properties or event handlers as needed
        />
      </div>
    </div>
            <div className="mt-5 text-sm font-medium text-black max-md:max-w-full">
              Suggested Chat Rooms
            </div>

            <div className="max-w-screen-sm rounded-md bg-stone-50 min-h-[98px] mt-5 p-3">
              <div className="flex gap-5 justify-between text-base text-white whitespace-nowrap max-w-[593px] max-md:flex-wrap">
                <div className="flex items-center">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b49ac2b22dd06c43c0259a14eb6d0079937c6e658d8b42c45bb769b9cd50f76f?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b49ac2b22dd06c43c0259a14eb6d0079937c6e658d8b42c45bb769b9cd50f76f?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b49ac2b22dd06c43c0259a14eb6d0079937c6e658d8b42c45bb769b9cd50f76f?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b49ac2b22dd06c43c0259a14eb6d0079937c6e658d8b42c45bb769b9cd50f76f?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b49ac2b22dd06c43c0259a14eb6d0079937c6e658d8b42c45bb769b9cd50f76f?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b49ac2b22dd06c43c0259a14eb6d0079937c6e658d8b42c45bb769b9cd50f76f?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b49ac2b22dd06c43c0259a14eb6d0079937c6e658d8b42c45bb769b9cd50f76f?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b49ac2b22dd06c43c0259a14eb6d0079937c6e658d8b42c45bb769b9cd50f76f?apiKey=bef308c750544a03a3bf2b5acb540117&"
                    className="shrink-0 aspect-square w-[76px]"
                  />
                  <div className="flex flex-col px-5">
                    <div className="text-base font-medium text-black">
                      New York Streets
                    </div>
                    <div className="flex gap-1.5 mt-1.5">
                      <div className="flex gap-1 self-start">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d1078117a318c767e2aefa49c876da4dc8548126560f8b58eb9d4c7fd75eb3de?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d1078117a318c767e2aefa49c876da4dc8548126560f8b58eb9d4c7fd75eb3de?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d1078117a318c767e2aefa49c876da4dc8548126560f8b58eb9d4c7fd75eb3de?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d1078117a318c767e2aefa49c876da4dc8548126560f8b58eb9d4c7fd75eb3de?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d1078117a318c767e2aefa49c876da4dc8548126560f8b58eb9d4c7fd75eb3de?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d1078117a318c767e2aefa49c876da4dc8548126560f8b58eb9d4c7fd75eb3de?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d1078117a318c767e2aefa49c876da4dc8548126560f8b58eb9d4c7fd75eb3de?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d1078117a318c767e2aefa49c876da4dc8548126560f8b58eb9d4c7fd75eb3de?apiKey=bef308c750544a03a3bf2b5acb540117&"
                          className="shrink-0 rounded-full aspect-square w-[13px]"
                        />
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d870133b344cff3475418036b3a783f24df1b9f3ba946d6c497bea7275f36de5?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d870133b344cff3475418036b3a783f24df1b9f3ba946d6c497bea7275f36de5?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d870133b344cff3475418036b3a783f24df1b9f3ba946d6c497bea7275f36de5?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d870133b344cff3475418036b3a783f24df1b9f3ba946d6c497bea7275f36de5?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d870133b344cff3475418036b3a783f24df1b9f3ba946d6c497bea7275f36de5?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d870133b344cff3475418036b3a783f24df1b9f3ba946d6c497bea7275f36de5?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d870133b344cff3475418036b3a783f24df1b9f3ba946d6c497bea7275f36de5?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d870133b344cff3475418036b3a783f24df1b9f3ba946d6c497bea7275f36de5?apiKey=bef308c750544a03a3bf2b5acb540117&"
                          className="shrink-0 w-3.5 rounded-full aspect-[1.08]"
                        />
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9c4cc2012919f8e92950f478cba176613a5e9b3967614e62436f489f6bd8f813?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c4cc2012919f8e92950f478cba176613a5e9b3967614e62436f489f6bd8f813?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c4cc2012919f8e92950f478cba176613a5e9b3967614e62436f489f6bd8f813?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c4cc2012919f8e92950f478cba176613a5e9b3967614e62436f489f6bd8f813?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c4cc2012919f8e92950f478cba176613a5e9b3967614e62436f489f6bd8f813?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c4cc2012919f8e92950f478cba176613a5e9b3967614e62436f489f6bd8f813?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c4cc2012919f8e92950f478cba176613a5e9b3967614e62436f489f6bd8f813?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c4cc2012919f8e92950f478cba176613a5e9b3967614e62436f489f6bd8f813?apiKey=bef308c750544a03a3bf2b5acb540117&"
                          className="shrink-0 rounded-full aspect-square w-[13px]"
                        />
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b2677d9d8bb1aad41f41f9dd43ca3eb5b0e7a1c07a4029ff1ec6cc41d4a9f331?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b2677d9d8bb1aad41f41f9dd43ca3eb5b0e7a1c07a4029ff1ec6cc41d4a9f331?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b2677d9d8bb1aad41f41f9dd43ca3eb5b0e7a1c07a4029ff1ec6cc41d4a9f331?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b2677d9d8bb1aad41f41f9dd43ca3eb5b0e7a1c07a4029ff1ec6cc41d4a9f331?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b2677d9d8bb1aad41f41f9dd43ca3eb5b0e7a1c07a4029ff1ec6cc41d4a9f331?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b2677d9d8bb1aad41f41f9dd43ca3eb5b0e7a1c07a4029ff1ec6cc41d4a9f331?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b2677d9d8bb1aad41f41f9dd43ca3eb5b0e7a1c07a4029ff1ec6cc41d4a9f331?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b2677d9d8bb1aad41f41f9dd43ca3eb5b0e7a1c07a4029ff1ec6cc41d4a9f331?apiKey=bef308c750544a03a3bf2b5acb540117&"
                          className="shrink-0 w-3.5 rounded-full aspect-[1.08]"
                        />
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/01e7cbe164c07e56f8b087de4bd39628f4047983f965e6ec60d1bcb5fb361681?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/01e7cbe164c07e56f8b087de4bd39628f4047983f965e6ec60d1bcb5fb361681?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/01e7cbe164c07e56f8b087de4bd39628f4047983f965e6ec60d1bcb5fb361681?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/01e7cbe164c07e56f8b087de4bd39628f4047983f965e6ec60d1bcb5fb361681?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/01e7cbe164c07e56f8b087de4bd39628f4047983f965e6ec60d1bcb5fb361681?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/01e7cbe164c07e56f8b087de4bd39628f4047983f965e6ec60d1bcb5fb361681?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/01e7cbe164c07e56f8b087de4bd39628f4047983f965e6ec60d1bcb5fb361681?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/01e7cbe164c07e56f8b087de4bd39628f4047983f965e6ec60d1bcb5fb361681?apiKey=bef308c750544a03a3bf2b5acb540117&"
                          className="shrink-0 rounded-full aspect-square w-[13px]"
                        />
                      </div>
                      <div className="text-xs text-neutral-400">20 Members</div>
                    </div>
                  </div>
                </div>
                <div className="justify-center px-6 py-2 my-auto bg-rose-500 rounded-md max-md:px-5 cursor-pointer">
                  Join
                </div>
              </div>
            </div>
            {/* verified member */}
            <div className="max-w-screen-sm rounded-md bg-stone-50 min-h-[98px] mt-5 p-3">
              <div className="flex gap-5 justify-between text-base text-white whitespace-nowrap max-w-[593px] max-md:flex-wrap">
                <div className="flex items-center">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/04ff77858666c5ab2c4a5db9ee7c55eba11f69b47b2b7ffe43c04d46fa750009?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/04ff77858666c5ab2c4a5db9ee7c55eba11f69b47b2b7ffe43c04d46fa750009?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/04ff77858666c5ab2c4a5db9ee7c55eba11f69b47b2b7ffe43c04d46fa750009?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/04ff77858666c5ab2c4a5db9ee7c55eba11f69b47b2b7ffe43c04d46fa750009?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/04ff77858666c5ab2c4a5db9ee7c55eba11f69b47b2b7ffe43c04d46fa750009?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/04ff77858666c5ab2c4a5db9ee7c55eba11f69b47b2b7ffe43c04d46fa750009?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/04ff77858666c5ab2c4a5db9ee7c55eba11f69b47b2b7ffe43c04d46fa750009?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/04ff77858666c5ab2c4a5db9ee7c55eba11f69b47b2b7ffe43c04d46fa750009?apiKey=bef308c750544a03a3bf2b5acb540117&"
                    className="w-full aspect-square max-w-[76px]"
                  />
                  <div className="flex flex-col px-5">
                    <div className="text-base font-medium text-black">
                      New York Streets
                    </div>
                    <div className="flex gap-1.5 mt-1.5">
                      <div className="flex gap-1 self-start">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d1078117a318c767e2aefa49c876da4dc8548126560f8b58eb9d4c7fd75eb3de?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d1078117a318c767e2aefa49c876da4dc8548126560f8b58eb9d4c7fd75eb3de?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d1078117a318c767e2aefa49c876da4dc8548126560f8b58eb9d4c7fd75eb3de?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d1078117a318c767e2aefa49c876da4dc8548126560f8b58eb9d4c7fd75eb3de?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d1078117a318c767e2aefa49c876da4dc8548126560f8b58eb9d4c7fd75eb3de?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d1078117a318c767e2aefa49c876da4dc8548126560f8b58eb9d4c7fd75eb3de?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d1078117a318c767e2aefa49c876da4dc8548126560f8b58eb9d4c7fd75eb3de?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d1078117a318c767e2aefa49c876da4dc8548126560f8b58eb9d4c7fd75eb3de?apiKey=bef308c750544a03a3bf2b5acb540117&"
                          className="shrink-0 rounded-full aspect-square w-[13px]"
                        />
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d870133b344cff3475418036b3a783f24df1b9f3ba946d6c497bea7275f36de5?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d870133b344cff3475418036b3a783f24df1b9f3ba946d6c497bea7275f36de5?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d870133b344cff3475418036b3a783f24df1b9f3ba946d6c497bea7275f36de5?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d870133b344cff3475418036b3a783f24df1b9f3ba946d6c497bea7275f36de5?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d870133b344cff3475418036b3a783f24df1b9f3ba946d6c497bea7275f36de5?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d870133b344cff3475418036b3a783f24df1b9f3ba946d6c497bea7275f36de5?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d870133b344cff3475418036b3a783f24df1b9f3ba946d6c497bea7275f36de5?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d870133b344cff3475418036b3a783f24df1b9f3ba946d6c497bea7275f36de5?apiKey=bef308c750544a03a3bf2b5acb540117&"
                          className="shrink-0 w-3.5 rounded-full aspect-[1.08]"
                        />
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9c4cc2012919f8e92950f478cba176613a5e9b3967614e62436f489f6bd8f813?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c4cc2012919f8e92950f478cba176613a5e9b3967614e62436f489f6bd8f813?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c4cc2012919f8e92950f478cba176613a5e9b3967614e62436f489f6bd8f813?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c4cc2012919f8e92950f478cba176613a5e9b3967614e62436f489f6bd8f813?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c4cc2012919f8e92950f478cba176613a5e9b3967614e62436f489f6bd8f813?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c4cc2012919f8e92950f478cba176613a5e9b3967614e62436f489f6bd8f813?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c4cc2012919f8e92950f478cba176613a5e9b3967614e62436f489f6bd8f813?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c4cc2012919f8e92950f478cba176613a5e9b3967614e62436f489f6bd8f813?apiKey=bef308c750544a03a3bf2b5acb540117&"
                          className="shrink-0 rounded-full aspect-square w-[13px]"
                        />
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b2677d9d8bb1aad41f41f9dd43ca3eb5b0e7a1c07a4029ff1ec6cc41d4a9f331?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b2677d9d8bb1aad41f41f9dd43ca3eb5b0e7a1c07a4029ff1ec6cc41d4a9f331?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b2677d9d8bb1aad41f41f9dd43ca3eb5b0e7a1c07a4029ff1ec6cc41d4a9f331?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b2677d9d8bb1aad41f41f9dd43ca3eb5b0e7a1c07a4029ff1ec6cc41d4a9f331?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b2677d9d8bb1aad41f41f9dd43ca3eb5b0e7a1c07a4029ff1ec6cc41d4a9f331?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b2677d9d8bb1aad41f41f9dd43ca3eb5b0e7a1c07a4029ff1ec6cc41d4a9f331?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b2677d9d8bb1aad41f41f9dd43ca3eb5b0e7a1c07a4029ff1ec6cc41d4a9f331?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b2677d9d8bb1aad41f41f9dd43ca3eb5b0e7a1c07a4029ff1ec6cc41d4a9f331?apiKey=bef308c750544a03a3bf2b5acb540117&"
                          className="shrink-0 w-3.5 rounded-full aspect-[1.08]"
                        />
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/01e7cbe164c07e56f8b087de4bd39628f4047983f965e6ec60d1bcb5fb361681?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/01e7cbe164c07e56f8b087de4bd39628f4047983f965e6ec60d1bcb5fb361681?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/01e7cbe164c07e56f8b087de4bd39628f4047983f965e6ec60d1bcb5fb361681?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/01e7cbe164c07e56f8b087de4bd39628f4047983f965e6ec60d1bcb5fb361681?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/01e7cbe164c07e56f8b087de4bd39628f4047983f965e6ec60d1bcb5fb361681?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/01e7cbe164c07e56f8b087de4bd39628f4047983f965e6ec60d1bcb5fb361681?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/01e7cbe164c07e56f8b087de4bd39628f4047983f965e6ec60d1bcb5fb361681?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/01e7cbe164c07e56f8b087de4bd39628f4047983f965e6ec60d1bcb5fb361681?apiKey=bef308c750544a03a3bf2b5acb540117&"
                          className="shrink-0 rounded-full aspect-square w-[13px]"
                        />
                      </div>
                      <div className="text-xs text-neutral-400">20 Members</div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2.5 justify-center items-center py-2 text-base whitespace-nowrap rounded-md text-zinc-900">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/be8bdbca56ad6c36f3b48068f7cfe9fff8dcb49121ffb431ca5bd8b2bfc7e29a?apiKey=bef308c750544a03a3bf2b5acb540117&"
                    className="shrink-0 my-auto aspect-square w-[17px]"
                  />
                  <div className="font-poppins font-medium">Member</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatRoomOne;
