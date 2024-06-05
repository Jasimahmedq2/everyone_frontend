import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const PrivateGroup = () => {
  const [isOpenModal, setIsOpenModal] = React.useState(true);
  // const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("public");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const [imageSrc, setImageSrc] = useState(
    "https://cdn.builder.io/api/v1/image/assets/TEMP/305f3a99c9491b1c9dafebbaa7d7ffd6aba77e17667a9cff900ed7b6362fad86?apiKey=bef308c750544a03a3bf2b5acb540117&"
  );

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageSrc(e.target.result);
      };
      reader.readAsDataURL(file);
    }
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
      <div className="pt-4 pb-11 bg-white rounded-2xl shadow-2xl max-w-[708px] overflow-y-auto max-h-screen hide-scrollbar">
        <div className="flex flex-col">
          <div className="flex gap-5 px-2 justify-between items-start self-end max-w-full text-base font-medium leading-6 text-black w-[393px] max-md:mr-2.5">
            <div className="mt-3.5 font-medium font-poppins">Create Group</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a0ffe000afe6d3026ecf970cf08792ea307b1db969b8f2d1e1e822bd7a8dd245?apiKey=bef308c750544a03a3bf2b5acb540117&"
              className="shrink-0 aspect-square w-[30px] cursor-pointer"
              onClick={() => navigate(-1)}
            />
          </div>
          <div className="flex flex-col pr-4 pl-14 mt-9 w-full max-md:pl-5 max-md:max-w-full">
            <div>
              <div className="text-sm leading-6 text-slate-400 max-md:max-w-full">
                Group Photo
              </div>
              <img
                loading="lazy"
                src={imageSrc}
                alt="Uploaded Preview"
                className="mt-4 border border-dashed aspect-square border-neutral-400 w-[86px]"
              />
              <div className="flex gap-1 self-start mt-6 text-xs leading-5">
                <div className="text-lime-950 font-poppins font-medium">
                  Drop your image here, or
                </div>
                <div className="font-medium font-poppins text-blue-700 cursor-pointer">
                  <label htmlFor="file-upload" className="cursor-pointer">
                    browse
                  </label>
                </div>
                <input
                  id="file-upload"
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleFileUpload}
                />
              </div>
            </div>
            <div className="mt-1.5 text-xs leading-3 text-slate-400 max-md:max-w-full">
              Supports: PNG, JPG, JPEG, WEBP
            </div>
            <div className="self-start mt-7 text-sm leading-6 text-slate-400">
              Group Status
            </div>
            <div>
              <div
                className={`flex gap-2.5 self-start py-1 mt-4 cursor-pointer ${
                  selectedOption === "public"
                    ? "text-black"
                    : "text-neutral-400"
                }`}
                onClick={() => handleOptionChange("public")}
              >
                <div className="flex flex-col justify-center self-start mt-1">
                  <div className="flex flex-col justify-center items-center px-0.5 w-3 h-3 rounded-full bg-zinc-300">
                    <div
                      className={`shrink-0 w-2 h-2 rounded-full ${
                        selectedOption === "public" ? "bg-rose-500" : "bg-white"
                      }`}
                    />
                  </div>
                </div>
                <div className="flex-auto text-base font-medium font-poppins">
                  Public{" "}
                  <span className="text-neutral-400 font-light">
                    (Everyone can join your group without your permission)
                  </span>
                </div>
              </div>
              <div
                className={`flex gap-2.5 self-start py-1 mt-3.5 cursor-pointer ${
                  selectedOption === "private"
                    ? "text-black"
                    : "text-neutral-400"
                }`}
                onClick={() => handleOptionChange("private")}
              >
                <div className="flex flex-col justify-center self-start mt-1">
                  <div className="flex flex-col justify-center items-center px-0.5 w-3 h-3 rounded-full bg-zinc-300">
                    <div
                      className={`shrink-0 w-2 h-2 rounded-full ${
                        selectedOption === "private"
                          ? "bg-rose-500"
                          : "bg-white"
                      }`}
                    />
                  </div>
                </div>
                <div className="flex-auto text-base font-medium font-poppins">
                  Private{" "}
                  <span className="text-neutral-400 font-light">
                    (Only people can join your group who have your invitation)
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-10 text-sm font-medium font-poppins leading-6 text-slate-400 max-md:mt-10 max-md:max-w-full">
              Group Name
            </div>
            <div>
              <input
                type="text"
                id="inputField"
                name="inputField"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                required
              />
            </div>
            <div className="mt-6 font-medium font-poppins text-sm leading-6 text-slate-400 max-md:max-w-full">
              Purpose (Optional)
            </div>
            <div>
              <input
                type="text"
                id="inputField"
                name="inputField"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                required
              />
            </div>
            {/* Other Part */}
            <div className="mt-6 font-medium font-poppins text-sm leading-6 text-slate-400 max-md:max-w-full">
              Invite (People)
            </div>
            <div className="mt-2 w-full  max-md:flex-wrap max-md:max-w-full">
              <div>
                <input
                  type="text"
                  id="inputField"
                  name="inputField"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                  required
                />
              </div>
              {/* Selcet Mouse */}

              <div className="flex justify-end mt-2 ">
                <div className="flex gap-1 px-3 py-2.5 text-xs font-semibold tracking-normal leading-5 text-center bg-white rounded-lg shadow-2xl text-zinc-900 w-28">
                  <div>Send Invite</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f869cd9e657f51318bdc0679e49343ec39a242b26c2f8e4cda6f1ef2782936ce?apiKey=bef308c750544a03a3bf2b5acb540117&"
                    className="shrink-0 my-auto w-3.5 aspect-square"
                  />
                </div>
              </div>

              <div className="flex flex-col p-2 lg:mt-0 mt-3 text-sm font-medium tracking-normal leading-5 bg-white rounded-xl shadow-xl max-w-[507px] text-stone-700">
                <div className="flex gap-3 px-3 py-2 rounded-xl max-md:flex-wrap">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/28b5b14516289d639d1d9ec0ae7885a7f82148f067a2734c337f410fef934044?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/28b5b14516289d639d1d9ec0ae7885a7f82148f067a2734c337f410fef934044?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/28b5b14516289d639d1d9ec0ae7885a7f82148f067a2734c337f410fef934044?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/28b5b14516289d639d1d9ec0ae7885a7f82148f067a2734c337f410fef934044?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/28b5b14516289d639d1d9ec0ae7885a7f82148f067a2734c337f410fef934044?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/28b5b14516289d639d1d9ec0ae7885a7f82148f067a2734c337f410fef934044?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/28b5b14516289d639d1d9ec0ae7885a7f82148f067a2734c337f410fef934044?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/28b5b14516289d639d1d9ec0ae7885a7f82148f067a2734c337f410fef934044?apiKey=bef308c750544a03a3bf2b5acb540117&"
                    className="shrink-0 w-8 aspect-square"
                  />
                  <div className="my-auto max-md:max-w-full">
                    Sebastian Graham
                  </div>
                </div>

                <div className="flex gap-3 px-3 py-2 rounded-lg bg-zinc-50 max-md:flex-wrap">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/079ff5e8c9e70b4c0f162023a4229226c5a2f0e53770461f7742c65a973f8bd0?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/079ff5e8c9e70b4c0f162023a4229226c5a2f0e53770461f7742c65a973f8bd0?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/079ff5e8c9e70b4c0f162023a4229226c5a2f0e53770461f7742c65a973f8bd0?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/079ff5e8c9e70b4c0f162023a4229226c5a2f0e53770461f7742c65a973f8bd0?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/079ff5e8c9e70b4c0f162023a4229226c5a2f0e53770461f7742c65a973f8bd0?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/079ff5e8c9e70b4c0f162023a4229226c5a2f0e53770461f7742c65a973f8bd0?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/079ff5e8c9e70b4c0f162023a4229226c5a2f0e53770461f7742c65a973f8bd0?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/079ff5e8c9e70b4c0f162023a4229226c5a2f0e53770461f7742c65a973f8bd0?apiKey=bef308c750544a03a3bf2b5acb540117&"
                    className="shrink-0 w-8 aspect-square"
                  />
                  <div className="my-auto max-md:max-w-full">Sara Curz</div>
                </div>
              </div>
            </div>

            <div className="justify-center items-center self-center px-16 py-3.5 mt-11  max-w-full text-base font-semibold text-white bg-rose-500 rounded-[56px]  max-md:px-16 lg:px-24 max-md:mt-10 cursor-pointer">
              <Link to="/create-group/public">Create Group</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateGroup;
