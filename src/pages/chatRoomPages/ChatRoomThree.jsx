import React from 'react';
import { useNavigate } from 'react-router-dom';

const ChatRoomThree = () => {
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
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/28f5e67018c8111af19ea1db65a6e131d774b1e56be11c36dd2c9825a661c4d8?apiKey=bef308c750544a03a3bf2b5acb540117&"
              className="mt-2.5 ml-20 w-9 aspect-[0.84] max-md:ml-2.5"
            />
            <div className="mt-3.5 max-md:max-w-full font-poppins font-medium">
              Create a New Chat Room
            </div>
          </div>
          <div className="flex flex-col items-center pr-4 pl-9 mt-8 w-full max-md:pl-5 max-md:max-w-full">
            <div className=" font-poppins justify-center items-start self-stretch px-5 py-3 text-xl rounded-md border border-emerald-500 border-solid bg-stone-50 text-zinc-900 max-md:pr-5 max-md:max-w-full">
              Everyone Chat<span className="font-[275]">|</span>
            </div>

            <div className="mt-7 w-full lg:w-[629px] max-md:flex-wrap max-md:max-w-full">
              <div className="flex justify-between text-base font-medium text-neutral-400">
                <div className="flex justify-center items-center gap-3">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/243f0f3d813baf5711601277ca0eb6e312f436e14f3699f42c3ef62265149ab6?apiKey=bef308c750544a03a3bf2b5acb540117&"
                    className="shrink-0 my-auto w-5 aspect-square"
                  />
                  <span className="font-medium font-poppins text-gray-900">
                    Make chat private
                    <span className="font-poppins font-light"> (require an invitation to join)</span>
                  </span>


                </div>
                <div>
                  <input
                    type="checkbox"
                    className="switch switch-success"
                    defaultChecked
                  />
                </div>

              </div>

              <div className="flex flex-col justify-center items-start py-0.5 my-auto fill-neutral-200">

                <div className="shrink-0 h-4 bg-white rounded-full" />

              </div>
              <div className="justify-center p-4 text-base font-poppins text-orange-400 bg-yellow-50 rounded-lg max-w-[628px] max-md:pr-5 max-md:max-w-full">
                This chat will be private, so only people invited will be able to see it.
                You can invite people to this chat after it’s created.
              </div>
            </div>

            <div className="mt-8 ml-2.5 text-base text-zinc-900 max-md:mt-6 font-light font-poppins">
              The Room will be{" "}
              <span className="font-medium text-zinc-900 font-poppins">private</span>, so all
              members can join it.
            </div>

            <div className="justify-center lg:px-20 py-2 my-auto bg-rose-500 text-white max-md:px-8 font-semibold font-poppins mt-6 rounded-full cursor-pointer">
              Create
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ChatRoomThree;