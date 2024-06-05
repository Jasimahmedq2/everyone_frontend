/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useUpdateProfileORCreateProfileMutation } from "../../../redux/features/profile/profile";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const UserProfileEdit = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { loginInfo } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [updateProfile, { isLoading, isSuccess }] =
    useUpdateProfileORCreateProfileMutation();

  const onSubmit = (data) => {
    const profileInfo = {
      token: loginInfo?.token,
      info: data,
    };
    updateProfile(profileInfo);
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/profile");
    }
  }, [isSuccess, isLoading, navigate]);
  return (
    <div>
      <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 mx-auto">
        <div className="bg-white rounded-xl shadow-md p-4 sm:p-7 dark:bg-neutral-800 outline-none border border-indigo-500">
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 dark:text-neutral-200">
              Profile
            </h2>
            <p className="text-sm text-gray-600 dark:text-neutral-400">
              Manage your name, password and account settings.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid sm:grid-cols-12 gap-2 sm:gap-6">
              <div className="sm:col-span-3">
                <label className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200">
                  Profile photo
                </label>
              </div>

              <div className="sm:col-span-9">
                <div className="flex items-center gap-5">
                  <img
                    className="inline-block size-16 rounded-full ring-2 ring-white dark:ring-neutral-900"
                    src="https://preline.co/assets/img/160x160/img1.jpg"
                    alt="Image Description"
                  />
                  <div className="flex gap-x-2">
                    <div>
                      <label
                        htmlFor="upload-photo"
                        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 cursor-pointer disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                      >
                        <svg
                          className="flex-shrink-0 size-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                          <polyline points="17 8 12 3 7 8" />
                          <line x1="12" x2="12" y1="3" y2="15" />
                        </svg>
                        Upload photo
                      </label>
                      <input
                        {...register("file")}
                        type="file"
                        id="upload-photo"
                        className="hidden"
                        accept="image/*"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200">
                  Full name
                </label>
                <div className="hs-tooltip inline-block">
                  <button type="button" className="hs-tooltip-toggle ms-1">
                    <svg
                      className="inline-block size-3 text-gray-400 dark:text-neutral-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                      <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                    </svg>
                  </button>
                  <span
                    className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible w-40 text-center z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-neutral-700"
                    role="tooltip"
                  >
                    Displayed on public forums
                  </span>
                </div>
              </div>

              <div className="sm:col-span-9">
                <div className="sm:flex">
                  <input
                    {...register("name")}
                    type="text"
                    className="py-2 px-3 pe-11 block w-full outline-none  border-indigo-500 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 border-2  disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    placeholder="Maria"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200 ">
                  Email
                </label>
              </div>

              <div className="sm:col-span-9">
                <input
                  {...register("email")}
                  type="email"
                  className="py-2 px-3 pe-11 block w-full  shadow-sm text-sm rounded-lg outline-none border border-indigo-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  placeholder="maria@site.com"
                />
              </div>

              <div className="sm:col-span-3">
                <label className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200 ">
                  username
                </label>
              </div>

              <div className="sm:col-span-9">
                <input
                  {...register("user_name")}
                  type="text"
                  className="py-2 px-3 pe-11 block w-full shadow-sm text-sm rounded-lg outline-none border border-indigo-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  placeholder="@jasimq2"
                />
              </div>

              <div className="sm:col-span-3">
                <label className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200 ">
                  birthday
                </label>
              </div>

              <div className="sm:col-span-9">
                <input
                  {...register("birthday")}
                  type="date"
                  className="py-2 px-3 pe-11 block w-full  shadow-sm text-sm rounded-lg fooutline-none border border-indigo-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  placeholder="@jasimq2"
                />
              </div>

              {/* <div className="sm:col-span-3">
                <label className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200">
                  Password
                </label>
              </div>

              <div className="sm:col-span-9">
                <div className="space-y-2">
                  <input
                    {...register("password")}
                    type="text"
                    className="py-2 px-3 pe-11 block w-full  shadow-sm rounded-lg text-sm outline-none border border-indigo-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    placeholder="Enter current password"
                  />
                  <input
                    {...register("new_password")}
                    type="text"
                    className="py-2 px-3 pe-11 block w-full shadow-sm rounded-lg text-sm outline-none border border-indigo-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    placeholder="Enter new password"
                  />
                </div>
              </div> */}

              <div className="sm:col-span-3">
                <div className="inline-block">
                  <label className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200">
                    Phone
                  </label>
                  <span className="text-sm text-gray-400 dark:text-neutral-600">
                    (Optional)
                  </span>
                </div>
              </div>
              {/* 
              <div className="sm:col-span-9">
                <div className="sm:flex">
                  <input
                    {...register("phone_no")}
                    type="text"
                    className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    placeholder="+x(xxx)xxx-xx-xx"
                  />
                  <select
                    {...register("phone_type")}
                    className="py-2 px-3 pe-9 block w-full sm:w-auto border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  >
                    <option selected>Mobile</option>
                    <option>Home</option>
                    <option>Work</option>
                  </select>
                </div>
              </div> */}

              <div className="flex gap-5 sm:col-span-9">
                <label className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200">
                  Gender
                </label>
                <div className="sm:flex">
                  <select
                    {...register("gender")}
                    className="py-2 px-3 pe-9 block w-full sm:w-auto shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 outline-none border border-indigo-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  >
                    <option selected>Male</option>
                    <option>Famale</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200 ">
                  BIO
                </label>
              </div>

              <div className="sm:col-span-9">
                <textarea
                  {...register("bio")}
                  className="py-2 px-3 block w-full border-2  rounded-lg text-sm outline-none border-indigo-500"
                  rows="6"
                  placeholder="Type your message..."
                ></textarea>
              </div>
            </div>

            <div className="mt-5 flex justify-end gap-x-2">
              <button
                type="submit"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              >
                Save changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserProfileEdit;