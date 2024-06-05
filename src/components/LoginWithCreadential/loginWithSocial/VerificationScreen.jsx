import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../../../Context/AuthProvider";


const VerificationScreen = () => {
  const [isOpenModal, setIsOpenModal] = React.useState(true);
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (user) {
      navigate("/"); // Use navigate function to navigate
    }
  }, [user, navigate]);

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
      <div>
        <div className="px-11 py-9 bg-white rounded-3xl max-w-[970px] max-md:px-5 overflow-y-auto max-h-screen hide-scrollbar">
          <div className="flex items-center gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[484px] max-md:ml-0 max-md:w-11/12 lg:h-[700px]">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ab3f2264e6922757362e47efbe563d35ab35786c6596f2de8977da1efea254a1?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab3f2264e6922757362e47efbe563d35ab35786c6596f2de8977da1efea254a1?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab3f2264e6922757362e47efbe563d35ab35786c6596f2de8977da1efea254a1?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab3f2264e6922757362e47efbe563d35ab35786c6596f2de8977da1efea254a1?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab3f2264e6922757362e47efbe563d35ab35786c6596f2de8977da1efea254a1?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab3f2264e6922757362e47efbe563d35ab35786c6596f2de8977da1efea254a1?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab3f2264e6922757362e47efbe563d35ab35786c6596f2de8977da1efea254a1?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab3f2264e6922757362e47efbe563d35ab35786c6596f2de8977da1efea254a1?apiKey=bef308c750544a03a3bf2b5acb540117&"
                className="grow w-full aspect-[0.70] max-md:mt-10 max-md:max-w-full"
              />
            </div>
            <div className="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col mt-7  text-center text-zinc-900 max-md:mt-10">
                <div className="self-center text-2xl font-poppins text-neutral-900 font-semibold">
                  Welcome to Everyone
                </div>
                <div className="flex flex-col lg:w-[375px] max-w-[375px] w-full mt-4">
                  <div className="flex flex-col justify-center items-start lg:px-6 px-4 py-2.5 w-full text-lg bg-white rounded-lg border border-solid border-stone-300 text-zinc-500">
                    <div className="flex gap-2.5">
                      <div className="font-poppins justify-center py-1.5 px-3 bg-white rounded-lg border border-solid border-stone-300">
                        US +1
                      </div>
                      <div className="flex-auto my-auto font-poppins">987-654-321</div>
                    </div>
                  </div>
                  <div className="flex gap-5 justify-between lg:px-4 lg:py-2.5 py-3 px-3 mt-4 lg:w-full bg-white rounded-lg border border-solid border-stone-300">
                    <div className="my-auto text-lg text-zinc-500 font-poppins lg:text-[18px] text-[11px]">
                      Enter 6 Digit Code
                    </div>
                    <div className="flex flex-col justify-center text-sm font-medium text-center text-white">
                      <div className="justify-center lg:px-2.5 px-2.5 py-2 lg:py-2.5 bg-rose-500 rounded-lg font-poppins">
                        Send Code
                      </div>
                    </div>
                  </div>
                </div>

                <div className="justify-center items-center px-16 py-3.5 mt-4 font-poppins font-semibold text-white bg-rose-500 rounded-lg max-md:px-5 cursor-pointer"
                // onClick={() => setUserByLogin()}
                >
                  Login
                </div>
                <div className="justify-center px-1.5 mt-5 leading-6 text-gray-500 font-poppins font-light text-[16px]">
                  By continuing, you agree to everyone’s{" "}
                  <span className="text-black text-[15px] font-poppins">
                    {" "}
                    Terms of Service
                  </span>{" "}
                  and confirm that you have read everyone’s
                  <span className="text-black font-poppins text-[15px]">
                    {" "}
                    Privacy Policy
                  </span>
                </div>
                <div className="self-center mt-3 text-black  text-[15px] font-poppins">
                  Don’t have an Account?{" "}
                  <Link to="/login" className="text-rose-500 hover:underline">Sign Up</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationScreen;
