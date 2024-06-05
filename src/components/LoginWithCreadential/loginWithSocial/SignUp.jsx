import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { useRegisterMutation } from "../../../redux/features/auth/authApi";

const SignUp = () => {
  const [isOpenModal, setIsOpenModal] = React.useState(true);
  const [passwordType, setPasswordType] = React.useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [createUser, { isLoading, isSuccess, isError, error }] =
    useRegisterMutation();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const tel = formData.get("tel");
    const password = formData.get("password");

    // Data to send to the backend
    const dataForBackend = {
      name: name,
      password: password,
      email: email,
      phone_no: tel,
    };

    createUser(dataForBackend);
  };

  useEffect(() => {
    if (!isLoading && isSuccess) {
      toast.success("Check your email to verify");
      navigate("/login");
    }
    if (isError) {
      toast(`${error?.data?.message}`);
    }
  }, [isSuccess, isError, isLoading, navigate, dispatch, error]);

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
      <div className="px-11 py-9 bg-white rounded-3xl max-w-[970px] max-md:px-5 overflow-y-auto max-h-screen hide-scrollbar">
        <div className="flex items-center gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[484px] max-md:ml-0 max-md:w-11/12 lg:h-[700px]">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ab3f2264e6922757362e47efbe563d35ab35786c6596f2de8977da1efea254a1?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab3f2264e6922757362e47efbe563d35ab35786c6596f2de8977da1efea254a1?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab3f2264e6922757362e47efbe563d35ab35786c6596f2de8977da1efea254a1?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab3f2264e6922757362e47efbe563d35ab35786c6596f2de8977da1efea254a1?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab3f2264e6922757362e47efbe563d35ab35786c6596f2de8977da1efea254a1?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab3f2264e6922757362e47efbe563d35ab35786c6596f2de8977da1efea254a1?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab3f2264e6922757362e47efbe563d35ab35786c6596f2de8977da1efea254a1?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab3f2264e6922757362e47efbe563d35ab35786c6596f2de8977da1efea254a1?apiKey=bef308c750544a03a3bf2b5acb540117&"
              className="w-full"
            />
          </div>
          <div className="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-7  text-center text-zinc-900 max-md:mt-10">
              <div className="self-center text-2xl font-poppins text-neutral-900 font-medium">
                Log in to Everyone
              </div>
              {/* <div className="justify-center text-left font-poppins items-start px-8 py-4 mt-4 bg-white rounded-lg border border-solid border-stone-300 text-zinc-500 max-md:px-5">

              </div> */}

              <form className="w-full relative" onSubmit={handleFormSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Type Your Name"
                  className="justify-center text-left font-poppins items-start px-8 py-4 mt-4 rounded-lg border border-solid border-stone-300 max-md:px-5 w-full bg-white"
                  autoComplete="name"
                  required
                  aria-label="Name"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Type Your Email"
                  className="justify-center text-left font-poppins items-start px-8 py-4 mt-4 rounded-lg border border-solid border-stone-300  max-md:px-5 w-full bg-white"
                  autoComplete="username"
                  required
                  aria-label="Email"
                />
                <input
                  type="tel"
                  name="tel"
                  placeholder="Type Your Phone Number"
                  className="justify-center text-left font-poppins items-start px-8 py-4 mt-4 rounded-lg border border-solid border-stone-300 max-md:px-5 w-full bg-white"
                  autoComplete="tel"
                  required
                  aria-label="Tel"
                />
                <input
                  type={passwordType ? "password" : "text"}
                  name="password"
                  placeholder="Password"
                  className="justify-center text-left font-poppins items-start pl-4 pr-10 py-4 mt-4 mr-4 rounded-lg border border-solid border-stone-300  max-md:px-5 w-full bg-white"
                  autoComplete="current-password"
                  required
                  aria-label="Password"
                />
                {passwordType ? (
                  <IoMdEyeOff
                    className="shrink-0 my-auto aspect-[1.39] w-[18px] cursor-pointer absolute right-3 bottom-[7.0rem] bg-white"
                    aria-label="Hide password"
                    onClick={() => setPasswordType((prev) => !prev)}
                  />
                ) : (
                  <IoMdEye
                    className="shrink-0 my-auto aspect-[1.39] w-[18px] cursor-pointer absolute right-3 bottom-[7.0rem] bg-white"
                    aria-label="Show password"
                    onClick={() => setPasswordType((prev) => !prev)}
                  />
                )}
                {
                  // <p className={`text-left mt-1 text-xs text-red-600 min-h-5 ${isError ? "" : "invisible"}`}>
                  //   {error ? error : ""}
                  // </p>
                }
                <input
                  type="submit"
                  value="Sign Up"
                  aria-label="Sign Up"
                  className="justify-center items-center px-16 py-3.5 mt-4 font-poppins font-semibold text-white bg-rose-500 rounded-lg max-md:px-5 cursor-pointer w-full"
                />
              </form>

              {/* <div className="mt-4 justify-between flex gap-2.5 px-6 py-4 text-lg whitespace-nowrap bg-white rounded-lg border border-solid border-stone-300 text-zinc-500">
                <div>Password</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec53ef988141625475a7781f51c8842a4f3dfb9a0e3007997fd357f00463cae5?apiKey=bef308c750544a03a3bf2b5acb540117&"
                  className="shrink-0 my-auto aspect-[1.39] w-[18px]"
                />
              </div>

              <div className="flex gap-2.5 mt-5 text-xl whitespace-nowrap text-zinc-500">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/696305745c598519882743aae30b21055f8389fe1a3e9634000e56df8f6e895b?apiKey=bef308c750544a03a3bf2b5acb540117&"
                  className="shrink-0 my-auto max-w-full border border-solid aspect-[100] border-zinc-500 stroke-[1px] stroke-zinc-500 w-[164px]"
                />
                <div>or</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/696305745c598519882743aae30b21055f8389fe1a3e9634000e56df8f6e895b?apiKey=bef308c750544a03a3bf2b5acb540117&"
                  className="shrink-0 my-auto max-w-full border border-solid aspect-[100] border-zinc-500 stroke-[1px] stroke-zinc-500 w-[164px]"
                />
              </div> */}

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
                Already have an Account?{" "}
                <Link
                  to="/login-verify"
                  className="text-rose-500 hover:underline"
                >
                  {isLoading ? "loading..." : "Log In"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
