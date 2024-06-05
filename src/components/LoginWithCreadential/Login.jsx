import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { userLogin } from "../../redux/features/auth/authSlice";
import { useLoginMutation } from "../../redux/features/auth/authApi";

const Login = () => {
  const [isOpenModal, setIsOpenModal] = React.useState(true);
  const [passwordType, setPasswordType] = React.useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loginUser, { isLoading, data, isError, isSuccess }] =
    useLoginMutation();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    // Data to send to the backend
    const dataForBackend = {
      email: email,
      password: password,
    };
    loginUser(dataForBackend);
  };

  // const handleGoogleLogin = async () => {
  //   const provider = new GoogleAuthProvider();
  //   signInWithPopup(auth, provider)
  //     .then((result) => {
  //       const credential = GoogleAuthProvider.credentialFromResult(result);
  //       const user = result.user;
  //       console.log('user-google-login:', user);
  //       if (user) {
  //         // dispatch(setUser({
  //         //   uid: user.uid,
  //         //   email: user.email,
  //         //   displayName: user.displayName,
  //         //   photoURL: user.photoURL,
  //         //   loginProvider: "google",
  //         // }))
  //       };
  //     }).catch((error) => {
  //       console.error('catch error:', error);
  //     });
  // };

  // const handleFacebookLogin = async () => {
  //   const provider = new FacebookAuthProvider();
  //   signInWithPopup(auth, provider)
  //     .then((result) => {
  //       console.log('Before data:');
  //       const credential = FacebookAuthProvider.credentialFromResult(result);
  //       const token = credential.accessToken;
  //       const user = result.user;
  //       console.log('After data line 31:', user);
  //       if (user) {
  //         // Dispatch the setUser action with user data
  //         // dispatch(setUser({
  //         //   uid: user.uid,
  //         //   email: user.email,
  //         //   displayName: user.displayName,
  //         //   photoURL: user.photoURL,
  //         // }))
  //       };
  //       // IdP data available using getAdditionalUserInfo(result)
  //       // ...
  //     }).catch((error) => {
  //       console.log('catch error:', error);
  //       console.log('catch error message:', error.message);
  //       // Handle Errors here.
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       const email = error.customData.email;
  //       const credential = FacebookAuthProvider.credentialFromError(error);
  //       // ...
  //     });
  // };

  useEffect(() => {
    if (!isLoading && isSuccess) {
      toast.success("Logged in success");
      navigate("/");
      dispatch(userLogin(data?.data));
    }
    if (isError) {
      toast.error(`creadential not matched`);
    }
  }, [isSuccess, isError, isLoading, navigate, dispatch, data?.data]);

  return (
    <div
      className={`transition-all duration-300 ${
        isOpenModal ? "scale-100" : "scale-0"
      } fixed top-0 bottom-0 left-0 right-0 w-full h-full bg-black/70 flex items-center justify-center z-[100] overflow-y-auto`}
      onClick={(e) => {
        if (e.target !== e.currentTarget) {
          return;
        }
        setIsOpenModal((prev) => !prev);
        navigate("/");
      }}
    >
      <div className="px-11 py-9 bg-white rounded-3xl max-w-[970px] max-md:px-5 overflow-y-auto max-h-screen hide-scrollbar">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[484px] max-md:ml-0 max-md:w-11/12 lg:h-[700px]">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ab3f2264e6922757362e47efbe563d35ab35786c6596f2de8977da1efea254a1?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab3f2264e6922757362e47efbe563d35ab35786c6596f2de8977da1efea254a1?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab3f2264e6922757362e47efbe563d35ab35786c6596f2de8977da1efea254a1?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab3f2264e6922757362e47efbe563d35ab35786c6596f2de8977da1efea254a1?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab3f2264e6922757362e47efbe563d35ab35786c6596f2de8977da1efea254a1?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab3f2264e6922757362e47efbe563d35ab35786c6596f2de8977da1efea254a1?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab3f2264e6922757362e47efbe563d35ab35786c6596f2de8977da1efea254a1?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab3f2264e6922757362e47efbe563d35ab35786c6596f2de8977da1efea254a1?apiKey=bef308c750544a03a3bf2b5acb540117&"
              className="grow w-full lg:w-full aspect-[0.66] max-md:mt-10 max-md:max-w-11/12"
            />
          </div>
          <div className="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-7  text-center text-zinc-900 max-md:mt-10">
              <div className="self-center text-2xl font-poppins text-neutral-900 font-medium">
                Log in to Everyone
              </div>
              <div
                className="flex justify-center items-center px-16 py-4 mt-7 w-full bg-white rounded-lg border border-solid border-stone-300 max-md:px-5 cursor-pointer"
                // onClick={handleGoogleLogin}
              >
                <div className="flex gap-3.5 font-poppins text-[17px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae3bdd38ec93a5855a1aa2f741c3aaa138343cf11d2701decbfe5118e38a07bc?apiKey=bef308c750544a03a3bf2b5acb540117&"
                    className="shrink-0 my-auto aspect-square w-[23px]"
                  />
                  <div>Login with Google</div>
                </div>
              </div>
              <div
                className="flex justify-center items-center px-16 py-4 mt-7 w-full bg-white rounded-lg border border-solid border-stone-300 max-md:px-5 cursor-pointer"
                // onClick={handleFacebookLogin}
              >
                <div className="flex gap-3.5 font-poppins text-[17px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/77e4d3bd900415688100a9fe3e7c01eb0f381fe71e8c8ab8a74fc74bf30d9e70?apiKey=bef308c750544a03a3bf2b5acb540117&"
                    className="shrink-0 my-auto w-6 aspect-square"
                  />
                  <div>Login with Facebook</div>
                </div>
              </div>
              <div className="flex justify-center items-center px-16 py-4 mt-4 w-full bg-white rounded-lg border border-solid border-stone-300 max-md:px-5 cursor-pointer">
                <div className="flex gap-3.5 font-poppins text-[17px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/269d9ae6ceff90b90a70737f35d075101deff3363c88f8121449cd904322578d?apiKey=bef308c750544a03a3bf2b5acb540117&"
                    className="shrink-0 self-start w-5 aspect-[0.8]"
                  />
                  <div>Login with Apple</div>
                </div>
              </div>
              <div
                className="flex justify-center items-center px-16 py-4 mt-4 w-full bg-white rounded-lg border border-solid border-stone-300 max-md:px-5"
                // onClick={() => loginWithRedirect()}
              >
                <div className="flex gap-3.5 font-poppins text-[17px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/477d4b0c3b8770d4869eb875868bf6cd01fa6e7db6761c056b893219474d7b57?apiKey=bef308c750544a03a3bf2b5acb540117&"
                    className="shrink-0 self-start w-5 aspect-[0.8]"
                  />
                  <div>Use QRCode Scan</div>
                </div>
              </div>

              <form className="w-full relative" onSubmit={handleFormSubmit}>
                <input
                  type="email"
                  name="email"
                  placeholder="Type Your Email"
                  className="justify-center text-left font-poppins items-start pl-4 pr-10 py-4 mt-4 rounded-lg border border-solid border-stone-300  max-md:px-5 w-full bg-white"
                  autoComplete="username"
                  required
                  aria-label="Email"
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
                  <p
                    className={`text-left mt-1 text-xs text-red-600 min-h-5 ${
                      isError ? "" : "invisible"
                    }`}
                  >
                    {/* {error ? error : ""} */}
                  </p>
                }
                <input
                  type="submit"
                  value="Login"
                  aria-label="Sign Up"
                  className="justify-center items-center px-16 py-3.5 mt-4 font-poppins font-semibold text-white bg-rose-500 rounded-lg max-md:px-5 cursor-pointer w-full"
                />
              </form>

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
              <div className="self-center mt-3 text-black text-[15px] font-poppins">
                Don’t have an Account?{" "}
                <Link to="/signup" className="text-rose-500 hover:underline">
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
