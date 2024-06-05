import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const PublicGroup = () => {
  const [isOpenModal, setIsOpenModal] = React.useState(true);
  const { user } = useSelector((state) => state.auth);
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
            <div className="text-sm leading-6 text-slate-400 max-md:max-w-full">
              Group Photo
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/305f3a99c9491b1c9dafebbaa7d7ffd6aba77e17667a9cff900ed7b6362fad86?apiKey=bef308c750544a03a3bf2b5acb540117&"
              className="mt-4 border border-dashed aspect-square border-neutral-400 w-[86px]"
            />
            <div className="flex gap-1 self-start mt-6 text-xs leading-5">
              <div className="text-lime-950 font-poppins font-medium">
                Drop your image here, or
              </div>
              <div className="font-medium font-poppins text-blue-700">browse</div>
            </div>
            <div className="mt-1.5 text-xs leading-3 text-slate-400 max-md:max-w-full">
              Supports: PNG, JPG, JPEG, WEBP
            </div>
            <div className="self-start mt-7 text-sm leading-6 text-slate-400">
              Group Status
            </div>
            <div className="flex gap-2.5 self-start py-1 mt-4">
              <div className="flex flex-col justify-center self-start mt-1">
                <div className="flex flex-col justify-center items-center px-0.5 w-3 h-3 rounded-full bg-zinc-300">
                  <div className="shrink-0 w-2 h-2 bg-rose-500 rounded-full" />
                </div>
              </div>
              <div className="flex-auto text-base font-medium font-poppins text-neutral-400">
                Public{" "}
                <span className=" text-neutral-400 font-light">
                  (Everyone can join your group without your permission)
                </span>
              </div>
            </div>
            <div className="flex gap-2.5 self-start py-1 mt-3.5">
              <div className="flex flex-col justify-center self-start mt-1">
                <div className="flex flex-col justify-center items-center px-0.5 w-3 h-3 rounded-full bg-zinc-300">
                  <div className="shrink-0 w-2 h-2 bg-white rounded-full" />
                </div>
              </div>
              <div className="flex-auto text-base font-medium text-neutral-400">
                Private{" "}
                <span className=" text-neutral-400 font-poppins font-light ">
                  (Only people can join your group who have your invitation)
                </span>
              </div>
            </div>
            <div className="mt-10 text-sm font-medium font-poppins leading-6 text-slate-400 max-md:mt-10 max-md:max-w-full">
              Group Name
            </div>
            <div className="font-poppins justify-center items-start px-5 py-3 mt-1 text-xl rounded-md border border-emerald-500 border-solid bg-stone-50 text-zinc-900 max-md:pr-5 max-md:max-w-full">
              Everyone chat<span className="font-[275]">|</span>
            </div>
            <div className="mt-6 font-medium font-poppins text-sm leading-6 text-slate-400 max-md:max-w-full">
              Purpose (Optional)
            </div>
            <div className="justify-center font-poppins items-start px-5 py-3 mt-1 text-xl rounded-md border border-emerald-500 border-solid bg-stone-50 text-zinc-900 max-md:pr-5 max-md:max-w-full">
              For chatting with friends<span className="font-[275]">|</span>
            </div>
            <div className="justify-center items-center self-center px-16 py-3.5 mt-11  max-w-full text-base font-semibold text-white bg-rose-500 rounded-[56px]  max-md:px-16 lg:px-24 max-md:mt-10 cursor-pointer">
              <Link to="/create-group">
                Create Group
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicGroup;
