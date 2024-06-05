import { useState } from "react";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div>
      <div className="flex gap-5 justify-between px-8 py-4 bg-white max-md:flex-wrap max-md:px-5 font-poppins">
        <div className="flex gap-1.5 justify-between my-auto font-inter font-normal">
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
        </div>
        <div className="flex flex-col justify-center items-start p-4 text-base font-semibold capitalize bg-stone-50 rounded-[80px] text-zinc-600 max-md:pr-5">
          <div className="flex gap-2.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/137d2c851bf75e5126b8f630cb0792bf379f81d1b5d462d403d0fcc37044fd44?apiKey=bef308c750544a03a3bf2b5acb540117&"
              className="shrink-0 w-6 aspect-square"
            />
            <div className="my-auto font-inter font-normal">Type here</div>
          </div>
        </div>
        <div className="flex gap-5 justify-between items-center px-4 text-base font-semibold capitalize whitespace-nowrap text-zinc-600 max-md:flex-wrap">
          <div className="flex gap-2.5 self-stretch my-auto font-inter font-normal">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/74abf4080dd04ec0cde96610b07c4ea87678a09006c0d5487c6c420fe2155d84?apiKey=bef308c750544a03a3bf2b5acb540117&"
              className="shrink-0 w-6 aspect-square"
            />
            <div className="my-auto font-inter font-normal">Everyone</div>
          </div>
          <div className="flex gap-2.5 self-stretch my-auto font-inter font-normal">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/891bd1be672434664e266972807199fbfef868b6eb3f328ee2c5b9f55988a58a?apiKey=bef308c750544a03a3bf2b5acb540117&"
              className="shrink-0 w-6 aspect-square"
            />
            <div className="my-auto font-inter font-normal">Trending</div>
          </div>
          <div className="flex flex-col justify-center self-stretch p-4 font-bold text-rose-500 rounded-md bg-zinc-100">
            <div className="flex gap-2.5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b1913a7e0ecb009e4ea382fbeb1c72898f6f8e829ff6218c255dc47397b5ff2a?apiKey=bef308c750544a03a3bf2b5acb540117&"
                className="shrink-0 w-6 aspect-square"
              />
              <div className="my-auto font-inter font-normal">Subscription</div>
            </div>
          </div>   <div className="flex flex-col justify-center self-stretch p-4 font-bold text-rose-500 rounded-md bg-zinc-100">
            <div className="flex gap-2.5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b1913a7e0ecb009e4ea382fbeb1c72898f6f8e829ff6218c255dc47397b5ff2a?apiKey=bef308c750544a03a3bf2b5acb540117&"
                className="shrink-0 w-6 aspect-square"
              />
              <div className="my-auto font-inter font-normal">Subscription</div>
            </div>
          </div>
          <div className="flex gap-2.5 self-stretch my-auto font-inter font-normal">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/93ec64bf8d391bc4f03ca4f3cfa169648b309131843e17f7474ba142b1899a7e?apiKey=bef308c750544a03a3bf2b5acb540117&"
              className="shrink-0 w-6 aspect-square"
            />
            <div className="my-auto font-inter font-normal">Filter</div>
          </div>
        </div>
        <div className="flex gap-5 my-auto font-inter text-sm font-bold whitespace-nowrap text-neutral-600">
          <div className="flex gap-2 justify-center px-5 py-2.5 rounded-lg border border-solid border-neutral-600">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a9270802cebe820d6ad684ce13f923673cd65fc0dad2c8ff283dc343a5948b7?apiKey=bef308c750544a03a3bf2b5acb540117&"
              className="shrink-0 aspect-square w-[21px]"
            />
            <div className="my-auto font-inter font-normal">Create</div>
          </div>

          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5eba347b9888220c3688e089175deedbe4bfb279b32ca5da98b415c1519cc59f?apiKey=bef308c750544a03a3bf2b5acb540117&"
            className="shrink-0 my-auto font-inter font-normal w-7 aspect-square"
          />

          {/* Dropdown */}

          <div className="flex flex-col text-lg max-w-[314px] relative">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c7831e96838e26c7e1c82b04c74ff3b7a97dd6c9ddeb0676d5cec504482b6912?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7831e96838e26c7e1c82b04c74ff3b7a97dd6c9ddeb0676d5cec504482b6912?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7831e96838e26c7e1c82b04c74ff3b7a97dd6c9ddeb0676d5cec504482b6912?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7831e96838e26c7e1c82b04c74ff3b7a97dd6c9ddeb0676d5cec504482b6912?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7831e96838e26c7e1c82b04c74ff3b7a97dd6c9ddeb0676d5cec504482b6912?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7831e96838e26c7e1c82b04c74ff3b7a97dd6c9ddeb0676d5cec504482b6912?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7831e96838e26c7e1c82b04c74ff3b7a97dd6c9ddeb0676d5cec504482b6912?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7831e96838e26c7e1c82b04c74ff3b7a97dd6c9ddeb0676d5cec504482b6912?apiKey=bef308c750544a03a3bf2b5acb540117&"
              className="shrink-0 aspect-square w-[40px]"
              onClick={toggleDropdown}
            />

            {isDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                <div className="py-1">
                  <div className="flex gap-1.5 self-start ml-2.5 text-lg whitespace-nowrap text-zinc-900">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea50874b9e88e0fb66b603ed8c271d42784db8444151a038530eb33c9c18193d?apiKey=bef308c750544a03a3bf2b5acb540117&"
                      className="shrink-0 w-5 aspect-square"
                    />
                    <div className="my-auto font-inter font-normal ">
                      Profile
                    </div>
                  </div>
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
                  <div className="flex flex-col justify-center p-2.5 mt-7 text-lg leading-6 border-b border-solid border-black border-opacity-10 text-zinc-900">
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

          {/* <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ac8d79cce706d9f63886b10a7e4e0075d673c3fb8507ab206a076e49c279c15?apiKey=bef308c750544a03a3bf2b5acb540117&"
            className="shrink-0 my-auto font-inter font-normal w-6 aspect-square"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
