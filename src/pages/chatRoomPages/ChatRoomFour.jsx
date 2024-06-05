import React from "react";
import { useNavigate } from "react-router-dom";

const ChatRoomFour = () => {
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
        navigate("/");
      }}
    >
      <div className="px-5 py-7 bg-white rounded-2xl shadow-2xl max-w-[708px] overflow-y-auto max-h-screen hide-scrollbar">
        <div className="flex flex-col">
          <div className="flex flex-col self-end max-w-full text-base font-medium leading-6 text-black w-[431px] max-md:mr-2.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a0ffe000afe6d3026ecf970cf08792ea307b1db969b8f2d1e1e822bd7a8dd245?apiKey=bef308c750544a03a3bf2b5acb540117&"
              className="self-end aspect-square w-[30px] cursor-pointer"
              onClick={() => navigate(-1)}
            />

          </div>
          {/* Ttile */}
          <div className="flex flex-col justify-center items-center max-w-full text-base font-medium leading-6 text-black w-[431px] max-md:mr-2.5">
            <div className="flex overflow-hidden justify-center items-center relative flex-col gap-0.5  pt-4 aspect-square fill-indigo-900 max-w-[32px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/242b3dab579eb75f6af0c46a2300bdb28152154732161bbf0444b1021d3eb0bb?apiKey=bef308c750544a03a3bf2b5acb540117&"
                className="object-cover absolute inset-0 size-full"
              />

              <div className="flex relative flex-col flex-1 items-end">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d956772d98e0de83b185113666f0c39788f6070f165e1bffb51615d9580257e3?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d956772d98e0de83b185113666f0c39788f6070f165e1bffb51615d9580257e3?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d956772d98e0de83b185113666f0c39788f6070f165e1bffb51615d9580257e3?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d956772d98e0de83b185113666f0c39788f6070f165e1bffb51615d9580257e3?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d956772d98e0de83b185113666f0c39788f6070f165e1bffb51615d9580257e3?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d956772d98e0de83b185113666f0c39788f6070f165e1bffb51615d9580257e3?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d956772d98e0de83b185113666f0c39788f6070f165e1bffb51615d9580257e3?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d956772d98e0de83b185113666f0c39788f6070f165e1bffb51615d9580257e3?apiKey=bef308c750544a03a3bf2b5acb540117&"
                  className="w-6/12 aspect-[1.09] fill-amber-500"
                />
              </div>
            </div>
            <div className="mt-3.5 max-md:max-w-full font-poppins font-semibold">
              Invite Members to Everyone chat
            </div>
          </div>
          <div className="flex flex-col items-center mt-2 w-full max-md:pl-5 max-md:max-w-full">
            <div className="mt-7 w-full lg:w-[650px] max-md:flex-wrap max-md:max-w-full">
              <div className="flex gap-2.5 px-5 py-3 text-sm tracking-normal leading-5 rounded-md border border-emerald-500 border-solid bg-stone-50 text-zinc-900 max-md:flex-wrap">
                <div className="flex gap-1 px-3 py-1 capitalize bg-white rounded-xl">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/46f12dfdadd2094e55946522eb5a4a64af348fa9ed190e358763e54ff0f39879?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/46f12dfdadd2094e55946522eb5a4a64af348fa9ed190e358763e54ff0f39879?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/46f12dfdadd2094e55946522eb5a4a64af348fa9ed190e358763e54ff0f39879?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/46f12dfdadd2094e55946522eb5a4a64af348fa9ed190e358763e54ff0f39879?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/46f12dfdadd2094e55946522eb5a4a64af348fa9ed190e358763e54ff0f39879?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/46f12dfdadd2094e55946522eb5a4a64af348fa9ed190e358763e54ff0f39879?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/46f12dfdadd2094e55946522eb5a4a64af348fa9ed190e358763e54ff0f39879?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/46f12dfdadd2094e55946522eb5a4a64af348fa9ed190e358763e54ff0f39879?apiKey=bef308c750544a03a3bf2b5acb540117&"
                    className="shrink-0 self-start rounded-full aspect-square w-[18px]"
                  />
                  <div className="font-poppins font-medium">Raheel Khan</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/185f02ea1f6c60fd24746621fac32745b1bc51a3ce23ca7011a53e21f2330028?apiKey=bef308c750544a03a3bf2b5acb540117&"
                    className="shrink-0 my-auto w-4 aspect-square"
                  />
                </div>
                <div className="flex gap-1 px-3 py-1 capitalize bg-white rounded-xl">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ef1e8f4e939991ffd854ca0d5b1f094f8d87c56e1ff643f52fad7808d5a4a7bd?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef1e8f4e939991ffd854ca0d5b1f094f8d87c56e1ff643f52fad7808d5a4a7bd?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef1e8f4e939991ffd854ca0d5b1f094f8d87c56e1ff643f52fad7808d5a4a7bd?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef1e8f4e939991ffd854ca0d5b1f094f8d87c56e1ff643f52fad7808d5a4a7bd?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef1e8f4e939991ffd854ca0d5b1f094f8d87c56e1ff643f52fad7808d5a4a7bd?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef1e8f4e939991ffd854ca0d5b1f094f8d87c56e1ff643f52fad7808d5a4a7bd?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef1e8f4e939991ffd854ca0d5b1f094f8d87c56e1ff643f52fad7808d5a4a7bd?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef1e8f4e939991ffd854ca0d5b1f094f8d87c56e1ff643f52fad7808d5a4a7bd?apiKey=bef308c750544a03a3bf2b5acb540117&"
                    className="shrink-0 self-start rounded-full aspect-square w-[18px]"
                  />
                  <div className="font-poppins font-medium">Frances Swann</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/185f02ea1f6c60fd24746621fac32745b1bc51a3ce23ca7011a53e21f2330028?apiKey=bef308c750544a03a3bf2b5acb540117&"
                    className="shrink-0 my-auto w-4 aspect-square"
                  />
                </div>
                <div className="flex gap-1 px-3 py-1 capitalize bg-white rounded-xl">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2d662932dfee678b611f508d039b75c374ad00899bdea38247381c5ad4dd515b?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d662932dfee678b611f508d039b75c374ad00899bdea38247381c5ad4dd515b?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d662932dfee678b611f508d039b75c374ad00899bdea38247381c5ad4dd515b?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d662932dfee678b611f508d039b75c374ad00899bdea38247381c5ad4dd515b?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d662932dfee678b611f508d039b75c374ad00899bdea38247381c5ad4dd515b?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d662932dfee678b611f508d039b75c374ad00899bdea38247381c5ad4dd515b?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d662932dfee678b611f508d039b75c374ad00899bdea38247381c5ad4dd515b?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d662932dfee678b611f508d039b75c374ad00899bdea38247381c5ad4dd515b?apiKey=bef308c750544a03a3bf2b5acb540117&"
                    className="shrink-0 self-start rounded-full aspect-square w-[18px]"
                  />
                  <div className="font-poppins font-medium">Dennis Callis</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/185f02ea1f6c60fd24746621fac32745b1bc51a3ce23ca7011a53e21f2330028?apiKey=bef308c750544a03a3bf2b5acb540117&"
                    className="shrink-0 my-auto w-4 aspect-square"
                  />
                </div>
                <div className="my-auto">
                  <span className="font-poppins">Sa</span>
                  <span className="font-bold">|</span>
                </div>
              </div>
              {/* Selcet Mouse */}
              <div className="flex flex-col p-2 mt-5 text-sm font-medium tracking-normal leading-5 bg-white rounded-xl shadow-xl max-w-[507px] text-stone-700">
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

            <div className="justify-center lg:px-24 py-2.5 my-auto bg-rose-500 text-white max-md:px-8 font-semibold font-poppins mt-6 rounded-full cursor-pointer">
              Invite
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatRoomFour;