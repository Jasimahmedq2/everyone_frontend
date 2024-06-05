import { Fragment, useEffect, useRef, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { useAuth } from "../Context/AuthProvider";
// import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
// import { setUser } from "../redux/features/auth/authSlice";
import { LogOut } from "../redux/features/auth/authSlice";

export default function StackedLightHeaderandFooter() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isOpen, setIsOpen2] = useState(false);
  const dropdownRef = useRef(null);
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleIconClick = () => {
    setIsInputVisible(true);
    setTimeout(() => document.getElementById("searchInput").focus(), 0);
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen);
  };

  const location = useLocation();
  // const { logout, user: currentTarget } = useAuth0();

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const logOutFunction = () => {
    dispatch(LogOut());
    navigate("/login");
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    setIsDropdownOpen(false);
  }, [location]);

  const handleItemClick = () => {
    setIsOpen2(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen2(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  // console.log('user:', user);
  const navMenuItems = [
    ` <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/137d2c851bf75e5126b8f630cb0792bf379f81d1b5d462d403d0fcc37044fd44?apiKey=bef308c750544a03a3bf2b5acb540117&"
                    className="shrink-0 w-6 aspect-square"
                    />
                    <div className="my-auto font-inter font-normal">
                    Type here
                    </div>`,

    `    <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/74abf4080dd04ec0cde96610b07c4ea87678a09006c0d5487c6c420fe2155d84?apiKey=bef308c750544a03a3bf2b5acb540117&"
                    className="shrink-0 w-6 aspect-square"
                    />
                    <span>Everyone</span>`,

    `                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/891bd1be672434664e266972807199fbfef868b6eb3f328ee2c5b9f55988a58a?apiKey=bef308c750544a03a3bf2b5acb540117&"
                      className="shrink-0 w-6 aspect-square"
                    />
                    <span>Trending</span>`,
    `    <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b1913a7e0ecb009e4ea382fbeb1c72898f6f8e829ff6218c255dc47397b5ff2a?apiKey=bef308c750544a03a3bf2b5acb540117&"
                    className="shrink-0 w-6 aspect-square"
                  />
                  <span className="my-auto font-inter font-normal">
                    Subscription
                  </span>`,
  ];

  return (
    <>
      {/* Page Container */}
      <div
        id="page-container"
        className="mx-auto flex w-full min-w-[320px] flex-col bg-gray-100 dark:bg-gray-900 dark:text-gray-100"
      >
        {/* Page Header */}
        <header
          id=""
          className="z-1 flex flex-none items-center bg-white  dark:bg-gray-800"
        >
          <div className="container max-w-full mx-auto lg:px-6 px-2">
            <div className="flex justify-between py-4">
              {/* Left Section */}
              <div className="flex items-center">
                {/* Logo */}
                <Link
                  to="/"
                  className="flex gap-1.5 justify-between my-auto font-inter font-normal"
                >
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/601623b037a2b5de00fd4895e7a33b884590f0f4444cab3f973ce972bb02a65e?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/601623b037a2b5de00fd4895e7a33b884590f0f4444cab3f973ce972bb02a65e?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/601623b037a2b5de00fd4895e7a33b884590f0f4444cab3f973ce972bb02a65e?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/601623b037a2b5de00fd4895e7a33b884590f0f4444cab3f973ce972bb02a65e?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/601623b037a2b5de00fd4895e7a33b884590f0f4444cab3f973ce972bb02a65e?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/601623b037a2b5de00fd4895e7a33b884590f0f4444cab3f973ce972bb02a65e?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/601623b037a2b5de00fd4895e7a33b884590f0f4444cab3f973ce972bb02a65e?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/601623b037a2b5de00fd4895e7a33b884590f0f4444cab3f973ce972bb02a65e?apiKey=bef308c750544a03a3bf2b5acb540117&"
                    className="shrink-0 aspect-[1.11] w-[39px]"
                  />
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7c9da511b411bf596c9551a59eb6609a0318a731609cf9d20f3982a93b3d423f?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7c9da511b411bf596c9551a59eb6609a0318a731609cf9d20f3982a93b3d423f?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7c9da511b411bf596c9551a59eb6609a0318a731609cf9d20f3982a93b3d423f?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7c9da511b411bf596c9551a59eb6609a0318a731609cf9d20f3982a93b3d423f?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7c9da511b411bf596c9551a59eb6609a0318a731609cf9d20f3982a93b3d423f?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7c9da511b411bf596c9551a59eb6609a0318a731609cf9d20f3982a93b3d423f?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7c9da511b411bf596c9551a59eb6609a0318a731609cf9d20f3982a93b3d423f?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7c9da511b411bf596c9551a59eb6609a0318a731609cf9d20f3982a93b3d423f?apiKey=bef308c750544a03a3bf2b5acb540117&"
                    className="shrink-0 max-w-full aspect-[4] w-[135px]"
                  />
                </Link>
                {/* END Logo */}
              </div>

              {/* Right Section */}
              <div className="flex items-center gap-2">
                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-2 lg:flex">
                  <Link
                    to=""
                    className="group flex items-center gap-2 rounded-lg border border-blue-100 bg-blue-50 px-2 py-1.5 text-sm font-medium text-blue-600 dark:border-transparent dark:bg-gray-700 dark:text-white"
                  >
                    <div className="flex items-center gap-2">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/137d2c851bf75e5126b8f630cb0792bf379f81d1b5d462d403d0fcc37044fd44?apiKey=bef308c750544a03a3bf2b5acb540117&"
                        className="shrink-0 w-6 aspect-square cursor-pointer"
                        alt="Search Icon"
                        onClick={handleIconClick}
                      />
                      {isInputVisible ? (
                        <input
                          id="searchInput"
                          type="text"
                          value={searchQuery}
                          onChange={handleInputChange}
                          placeholder="Type to search..."
                          className="outline-none border rounded p-2"
                        />
                      ) : (
                        <span
                          className="my-auto font-inter font-normal cursor-pointer px-2"
                          onClick={handleIconClick}
                        >
                          Search
                        </span>
                      )}
                    </div>
                  </Link>
                  <Link
                    to=""
                    className="group flex items-center gap-2 rounded-lg border border-transparent px-3 py-2 text-sm font-medium text-gray-800 hover:bg-blue-50 hover:text-blue-600 active:border-blue-100 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white dark:active:border-gray-600"
                  >
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/74abf4080dd04ec0cde96610b07c4ea87678a09006c0d5487c6c420fe2155d84?apiKey=bef308c750544a03a3bf2b5acb540117&"
                      className="shrink-0 w-6 aspect-square"
                    />
                    <span>Everyone</span>
                  </Link>
                  <Link
                    to=""
                    className="group flex items-center gap-2 rounded-lg border border-transparent px-3 py-2 text-sm font-medium text-gray-800 hover:bg-blue-50 hover:text-blue-600 active:border-blue-100 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white dark:active:border-gray-600"
                  >
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/891bd1be672434664e266972807199fbfef868b6eb3f328ee2c5b9f55988a58a?apiKey=bef308c750544a03a3bf2b5acb540117&"
                      className="shrink-0 w-6 aspect-square"
                    />
                    <span>Trending</span>
                  </Link>
                  <Link to="" className="">
                    <div className="flex flex-col justify-center self-stretch p-4 font-bold text-rose-500 rounded-md bg-zinc-100">
                      <div className="flex gap-2.5">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b1913a7e0ecb009e4ea382fbeb1c72898f6f8e829ff6218c255dc47397b5ff2a?apiKey=bef308c750544a03a3bf2b5acb540117&"
                          className="shrink-0 w-6 aspect-square"
                        />
                        <span className="my-auto font-inter font-normal">
                          Subscription
                        </span>
                      </div>
                    </div>
                  </Link>
                  <Link
                    to=""
                    className="group flex items-center gap-2 rounded-lg border border-transparent px-3 py-2 text-sm font-medium text-gray-800 hover:bg-blue-50 hover:text-blue-600 active:border-blue-100 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white dark:active:border-gray-600"
                  >
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/93ec64bf8d391bc4f03ca4f3cfa169648b309131843e17f7474ba142b1899a7e?apiKey=bef308c750544a03a3bf2b5acb540117&"
                      className="shrink-0 w-6 aspect-square"
                    />
                    <span>Filter</span>
                  </Link>

                  <Link>
                    <div
                      className="flex gap-2 justify-center px-5 py-2.5 rounded-lg border border-solid border-neutral-600 hover:border-black hover:text-black"
                      ref={dropdownRef}
                      onClick={toggleDropdown2}
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a9270802cebe820d6ad684ce13f923673cd65fc0dad2c8ff283dc343a5948b7?apiKey=bef308c750544a03a3bf2b5acb540117&"
                        className="shrink-0 aspect-square w-[21px]"
                      />
                      <span className="my-auto font-inter font-normal ">
                        Create
                      </span>
                      {isOpen && (
                        <div className="origin-top-right absolute right-2 lg:mr-9 mt-2 lg:mt-12 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="py-1">
                            <Link
                              to={"/profile/upload-video"}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              onClick={handleItemClick}
                            >
                              <span className="flex items-center">
                                <svg
                                  className="w-5 h-5 mr-3"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15 10l4.55-4.55a1.88 1.88 0 10-2.66-2.66L12.41 7.34 15 10zm0 0l4.55-4.55a1.88 1.88 0 00-2.66-2.66L12.41 7.34 15 10zM10 15l-4.55 4.55a1.88 1.88 0 11-2.66-2.66L7.34 12.41 10 15zm0 0l-4.55 4.55a1.88 1.88 0 102.66 2.66L12.41 17.34 10 15zm5-10h5M3 3h5m0 0v5M3 3v5"
                                  />
                                </svg>
                                Video
                              </span>
                            </Link>
                            <Link
                              to={"/profile/upload-photo"}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              onClick={handleItemClick}
                            >
                              <span className="flex items-center">
                                <svg
                                  className="w-5 h-5 mr-3"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 12v.01M12 16h.01M3 21a2 2 0 01-2-2V5a2 2 0 012-2h18a2 2 0 012 2v14a2 2 0 01-2 2H3z"
                                  />
                                </svg>
                                Photo
                              </span>
                            </Link>
                            <Link
                              to={"/thread-upload"}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              onClick={handleItemClick}
                            >
                              <span className="flex items-center">
                                <svg
                                  className="w-5 h-5 mr-3"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 4v16m8-8H4"
                                  />
                                </svg>
                                Threads
                              </span>
                            </Link>
                            <Link
                              to={"/create-chat-room/1"}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              onClick={handleItemClick}
                            >
                              <span className="flex items-center">
                                <svg
                                  className="w-5 h-5 mr-3"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M8 10h8M8 6h8M8 14h8M8 18h8"
                                  />
                                </svg>
                                Chat Room
                              </span>
                            </Link>
                            <Link
                              to={"/create-group"}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              onClick={handleItemClick}
                            >
                              <span className="flex items-center">
                                <svg
                                  className="w-5 h-5 mr-3"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M8 14s1.5-2 4-2 4 2 4 2m-4-6a4 4 0 110-8 4 4 0 010 8z"
                                  />
                                </svg>
                                Groups
                              </span>
                            </Link>
                            <a
                              href="#"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              onClick={handleItemClick}
                            >
                              <span className="flex items-center">
                                <svg
                                  className="w-5 h-5 mr-3"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 8v4l3 3m0-11a4 4 0 110 8 4 4 0 010-8z"
                                  />
                                </svg>
                                Livestream
                              </span>
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                  </Link>
                </nav>

                {/* User Dropdown */}
                <Menu as="div" className="relative inline-block">
                  {/* Dropdown Toggle Button */}
                  {/* <Menu.Button className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold leading-5 text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300/25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600/40 dark:active:border-gray-700">
                    <span>John</span>
                    <svg
                      className="hi-mini hi-chevron-down inline-block size-5 opacity-40"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Menu.Button> */}
                  {/* END Dropdown Toggle Button */}

                  {/* Dropdown */}
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="opacity-0 scale-90"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-90"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-lg shadow-xl focus:outline-none dark:shadow-gray-900">
                      <div className="divide-y divide-gray-100 rounded-lg bg-white ring-1 ring-black/5 dark:divide-gray-700 dark:bg-gray-800 dark:ring-gray-700">
                        <div className="space-y-1 p-2.5">
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to=""
                                className={`group flex items-center justify-between gap-2 rounded-lg border border-transparent px-2.5 py-2 text-sm font-medium ${
                                  active
                                    ? "bg-blue-50 text-blue-800 dark:border-transparent dark:bg-gray-700/75 dark:text-white"
                                    : "text-gray-700 hover:bg-blue-50 hover:text-blue-800 active:border-blue-100 dark:text-gray-200 dark:hover:bg-gray-700/75 dark:hover:text-white dark:active:border-gray-600"
                                }`}
                              >
                                <svg
                                  className="hi-mini hi-inbox inline-block size-5 flex-none opacity-25 group-hover:opacity-50"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  aria-hidden="true"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M1 11.27c0-.246.033-.492.099-.73l1.523-5.521A2.75 2.75 0 015.273 3h9.454a2.75 2.75 0 012.651 2.019l1.523 5.52c.066.239.099.485.099.732V15a2 2 0 01-2 2H3a2 2 0 01-2-2v-3.73zm3.068-5.852A1.25 1.25 0 015.273 4.5h9.454a1.25 1.25 0 011.205.918l1.523 5.52c.006.02.01.041.015.062H14a1 1 0 00-.86.49l-.606 1.02a1 1 0 01-.86.49H8.236a1 1 0 01-.894-.553l-.448-.894A1 1 0 006 11H2.53l.015-.062 1.523-5.52z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                <span className="grow">Inbox</span>
                                <div className="inline-flex rounded-full border border-blue-200 bg-blue-100 px-1.5 py-0.5 text-xs font-semibold leading-4 text-blue-700 dark:border-blue-700 dark:bg-blue-700 dark:text-blue-50">
                                  2
                                </div>
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to=""
                                className={`group flex items-center justify-between gap-2 rounded-lg border border-transparent px-2.5 py-2 text-sm font-medium ${
                                  active
                                    ? "bg-blue-50 text-blue-800 dark:border-transparent dark:bg-gray-700/75 dark:text-white"
                                    : "text-gray-700 hover:bg-blue-50 hover:text-blue-800 active:border-blue-100 dark:text-gray-200 dark:hover:bg-gray-700/75 dark:hover:text-white dark:active:border-gray-600"
                                }`}
                              >
                                <svg
                                  className="hi-mini hi-flag inline-block size-5 flex-none opacity-25 group-hover:opacity-50"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  aria-hidden="true"
                                >
                                  <path d="M3.5 2.75a.75.75 0 00-1.5 0v14.5a.75.75 0 001.5 0v-4.392l1.657-.348a6.449 6.449 0 014.271.572 7.948 7.948 0 005.965.524l2.078-.64A.75.75 0 0018 12.25v-8.5a.75.75 0 00-.904-.734l-2.38.501a7.25 7.25 0 01-4.186-.363l-.502-.2a8.75 8.75 0 00-5.053-.439l-1.475.31V2.75z" />
                                </svg>
                                <span className="grow">Notifications</span>
                                <div className="inline-flex rounded-full border border-blue-200 bg-blue-100 px-1.5 py-0.5 text-xs font-semibold leading-4 text-blue-700 dark:border-blue-700 dark:bg-blue-700 dark:text-blue-50">
                                  5
                                </div>
                              </Link>
                            )}
                          </Menu.Item>
                        </div>
                        <div className="space-y-1 p-2.5">
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to=""
                                className={`group flex items-center justify-between gap-2 rounded-lg border border-transparent px-2.5 py-2 text-sm font-medium ${
                                  active
                                    ? "bg-blue-50 text-blue-800 dark:border-transparent dark:bg-gray-700/75 dark:text-white"
                                    : "text-gray-700 hover:bg-blue-50 hover:text-blue-800 active:border-blue-100 dark:text-gray-200 dark:hover:bg-gray-700/75 dark:hover:text-white dark:active:border-gray-600"
                                }`}
                              >
                                <svg
                                  className="hi-mini hi-user-circle inline-block size-5 flex-none opacity-25 group-hover:opacity-50"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  aria-hidden="true"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                <span className="grow">Account</span>
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to=""
                                className={`group flex items-center justify-between gap-2 rounded-lg border border-transparent px-2.5 py-2 text-sm font-medium ${
                                  active
                                    ? "bg-blue-50 text-blue-800 dark:border-transparent dark:bg-gray-700/75 dark:text-white"
                                    : "text-gray-700 hover:bg-blue-50 hover:text-blue-800 active:border-blue-100 dark:text-gray-200 dark:hover:bg-gray-700/75 dark:hover:text-white dark:active:border-gray-600"
                                }`}
                              >
                                <svg
                                  className="hi-mini hi-cog-6-tooth inline-block size-5 flex-none opacity-25 group-hover:opacity-50"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  aria-hidden="true"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M7.84 1.804A1 1 0 018.82 1h2.36a1 1 0 01.98.804l.331 1.652a6.993 6.993 0 011.929 1.115l1.598-.54a1 1 0 011.186.447l1.18 2.044a1 1 0 01-.205 1.251l-1.267 1.113a7.047 7.047 0 010 2.228l1.267 1.113a1 1 0 01.206 1.25l-1.18 2.045a1 1 0 01-1.187.447l-1.598-.54a6.993 6.993 0 01-1.929 1.115l-.33 1.652a1 1 0 01-.98.804H8.82a1 1 0 01-.98-.804l-.331-1.652a6.993 6.993 0 01-1.929-1.115l-1.598.54a1 1 0 01-1.186-.447l-1.18-2.044a1 1 0 01.205-1.251l1.267-1.114a7.05 7.05 0 010-2.227L1.821 7.773a1 1 0 01-.206-1.25l1.18-2.045a1 1 0 011.187-.447l1.598.54A6.993 6.993 0 017.51 3.456l.33-1.652zM10 13a3 3 0 100-6 3 3 0 000 6z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                <span className="grow">Settings</span>
                              </Link>
                            )}
                          </Menu.Item>
                        </div>
                        <div className="space-y-1 p-2.5">
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to=""
                                className={`group flex items-center justify-between gap-2 rounded-lg border border-transparent px-2.5 py-2 text-sm font-medium ${
                                  active
                                    ? "bg-blue-50 text-blue-800 dark:border-transparent dark:bg-gray-700/75 dark:text-white"
                                    : "text-gray-700 hover:bg-blue-50 hover:text-blue-800 active:border-blue-100 dark:text-gray-200 dark:hover:bg-gray-700/75 dark:hover:text-white dark:active:border-gray-600"
                                }`}
                              >
                                <svg
                                  className="hi-mini hi-lock-closed inline-block size-5 flex-none opacity-25 group-hover:opacity-50"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  aria-hidden="true"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                <span className="grow">Sign out</span>
                              </Link>
                            )}
                          </Menu.Item>
                        </div>
                      </div>
                    </Menu.Items>
                  </Transition>
                  {/* END Dropdown */}
                </Menu>
                {/* END User Dropdown */}

                {/* DropDown and Profile Icon  */}
                <div className="flex flex-col text-lg min-w-[32px] max-w-[314px] relative cursor-pointer">
                  {
                    // !userLoading &&

                    user?.email ? (
                      <>
                        <div className="flex gap-2 items-center">
                          <Link to="/message/:id">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5eba347b9888220c3688e089175deedbe4bfb279b32ca5da98b415c1519cc59f?apiKey=bef308c750544a03a3bf2b5acb540117&"
                              className="shrink-0 my-auto font-inter font-normal w-7 aspect-square"
                            />
                          </Link>
                          <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c7831e96838e26c7e1c82b04c74ff3b7a97dd6c9ddeb0676d5cec504482b6912?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7831e96838e26c7e1c82b04c74ff3b7a97dd6c9ddeb0676d5cec504482b6912?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7831e96838e26c7e1c82b04c74ff3b7a97dd6c9ddeb0676d5cec504482b6912?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7831e96838e26c7e1c82b04c74ff3b7a97dd6c9ddeb0676d5cec504482b6912?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7831e96838e26c7e1c82b04c74ff3b7a97dd6c9ddeb0676d5cec504482b6912?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7831e96838e26c7e1c82b04c74ff3b7a97dd6c9ddeb0676d5cec504482b6912?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7831e96838e26c7e1c82b04c74ff3b7a97dd6c9ddeb0676d5cec504482b6912?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7831e96838e26c7e1c82b04c74ff3b7a97dd6c9ddeb0676d5cec504482b6912?apiKey=bef308c750544a03a3bf2b5acb540117&"
                            className="shrink-0 aspect-square w-[40px]"
                            onClick={toggleDropdown}
                          />
                        </div>
                      </>
                    ) : (
                      <>
                        <Link
                          to="/login"
                          className="flex gap-5 my-auto font-inter font-normal text-sm whitespace-nowrap text-neutral-600"
                        >
                          <div className="flex gap-2 justify-center px-5 py-2.5 rounded-lg border border-solid border-neutral text-black">
                            <button className="">Log In</button>
                          </div>
                        </Link>
                      </>
                    )
                  }

                  {isDropdownOpen && user && (
                    <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                      <div className="py-1">
                        <Link
                          to="/profile"
                          className="flex gap-1.5 self-start ml-2.5 text-lg whitespace-nowrap text-zinc-900"
                        >
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea50874b9e88e0fb66b603ed8c271d42784db8444151a038530eb33c9c18193d?apiKey=bef308c750544a03a3bf2b5acb540117&"
                            className="shrink-0 w-5 aspect-square"
                          />
                          <div className="my-auto font-inter font-normal ">
                            Profile
                          </div>
                        </Link>
                        <div className="flex gap-1.5 self-start mt-9 ml-2.5 text-lg whitespace-nowrap text-zinc-900">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f783e18cf7d2a24d6466f0d17b608157a960e0fd2c83f3ad65972a60e8c3dbe9?apiKey=bef308c750544a03a3bf2b5acb540117&"
                            className="shrink-0 w-5 aspect-square"
                          />
                          <div className="my-auto font-inter font-normal">
                            Favorites
                          </div>
                        </div>
                        <div className="flex gap-1.5 self-start mt-9 ml-2.5 text-lg whitespace-nowrap text-zinc-900">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a0c18680ed506267bdb007980e11b67adc69b7960fee4a943530028495c75a61?apiKey=bef308c750544a03a3bf2b5acb540117&"
                            className="shrink-0 w-5 aspect-square"
                          />
                          <div className="my-auto font-inter font-normal">
                            Setting
                          </div>
                        </div>
                        <div className="flex flex-col justify-center p-2.5 mt-6 text-lg leading-6 border-b border-solid border-black border-opacity-10 text-zinc-900">
                          <div className="flex gap-2 justify-center">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ff6ba2ac15750f3e59ea4915e89c3a9b86aac9b97ee55f4f585fc8d3fbc2fbf?apiKey=bef308c750544a03a3bf2b5acb540117&"
                              className="shrink-0 w-5 aspect-square"
                            />
                            <div className="my-auto font-inter font-normal">
                              Feedback & Help
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-5 justify-center self-center mt-6 w-full max-w-[178px]">
                          <div className="my-auto font-inter font-normal text-lg leading-6 text-zinc-900">
                            Dark Mode
                          </div>
                          <div className="flex flex-col justify-center items-start py-0.5 fill-neutral-200">
                            <div className="shrink-0 bg-white rounded-full h-[15px] w-[15px]" />
                          </div>
                        </div>
                        <div
                          className="flex flex-col justify-center p-2.5 mt-7 text-lg leading-6 border-b border-solid border-black border-opacity-10 text-zinc-900"
                          onClick={logOutFunction}
                        >
                          <div className="flex gap-5 justify-center pr-2">
                            <div className="my-auto font-inter font-normal">
                              Log Out
                            </div>
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e1881ee609f4c5b4dc9a8f6ea0669d8e8dd19bacc28ec81522f7a349403955b?apiKey=bef308c750544a03a3bf2b5acb540117&"
                              className="shrink-0 w-5 aspect-square"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col justify-center px-2.5 py-2.5 mt-4 w-full text-lg whitespace-nowrap bg-neutral-200 rounded-[140px] text-zinc-900">
                          <div className="flex gap-2.5">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/02a115052dbd6c2b5222b072fc8f35084b7eba880475d7d81a6341d045231998?apiKey=bef308c750544a03a3bf2b5acb540117&"
                              className="shrink-0 w-6 aspect-square"
                            />
                            <div className="flex gap-1.5 pr-2.5 my-auto font-inter font-normal">
                              <div>English</div>
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/06ca1f6e28872e6fe8f30cc14432717ea98bbf9205a265e8d96dafda94cff590?apiKey=bef308c750544a03a3bf2b5acb540117&"
                                className="shrink-0 w-3.5 aspect-square"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* dextop left menu icon  */}
                {/* <div className="hidden items-center gap-2 lg:flex">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ac8d79cce706d9f63886b10a7e4e0075d673c3fb8507ab206a076e49c279c15?apiKey=bef308c750544a03a3bf2b5acb540117&"
                    className="shrink-0 my-auto font-inter font-normal w-6 aspect-square"
                  />
                </div> */}

                {/* Toggle Mobile Navigation Button */}
                <div className="lg:hidden">
                  <button
                    onClick={() => setMobileNavOpen(!mobileNavOpen)}
                    type="button"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold leading-5 text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300/25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600/40 dark:active:border-gray-700"
                  >
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      className="hi-solid hi-menu inline-block size-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
                {/* END Toggle Mobile Navigation */}
              </div>
              {/* END Right Section */}
            </div>

            {/* Mobile Navigation */}
            <div className={`lg:hidden ${mobileNavOpen ? "" : "hidden"}`}>
              <nav className="flex flex-col gap-2 border-t border-gray-200 py-4 dark:border-gray-700">
                <Link
                  to=""
                  className="group flex items-center gap-2 rounded-lg border border-blue-50 bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-600 dark:border-transparent dark:bg-gray-700/75 dark:text-white"
                >
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/137d2c851bf75e5126b8f630cb0792bf379f81d1b5d462d403d0fcc37044fd44?apiKey=bef308c750544a03a3bf2b5acb540117&"
                    className="shrink-0 w-6 aspect-square"
                  />
                  <div className="my-auto font-inter font-normal">
                    Type here
                  </div>
                </Link>
                <Link
                  to=""
                  className="group flex items-center gap-2 rounded-lg border border-transparent px-3 py-2 text-sm font-medium text-gray-800 hover:bg-blue-50 hover:text-blue-600 active:border-blue-100 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white dark:active:border-gray-600"
                >
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/74abf4080dd04ec0cde96610b07c4ea87678a09006c0d5487c6c420fe2155d84?apiKey=bef308c750544a03a3bf2b5acb540117&"
                    className="shrink-0 w-6 aspect-square"
                  />
                  <span>Everyone</span>
                </Link>
                <Link
                  to=""
                  className="group flex items-center gap-2 rounded-lg border border-transparent px-3 py-2 text-sm font-medium text-gray-800 hover:bg-blue-50 hover:text-blue-600 active:border-blue-100 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white dark:active:border-gray-600"
                >
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/891bd1be672434664e266972807199fbfef868b6eb3f328ee2c5b9f55988a58a?apiKey=bef308c750544a03a3bf2b5acb540117&"
                    className="shrink-0 w-6 aspect-square"
                  />
                  <span>Trending</span>
                </Link>
                <Link
                  to=""
                  className="group flex items-center gap-2 rounded-lg border border-transparent px-3 py-2 text-sm font-medium text-gray-800 hover:bg-blue-50 hover:text-blue-600 active:border-blue-100 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white dark:active:border-gray-600"
                >
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b1913a7e0ecb009e4ea382fbeb1c72898f6f8e829ff6218c255dc47397b5ff2a?apiKey=bef308c750544a03a3bf2b5acb540117&"
                    className="shrink-0 w-6 aspect-square"
                  />
                  <span className="my-auto font-inter font-normal">
                    Subscription
                  </span>
                </Link>
                <Link
                  to=""
                  className="group flex items-center gap-2 rounded-lg border border-transparent px-3 py-2 text-sm font-medium text-gray-800 hover:bg-blue-50 hover:text-blue-600 active:border-blue-100 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white dark:active:border-gray-600"
                >
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a9270802cebe820d6ad684ce13f923673cd65fc0dad2c8ff283dc343a5948b7?apiKey=bef308c750544a03a3bf2b5acb540117&"
                    className="shrink-0 aspect-square w-[21px]"
                  />
                  <span className="my-auto font-inter font-normal">Create</span>
                </Link>
              </nav>
            </div>
            {/* END Mobile Navigation */}
          </div>
        </header>
        {/* END Page Header */}

        {/* Page Content */}
        <main
          id="page-content"
          className="flex max-w-full flex-auto flex-col"
        ></main>
        {/* END Page Content */}
      </div>
      {/* END Page Container */}
    </>
  );
}
