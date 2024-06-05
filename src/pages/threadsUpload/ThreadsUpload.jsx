import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ThreadsUpload = () => {
  const [isOpenModal, setIsOpenModal] = React.useState(true);
  const navigate = useNavigate();

  const [threadText, setThreadText] = useState("");

  const handleChange = (event) => {
    setThreadText(event.target.value);
  };

  const [threadText2, setThreadText2] = useState("");
  const [files, setFiles2] = useState([]);

  const handleChange2 = (event) => {
    setThreadText2(event.target.value);
  };

  const handleFileChange2 = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles2(selectedFiles);
  };

  return (
    <div
      className={`transition-all duration-300 ${
        isOpenModal ? "scale-100" : "scale-0"
      } fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-black/70 flex items-center justify-center z-[100] overflow-y-auto`}
      onClick={(e) => {
        if (e.target !== e.currentTarget) {
          return;
        }
        setIsOpenModal((prev) => !prev);
        navigate("/");
      }}
    >
      <div className="px-7 py-9 bg-white rounded-2xl shadow-2xl max-w-[900px] max-md:px-5 font-poppins overflow-y-auto max-h-[28rem] hide-scrollbar">
        <div className="flex flex-col">
          <div className="flex gap-3 items-start max-w-full w-[420px]">
            <div className="flex flex-col items-center pb-4 mt-2 ">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/358c3f6c94ddaeb0cfd91bc32bea7c9cbbd58e8ce7fc819d84a507d88819a0e3?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/358c3f6c94ddaeb0cfd91bc32bea7c9cbbd58e8ce7fc819d84a507d88819a0e3?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/358c3f6c94ddaeb0cfd91bc32bea7c9cbbd58e8ce7fc819d84a507d88819a0e3?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/358c3f6c94ddaeb0cfd91bc32bea7c9cbbd58e8ce7fc819d84a507d88819a0e3?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/358c3f6c94ddaeb0cfd91bc32bea7c9cbbd58e8ce7fc819d84a507d88819a0e3?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/358c3f6c94ddaeb0cfd91bc32bea7c9cbbd58e8ce7fc819d84a507d88819a0e3?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/358c3f6c94ddaeb0cfd91bc32bea7c9cbbd58e8ce7fc819d84a507d88819a0e3?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/358c3f6c94ddaeb0cfd91bc32bea7c9cbbd58e8ce7fc819d84a507d88819a0e3?apiKey=bef308c750544a03a3bf2b5acb540117&"
                className="aspect-[1.1] w-[45px]"
              />
            </div>
            <div className="grow flex justify-between">
              <div className="flex flex-col grow items-start pt-1.5 pr-20 basis-0 w-fit">
                <div className="text-xl leading-7 text-black">
                  johnmichael_164
                </div>
             
                
              </div>
              <div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a0ffe000afe6d3026ecf970cf08792ea307b1db969b8f2d1e1e822bd7a8dd245?apiKey=bef308c750544a03a3bf2b5acb540117&"
                  className="shrink-0 aspect-square w-[30px] cursor-pointer"
                  onClick={() => navigate(-1)}
                />
              </div>
            </div>
          </div>
          <div className="flex  mt-2.5 lg:mt-0 text-xl leading-7 text-black px-10">
            {/* <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3ea3ffcf6300f7076a10c9055fb18f6358896dd5be455da0e6d3cbefb2bbe871?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ea3ffcf6300f7076a10c9055fb18f6358896dd5be455da0e6d3cbefb2bbe871?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ea3ffcf6300f7076a10c9055fb18f6358896dd5be455da0e6d3cbefb2bbe871?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ea3ffcf6300f7076a10c9055fb18f6358896dd5be455da0e6d3cbefb2bbe871?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ea3ffcf6300f7076a10c9055fb18f6358896dd5be455da0e6d3cbefb2bbe871?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ea3ffcf6300f7076a10c9055fb18f6358896dd5be455da0e6d3cbefb2bbe871?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ea3ffcf6300f7076a10c9055fb18f6358896dd5be455da0e6d3cbefb2bbe871?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ea3ffcf6300f7076a10c9055fb18f6358896dd5be455da0e6d3cbefb2bbe871?apiKey=bef308c750544a03a3bf2b5acb540117&"
              className="shrink-0 aspect-[1.12] w-[46px h-[46px]"
            /> */}
            <textarea
              value={threadText}
              onChange={handleChange}
              className=" font-light text-gray-400  focus:outline-none"
              placeholder="Write your thread..."
              rows={3}
              cols={42} // adjust the number of rows as needed
            />
            
          </div>
          <div className="flex gap-2 mt-4 lg:mt-0 px-8">
                  <div className="flex gap-2 mt-0">
                    {files.map((file, index) => (
                      <img
                        key={index}
                        src={URL.createObjectURL(file)}
                        alt={`Attached file ${index}`}
                        className="shrink-0 self-start w-6 aspect-[1.04]"
                      />
                    ))}
                    <input
                      type="file"
                      multiple
                      onChange={handleFileChange2}
                      className="hidden"
                      id="fileInput"
                    />

                    <label htmlFor="fileInput" className="cursor-pointer">
                      <div className="flex flex-row gap-2.5 mt-2.5 text-xl leading-7 text-black">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/40e4ac4aba9aecec65cc1bf0648c1d20ee878a152026f105de7c01437a9817bd?apiKey=bef308c750544a03a3bf2b5acb540117&"
                          className="shrink-0 w-6 aspect-square"
                        />
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e483d8962946edd04ae3e83f93b1a64052e22d0e8cb245bed8684aa5e22b5bce?apiKey=bef308c750544a03a3bf2b5acb540117&"
                          className="shrink-0 w-6 aspect-square"
                        />
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8c6fab2cbdedf13c0ef22acfbf143000c39dc53a424ecc89de4cf3491b80902?apiKey=bef308c750544a03a3bf2b5acb540117&"
                          className="shrink-0 w-6 aspect-square"
                        />
                      </div>
                    </label>
                  </div>
                </div>
          <div className="flex gap-5 justify-between self-stretch mt-44 w-full leading-[140%] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-0 my-auto text-base text-neutral-400">
              <div>Anyone can reply</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c735567ad52c50cefb583012d5b492e5d0ca330675bee0431aefc00db703768?apiKey=bef308c750544a03a3bf2b5acb540117&"
                className="shrink-0 my-auto aspect-[1.06] w-[18px]"
              />
            </div>
            <div className="justify-center px-5 py-1 text-lg font-poppins text-white whitespace-nowrap bg-rose-500 rounded-lg max-md:px-5 cursor-pointer">
              Post
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreadsUpload;
