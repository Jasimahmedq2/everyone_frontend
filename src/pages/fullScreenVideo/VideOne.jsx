import * as React from "react";

export const VideoOne = () => {
  return (
    <div>
      <div className="flex flex-col justify-center bg-white">
        <div className="flex overflow-hidden relative flex-col pb-9 w-full min-h-[1024px] max-md:max-w-full">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d5a2ac38093704dd652c21a0bf389adb7c592b1c80341155ac73604998a256d5?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d5a2ac38093704dd652c21a0bf389adb7c592b1c80341155ac73604998a256d5?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d5a2ac38093704dd652c21a0bf389adb7c592b1c80341155ac73604998a256d5?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d5a2ac38093704dd652c21a0bf389adb7c592b1c80341155ac73604998a256d5?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d5a2ac38093704dd652c21a0bf389adb7c592b1c80341155ac73604998a256d5?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d5a2ac38093704dd652c21a0bf389adb7c592b1c80341155ac73604998a256d5?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d5a2ac38093704dd652c21a0bf389adb7c592b1c80341155ac73604998a256d5?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d5a2ac38093704dd652c21a0bf389adb7c592b1c80341155ac73604998a256d5?apiKey=bef308c750544a03a3bf2b5acb540117&"
            className="object-cover absolute inset-0 size-full"
          />
          <div className="flex relative gap-5 justify-between items-start lg:mt-5 mt-3 mx-2 w-full max-md:flex-wrap max-md:pr-0 max-md:max-w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/28523f7045a67f4f295464c902ed4e1fc7d981313203ef1fb423bde8b3fc6874?apiKey=bef308c750544a03a3bf2b5acb540117&"
              className="shrink-0 aspect-square w-[58px]"
            />


            {/* Right side icon */}
            <div className="flex relative flex-col items-end self-end px-5 mt-0 lg:mt-4 max-w-full pointer-events-auto w-[412px]">

              <div className="flex flex-col grow shrink-0 basis-0 w-fit lg:mr-4">

                <div className="flex gap-5 text-base font-bold text-white rounded-sm shadow-lg backdrop-blur-[13px] bg-black bg-opacity-20">
                  <div className="flex gap-2.5 mt-0">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/95f31c3450821953e32befd34a24217a9d5005d8098ae4e94afd94e7b6a1430a?apiKey=bef308c750544a03a3bf2b5acb540117&"
                      className="shrink-0 self-start mt-11 w-6 aspect-square max-md:mt-10"
                    />
                  </div>
                  <div className="shrink-0 bg-rose-500 rounded-sm h-[111px] w-[5px]" />
                  <div className="flex flex-auto gap-5 my-auto">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/37186dc61c60b3588acb66df892fdce2910b2054877c21dad6a37cafffb9c456?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/37186dc61c60b3588acb66df892fdce2910b2054877c21dad6a37cafffb9c456?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/37186dc61c60b3588acb66df892fdce2910b2054877c21dad6a37cafffb9c456?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/37186dc61c60b3588acb66df892fdce2910b2054877c21dad6a37cafffb9c456?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/37186dc61c60b3588acb66df892fdce2910b2054877c21dad6a37cafffb9c456?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/37186dc61c60b3588acb66df892fdce2910b2054877c21dad6a37cafffb9c456?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/37186dc61c60b3588acb66df892fdce2910b2054877c21dad6a37cafffb9c456?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/37186dc61c60b3588acb66df892fdce2910b2054877c21dad6a37cafffb9c456?apiKey=bef308c750544a03a3bf2b5acb540117&"
                      className="shrink-0 self-start rounded-full aspect-square w-[57px]"
                    />
                    <div className="flex flex-col">
                      <div>Summer 2024</div>
                      <div className="mt-1">#3564-8212</div>
                      <div className="mt-3 text-xs font-light text-white text-opacity-70">
                        <span className="font-semibold font-inter text-white leading-sung">
                          Public
                        </span>
                        <span className="text-white font-inter font-normal"> - Worldwide</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3 mx-7 mt-4 max-md:mx-2.5">
                  <div className="justify-center items-center px-5 py-3 text-xs font-semibold font-inter text-white whitespace-nowrap rounded-md border border-white border-solid lg:px-10 font-">
                    Subscribe
                  </div>
                  <div className="flex justify-center items-center px-5 py-2 rounded-md backdrop-blur-[8.399999618530273px] bg-white bg-opacity-30">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/5a9dc18f19bf1790edb275a07f89030defd6b69ecd10b7c43447f73ecba40525?apiKey=bef308c750544a03a3bf2b5acb540117&"
                      className="w-6 aspect-square"
                    />
                  </div>
                </div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/aeee2ceb98d6f1bc21cd3905b5b7a520ba2ee0e52c1bad60d4016828133b1b28?apiKey=bef308c750544a03a3bf2b5acb540117&"
                className="mt-9 mr-5 aspect-square w-[47px] max-md:mr-2.5"
              />
              <div className="mt-1 mr-5 text-xs font-semibold tracking-wide text-center text-white max-md:mr-2.5">
                11.9K
              </div>
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b28104c58b2b1e6af56f1e5f600fe71dcd19b9574218d16a16b508fb7fad3c27?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b28104c58b2b1e6af56f1e5f600fe71dcd19b9574218d16a16b508fb7fad3c27?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b28104c58b2b1e6af56f1e5f600fe71dcd19b9574218d16a16b508fb7fad3c27?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b28104c58b2b1e6af56f1e5f600fe71dcd19b9574218d16a16b508fb7fad3c27?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b28104c58b2b1e6af56f1e5f600fe71dcd19b9574218d16a16b508fb7fad3c27?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b28104c58b2b1e6af56f1e5f600fe71dcd19b9574218d16a16b508fb7fad3c27?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b28104c58b2b1e6af56f1e5f600fe71dcd19b9574218d16a16b508fb7fad3c27?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b28104c58b2b1e6af56f1e5f600fe71dcd19b9574218d16a16b508fb7fad3c27?apiKey=bef308c750544a03a3bf2b5acb540117&"
                className="mt-3 mr-5 aspect-square w-[47px] max-md:mr-2.5"
              />
              <div className="mt-2.5 mr-5 text-xs font-semibold tracking-wide text-center text-white max-md:mr-2.5">
                11.9K
              </div>
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/36f4b0f0410d859a378ab63f34f17cb1280bff6d28dec8524942b0a15f148807?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/36f4b0f0410d859a378ab63f34f17cb1280bff6d28dec8524942b0a15f148807?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/36f4b0f0410d859a378ab63f34f17cb1280bff6d28dec8524942b0a15f148807?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/36f4b0f0410d859a378ab63f34f17cb1280bff6d28dec8524942b0a15f148807?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/36f4b0f0410d859a378ab63f34f17cb1280bff6d28dec8524942b0a15f148807?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/36f4b0f0410d859a378ab63f34f17cb1280bff6d28dec8524942b0a15f148807?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/36f4b0f0410d859a378ab63f34f17cb1280bff6d28dec8524942b0a15f148807?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/36f4b0f0410d859a378ab63f34f17cb1280bff6d28dec8524942b0a15f148807?apiKey=bef308c750544a03a3bf2b5acb540117&"
                className="mt-3 mr-5 aspect-square w-[47px] max-md:mr-2.5"
              />
              <div className="mt-2.5 mr-5 text-xs font-semibold tracking-wide text-center text-white max-md:mr-2.5">
                11.9K
              </div>
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e6e44d0788dd1d1070293d858dc5961f53c4df97e5c9263791e617a2887a6c30?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6e44d0788dd1d1070293d858dc5961f53c4df97e5c9263791e617a2887a6c30?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6e44d0788dd1d1070293d858dc5961f53c4df97e5c9263791e617a2887a6c30?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6e44d0788dd1d1070293d858dc5961f53c4df97e5c9263791e617a2887a6c30?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6e44d0788dd1d1070293d858dc5961f53c4df97e5c9263791e617a2887a6c30?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6e44d0788dd1d1070293d858dc5961f53c4df97e5c9263791e617a2887a6c30?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6e44d0788dd1d1070293d858dc5961f53c4df97e5c9263791e617a2887a6c30?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6e44d0788dd1d1070293d858dc5961f53c4df97e5c9263791e617a2887a6c30?apiKey=bef308c750544a03a3bf2b5acb540117&"
                className="mt-3 mr-5 aspect-square w-[47px] max-md:mr-2.5"
              />
              <div className="mt-2.5 mr-5 text-xs font-semibold tracking-wide text-center text-white max-md:mr-2.5">
                11.9K
              </div>
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/22d63681642dd79313c675b2630d5b2b3483a2a47e370dadd9b37e2a1cf35f3f?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/22d63681642dd79313c675b2630d5b2b3483a2a47e370dadd9b37e2a1cf35f3f?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/22d63681642dd79313c675b2630d5b2b3483a2a47e370dadd9b37e2a1cf35f3f?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/22d63681642dd79313c675b2630d5b2b3483a2a47e370dadd9b37e2a1cf35f3f?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/22d63681642dd79313c675b2630d5b2b3483a2a47e370dadd9b37e2a1cf35f3f?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/22d63681642dd79313c675b2630d5b2b3483a2a47e370dadd9b37e2a1cf35f3f?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/22d63681642dd79313c675b2630d5b2b3483a2a47e370dadd9b37e2a1cf35f3f?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/22d63681642dd79313c675b2630d5b2b3483a2a47e370dadd9b37e2a1cf35f3f?apiKey=bef308c750544a03a3bf2b5acb540117&"
                className="mt-3 mr-5 aspect-square w-[47px] max-md:mr-2.5"
              />
              <div className="flex gap-2.5 justify-between mt-36 mr-6 max-md:mt-10 max-md:mr-2.5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/679dcdd965b843badab10728580bcce92709c1e2c6fb51ab7be1d1ba50d1f0fb?apiKey=bef308c750544a03a3bf2b5acb540117&"
                  className="shrink-0 aspect-square w-[57px]"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/592bd9e31db36ab7cfd7a9160cb32eb5e8f27bb3748b879cbfc7805f729d35b7?apiKey=bef308c750544a03a3bf2b5acb540117&"
                  className="shrink-0 aspect-square w-[57px]"
                />
              </div>

              {/* Video play section */}
              <div className="flex gap-3 justify-between items-center text-base text-white whitespace-nowrap max-md:flex-wrap lg:mt-10 mt-8 mx-2.5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f080b56205ff85852b6fd6c43dd04df41e6fb7cf039869beb1899510eb058a2f?apiKey=bef308c750544a03a3bf2b5acb540117&"
                  className="shrink-0 self-stretch aspect-[0.95] w-[19px]"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ecb6c88c9ef7722a0a2ad31edb0d34fd119bf65493da22917f053e80da1da646?apiKey=bef308c750544a03a3bf2b5acb540117&"
                  className="shrink-0 self-stretch my-auto w-3.5 aspect-[0.88] fill-white"
                />
                <div className=" lg:mx-6  my-auto  h-1 backdrop-blur-[10.699999809265137px] bg-white bg-opacity-30 rounded-[30px] w-[120px] lg:w-[1000px]" />
                <div className="self-stretch my-auto lg:mx-2 mx-0">00:05/01:00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
