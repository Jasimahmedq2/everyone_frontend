import React from "react";

const DropDownInbox = () => {
  return (
    <div className="flex gap-0 flex-col px-3 py-5 max-w-sm lg:w-full rounded-lg shadow-xl backdrop-blur-[10.350000381469727px] bg-white bg-opacity-40 border border-gray-100 text-black">
      <div className="flex justify-between font-poppins rounded-2xl px-4 py-2.5 bg-indigo-50 cursor-auto">
        <div className="flex gap-3">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9cff14cd1d69ba21e38b6a84b6bd2272d9be3d5480d721837bb18067fd8669a5?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9cff14cd1d69ba21e38b6a84b6bd2272d9be3d5480d721837bb18067fd8669a5?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9cff14cd1d69ba21e38b6a84b6bd2272d9be3d5480d721837bb18067fd8669a5?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9cff14cd1d69ba21e38b6a84b6bd2272d9be3d5480d721837bb18067fd8669a5?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9cff14cd1d69ba21e38b6a84b6bd2272d9be3d5480d721837bb18067fd8669a5?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9cff14cd1d69ba21e38b6a84b6bd2272d9be3d5480d721837bb18067fd8669a5?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9cff14cd1d69ba21e38b6a84b6bd2272d9be3d5480d721837bb18067fd8669a5?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9cff14cd1d69ba21e38b6a84b6bd2272d9be3d5480d721837bb18067fd8669a5?apiKey=bef308c750544a03a3bf2b5acb540117&"
            className="shrink-0 aspect-[0.98] w-[52px]"
          />
          <div>
            <div className="text-lg font-poppins font-medium text-neutral-800">
              Paula Mora
            </div>
            <div className="my-auto text-sm font-poppins text-zinc-900">
              (123) 243-2343
            </div>
          </div>
        </div>


        <div>
          <div className="text-bs font-light text-neutral-800">
            1 min ago
          </div>
          <div className="flex  justify-center items-center my-auto text-xs text-zinc-900 mt-1  px-2 py-1.5 bg-red-600 rounded-full w-5 h-5 ">
            2
          </div>
        </div>

      </div>
      <div className="flex justify-between font-poppins rounded-2xl px-4 py-2.5 hover:bg-indigo-50 cursor-pointer">
        <div className="flex gap-3">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9cff14cd1d69ba21e38b6a84b6bd2272d9be3d5480d721837bb18067fd8669a5?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9cff14cd1d69ba21e38b6a84b6bd2272d9be3d5480d721837bb18067fd8669a5?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9cff14cd1d69ba21e38b6a84b6bd2272d9be3d5480d721837bb18067fd8669a5?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9cff14cd1d69ba21e38b6a84b6bd2272d9be3d5480d721837bb18067fd8669a5?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9cff14cd1d69ba21e38b6a84b6bd2272d9be3d5480d721837bb18067fd8669a5?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9cff14cd1d69ba21e38b6a84b6bd2272d9be3d5480d721837bb18067fd8669a5?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9cff14cd1d69ba21e38b6a84b6bd2272d9be3d5480d721837bb18067fd8669a5?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9cff14cd1d69ba21e38b6a84b6bd2272d9be3d5480d721837bb18067fd8669a5?apiKey=bef308c750544a03a3bf2b5acb540117&"
            className="shrink-0 aspect-[0.98] w-[52px]"
          />
          <div>
            <div className="text-lg font-poppins font-medium text-neutral-800">
              Paula Mora
            </div>
            <div className="my-auto text-sm font-poppins text-zinc-900">
              (123) 243-2343
            </div>
          </div>
        </div>

        <div>
          <div>
            <div className="text-bs font-light text-neutral-800">
              1 min ago
            </div>

          </div>
        </div>
      </div>
      <div className="flex justify-between font-poppins rounded-2xl px-4 py-2.5 hover:bg-indigo-50 cursor-pointer">
        <div className="flex gap-3">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f5bda1ff6af0fc97735078d2ab601208ef90f1b4bf58ff88fb332382da699cd9?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5bda1ff6af0fc97735078d2ab601208ef90f1b4bf58ff88fb332382da699cd9?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5bda1ff6af0fc97735078d2ab601208ef90f1b4bf58ff88fb332382da699cd9?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5bda1ff6af0fc97735078d2ab601208ef90f1b4bf58ff88fb332382da699cd9?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5bda1ff6af0fc97735078d2ab601208ef90f1b4bf58ff88fb332382da699cd9?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5bda1ff6af0fc97735078d2ab601208ef90f1b4bf58ff88fb332382da699cd9?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5bda1ff6af0fc97735078d2ab601208ef90f1b4bf58ff88fb332382da699cd9?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5bda1ff6af0fc97735078d2ab601208ef90f1b4bf58ff88fb332382da699cd9?apiKey=bef308c750544a03a3bf2b5acb540117&"
            className="shrink-0 aspect-square w-[52px]"
          />
          <div>
            <div className="text-lg font-poppins font-medium text-neutral-800">
              Paula Mora
            </div>
            <div className="my-auto text-sm font-poppins text-zinc-900">
              (123) 243-2343
            </div>
          </div>
        </div>

        <div>
          <div>
            <div className="text-bs font-light text-neutral-800">
              1 min ago
            </div>

          </div>
        </div>
      </div>
      <div className="flex justify-between font-poppins rounded-2xl px-4 py-2.5 hover:bg-indigo-50 cursor-pointer">
        <div className="flex gap-3">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9cff14cd1d69ba21e38b6a84b6bd2272d9be3d5480d721837bb18067fd8669a5?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9cff14cd1d69ba21e38b6a84b6bd2272d9be3d5480d721837bb18067fd8669a5?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9cff14cd1d69ba21e38b6a84b6bd2272d9be3d5480d721837bb18067fd8669a5?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9cff14cd1d69ba21e38b6a84b6bd2272d9be3d5480d721837bb18067fd8669a5?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9cff14cd1d69ba21e38b6a84b6bd2272d9be3d5480d721837bb18067fd8669a5?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9cff14cd1d69ba21e38b6a84b6bd2272d9be3d5480d721837bb18067fd8669a5?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9cff14cd1d69ba21e38b6a84b6bd2272d9be3d5480d721837bb18067fd8669a5?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9cff14cd1d69ba21e38b6a84b6bd2272d9be3d5480d721837bb18067fd8669a5?apiKey=bef308c750544a03a3bf2b5acb540117&"
            className="shrink-0 aspect-[0.98] w-[52px]"
          />
          <div>
            <div className="text-lg font-poppins font-medium text-neutral-800">
              Paula Mora
            </div>
            <div className="my-auto text-sm font-poppins text-zinc-900">
              (123) 243-2343
            </div>
          </div>
        </div>

        <div>
          <div>
            <div className="text-bs font-light text-neutral-800">
              1 min ago
            </div>

          </div>
        </div>
      </div>



    </div>
  );
};

export default DropDownInbox;