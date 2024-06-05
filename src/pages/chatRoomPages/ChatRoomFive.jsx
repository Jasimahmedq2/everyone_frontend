import React from 'react';
import { useNavigate } from 'react-router-dom';

const ChatRoomFive = () => {
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


            <div className="flex relative flex-col flex-1 items-end">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9287ab3b85875184dd7a7876181b4f0b356559df0685d9486ca50e5a49353c49?apiKey=bef308c750544a03a3bf2b5acb540117&"
                className="w-full aspect-square fill-indigo-900 max-w-[32px]"
              />
            </div>

            <div className="mt-3.5 max-md:max-w-full font-poppins font-semibold">
              Invite Sent!
            </div>
          </div>
          <div className="flex flex-col items-center mt-2 w-full max-md:pl-5 max-md:max-w-full">


            <div className="justify-center lg:px-24 py-2.5 my-auto bg-rose-500 text-white max-md:px-8 font-medium font-poppins mt-6 rounded-full cursor-pointer">
              Okey!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatRoomFive;