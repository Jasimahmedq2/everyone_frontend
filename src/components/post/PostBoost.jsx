import React from "react";

const PostBoost = () => {
  return (
    <div>
      <div className="flex flex-col justify-center px-16 py-20 bg-white max-md:px-5 font-poppins">
        <div className="mt-10 ml-3 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col mt-5 max-md:mt-10 max-md:max-w-full">
                <div className="text-3xl lg:font-medium text-[29px] leading-4 text-zinc-900 max-md:max-w-full">
                  Boost Post
                </div>

                <div className="mt-16 text-xl font-medium text-[20px] text-zinc-900 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
                  Who do you want to see your ad?
                </div>

                <div className="flex gap-0 mt-6 max-md:flex-wrap max-md:mr-2.5 font-normal">
                  <div className="flex flex-col text-lg max-md:max-w-full">
                    <div className="leading-[129%] text-zinc-900 max-md:max-w-full text-[18px]">
                      Suggested audience
                    </div>
                    <div className="mt-2.5 leading-8 text-zinc-600 max-md:max-w-full text-[18px]">
                      Targets this ad to people similar to your <br /> followers
                    </div>
                  </div>
                  <div className="flex flex-col justify-center px-2 py-1.5 my-auto stroke-[1.289px] stroke-teal-400">
                    <div className="shrink-0 rounded-lg bg-[linear-gradient(92deg,#00FFAD_-36.33%,#0DF_32.04%,#4093FF_98.43%)] h-[18px] w-[18px]" />
                  </div>
                </div>
                <div className="flex gap-0 mt-7 text-lg leading-6 max-md:flex-wrap max-md:mr-2.5">
                  <div className="flex flex-col pr-2.5 max-md:max-w-full">
                    <div className="text-zinc-900 max-md:max-w-full">
                      Create your own
                    </div>
                    <div className="mt-2.5 text-zinc-600 max-md:max-w-full">
                      Manually enter your targeting options
                    </div>
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab582c0deb1bd40e5eb1053ae1daa03bd7620df2a435dc0bf84941311d014e7a?apiKey=bef308c750544a03a3bf2b5acb540117&"
                    className="shrink-0 my-auto aspect-[1.05] w-[21px]"
                  />
                </div>
                <div className="mt-16 font-medium text-[20px] text-zinc-900 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
                  What do you want people to do when they see your ad?
                </div>
                <div className="flex gap-0 mt-6 max-md:flex-wrap max-md:mr-2.5">
                  <div className="flex flex-col text-lg max-md:max-w-full">
                    <div className="leading-[129%] text-zinc-900 max-md:max-w-full">
                      Visit your profile
                    </div>
                    <div className="mt-2.5 leading-8 text-zinc-600 max-md:max-w-full">
                      Best for brand awareness and follows <br />(User Account name)
                    </div>
                  </div>
                  <div className="flex flex-col justify-center px-2 py-1.5 my-auto stroke-[1.289px] stroke-teal-400">
                    <div className="shrink-0 rounded-lg bg-[linear-gradient(92deg,#00FFAD_-36.33%,#0DF_32.04%,#4093FF_98.43%)] h-[18px] w-[18px]" />
                  </div>
                </div>
                <div className="flex gap-0 mt-6 text-lg max-md:flex-wrap max-md:mr-2.5">
                  <div className="flex flex-col max-md:max-w-full">
                    <div className="leading-[129%] text-zinc-900 max-md:max-w-full">
                      Visit your website
                    </div>
                    <div className="mt-2.5 leading-8 text-zinc-600 max-md:max-w-full">
                      Best for online sales, bookings and helping <br /> people learn
                      more about you
                    </div>
                  </div>
                </div>
                <div className="flex gap-0 mt-6 text-lg max-md:flex-wrap max-md:mr-2.5">
                  <div className="flex flex-col max-md:max-w-full">
                    <div className="leading-[129%] text-zinc-900 max-md:max-w-full">
                      Message you
                    </div>
                    <div className="mt-2.5 leading-8 text-zinc-600 max-md:max-w-full">
                      Best for building trust with potential customers
                    </div>
                  </div>
                </div>
                <div className="mt-14 text-xl font-medium text-black max-md:mt-10 max-md:max-w-full">
                  Boost Cost
                </div>
                <div className="mt-2 max-md:pr-5 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col px-3 pt-3.5 pb-10 rounded-2xl bg-neutral-50 h-[145px] w-[167px] bg-[#fafafa]">
                      <div className="flex flex-col justify-center p-1  rounded">
                        <div className="shrink-0 h-2.5 w-4 rounded-md bg-[linear-gradient(92deg,#00FFAD_-36.33%,#0DF_32.04%,#4093FF_98.43%)]" />
                      </div>
                      <div className="self-center mt-2.5 text-xl font-medium text-center text-black">
                        $29.99
                      </div>
                      <div className="mt-4 text-lg leading-6 text-center text-neutral-500">
                        20k Impressions
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[28%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col pr-11 pb-9 pl-4 mx-auto rounded-2xl bg-neutral-50 h-[145px] w-[167px] max-md:pr-5 max-md:mt-7 bg-[#fafafa]">
                        <div className="justify-center self-start px-2.5 py-0.5 text-sm text-center text-rose-500 rounded bg-rose-500 bg-opacity-20">
                          save 22%
                        </div>
                        <div className="flex flex-col justify-center self-start p-1 mt-3.5 border border-solid border-zinc-200 stroke-[0.75px] stroke-zinc-200">
                          <div className="shrink-0 h-2.5 rounded-md bg-neutral-50" />
                        </div>
                        <div className="self-end mt-4 text-xl font-medium text-center text-black">
                          $69.99
                        </div>
                        <div className="self-end mt-4 text-lg leading-6 text-center text-neutral-500">
                          3 Days
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-5 justify-between mt-9 max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
                  <div className="my-auto text-xl font-medium text-zinc-900">
                    Set duration
                  </div>
                  <div className="flex flex-col justify-center px-1.5 py-2 stroke-[1.289px] stroke-teal-400">
                    <div className="shrink-0 rounded-lg bg-[linear-gradient(92deg,#00FFAD_-36.33%,#0DF_32.04%,#4093FF_98.43%)] h-[18px] w-[18px]" />
                  </div>
                </div>
                <div className="mt-3.5 text-base leading-6 text-neutral-400 max-md:mr-2.5 max-md:max-w-full">
                  Select days
                </div>
                <div className="flex gap-5 justify-center px-7 py-4 mt-3 text-base leading-6 bg-white rounded border border-solid border-black border-opacity-10 text-neutral-400 max-md:flex-wrap max-md:px-5 max-md:mr-2.5 max-md:max-w-full">
                  <div>1 day</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f66c3e01e8377a66bc13a0ae1463b9ad1f3ecd3b89b83a156fc5815cd1c8b12f?apiKey=bef308c750544a03a3bf2b5acb540117&"
                    className="shrink-0 w-6 aspect-square"
                  />
                </div>
                <div className="mt-9 text-lg font-medium leading-6 text-zinc-900 max-md:mr-2.5 max-md:max-w-full">
                  Duration
                </div>
                <div className="flex gap-5 justify-between mt-3.5 text-xl text-zinc-600 max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
                  <div className="my-auto max-md:max-w-full">
                    Recurring - continue this ad until I pause it
                  </div>
                  <div className="shrink-0 rounded-2xl border border-solid border-zinc-200 h-[31px] w-[31px]" />
                </div>
                <div className="mt-3.5 text-base leading-7 text-zinc-600 max-md:mr-2.5 max-md:max-w-full">
                  Your card will be charged $29.99 every 24 hours until you
                  pause the campaign or you may set the duration below.
                </div>
                <div className="flex gap-5 justify-between px-px mt-12 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                  <div className="my-auto text-xl font-medium text-zinc-900">
                    Schedule ad
                  </div>
                  <div className="flex flex-col justify-center fill-zinc-200 max-w-[52px]">
                    <div className="w-full bg-white rounded border border-solid border-neutral-500 min-h-[31px]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
              <div className="flex grow gap-4 max-md:flex-wrap max-md:mt-10">
                <div className="shrink-0 w-px bg-black border border-black border-solid h-[1551px]" />
                <div className="flex flex-col grow shrink-0 self-start mt-5 basis-0 w-fit max-md:max-w-full">
                  <div className="flex gap-5 justify-between mx-6 text-xl font-medium text-zinc-900 max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
                    <div>Preview your ad</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/4feef66e9194e98b5b4605b09be6ec2957d276e6b470c300470ab581060daba5?apiKey=bef308c750544a03a3bf2b5acb540117&"
                      className="shrink-0 my-auto aspect-[1.05] w-[21px]"
                    />
                  </div>
                  <div className="flex overflow-hidden relative flex-col mx-6 mt-9 min-h-[496px] max-md:mr-2.5 max-md:max-w-full">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8614dd287e2d31b3afe143155321f69cd829434069e7edc806038791210a7e95?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8614dd287e2d31b3afe143155321f69cd829434069e7edc806038791210a7e95?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8614dd287e2d31b3afe143155321f69cd829434069e7edc806038791210a7e95?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8614dd287e2d31b3afe143155321f69cd829434069e7edc806038791210a7e95?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8614dd287e2d31b3afe143155321f69cd829434069e7edc806038791210a7e95?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8614dd287e2d31b3afe143155321f69cd829434069e7edc806038791210a7e95?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8614dd287e2d31b3afe143155321f69cd829434069e7edc806038791210a7e95?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8614dd287e2d31b3afe143155321f69cd829434069e7edc806038791210a7e95?apiKey=bef308c750544a03a3bf2b5acb540117&"
                      className="object-cover absolute inset-0 size-full"
                    />
                    <div className="flex relative gap-2.5 px-0.5 py-1.5 text-xs rounded-xl bg-black bg-opacity-50 text-zinc-300 max-md:flex-wrap">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2a2f96f48535981ec586a0214a4541b121ee94a910589129d0490826f1ee672b?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2a2f96f48535981ec586a0214a4541b121ee94a910589129d0490826f1ee672b?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2a2f96f48535981ec586a0214a4541b121ee94a910589129d0490826f1ee672b?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2a2f96f48535981ec586a0214a4541b121ee94a910589129d0490826f1ee672b?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2a2f96f48535981ec586a0214a4541b121ee94a910589129d0490826f1ee672b?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2a2f96f48535981ec586a0214a4541b121ee94a910589129d0490826f1ee672b?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2a2f96f48535981ec586a0214a4541b121ee94a910589129d0490826f1ee672b?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2a2f96f48535981ec586a0214a4541b121ee94a910589129d0490826f1ee672b?apiKey=bef308c750544a03a3bf2b5acb540117&"
                        className="shrink-0 aspect-square w-[27px]"
                      />
                      <div className="flex gap-2 justify-between my-auto">
                        <div>Like a Rolling Stone</div>
                        <div>Bob Dylan • Way down we go (slowed)</div>
                        <div>Kaleo • Way down we go (slowed)</div>
                      </div>
                    </div>
                    <div className="flex relative gap-4 items-start px-5 py-6 mt-96 max-md:flex-wrap max-md:mt-10">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0af60e21dc0d1b85c326f0dc02af3279e3b4a531b50bcc83255ee16c4f82440a?apiKey=bef308c750544a03a3bf2b5acb540117&"
                        className="shrink-0 w-5 aspect-square"
                      />
                      <div className="flex gap-1.5">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d5a1fac2bc521f3af0ee1a7e498434241420373114dd88ca8d8b0b04d98979ea?apiKey=bef308c750544a03a3bf2b5acb540117&"
                          className="shrink-0 aspect-[0.93] fill-white w-[15px]"
                        />
                        <div className="shrink-0 my-auto max-w-full h-1 backdrop-blur-[10.699999809265137px] bg-white bg-opacity-30 rounded-[30px] w-[277px]" />
                      </div>
                      <div className="text-xs text-white">00:05/01:00</div>
                    </div>
                  </div>
                  <div className="flex gap-2 justify-between self-center px-7 py-4 mt-9 text-lg font-medium tracking-normal leading-6 text-center rounded-lg bg-rose-500 bg-opacity-10 max-md:px-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/815ac80f07635f516ef522c745a5778301a4c9954ae0a362f6bbb17c8c2f2cf9?apiKey=bef308c750544a03a3bf2b5acb540117&"
                      className="shrink-0 my-auto aspect-square w-[21px]"
                    />
                    <div className="bg-clip-text bg-[linear-gradient(92deg,#00FFAD_-36.33%,#0DF_32.04%,#4093FF_98.43%)]">
                      Edit Video
                    </div>
                  </div>
                  <div className="mx-5 mt-14 text-xl font-medium text-zinc-900 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
                    Payment method
                  </div>
                  <div className="flex gap-3.5 pr-20 mx-5 mt-5 max-md:flex-wrap max-md:pr-5 max-md:mr-2.5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/090c160265765bf01e7843a9ae81eda3f7124fdca632de0f8c1c8767617b6af2?apiKey=bef308c750544a03a3bf2b5acb540117&"
                      className="shrink-0 w-12 aspect-[1.49]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/bbc97259f73ed1702b76555125121b37720660fba750276473cbac54ecc9e877?apiKey=bef308c750544a03a3bf2b5acb540117&"
                      className="shrink-0 aspect-[1.47] w-[47px]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/f4fd4c32c8ce83b869e81c748b4dd5db162c63d1a2b4533114344316122f2585?apiKey=bef308c750544a03a3bf2b5acb540117&"
                      className="shrink-0 w-12 aspect-[1.49]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c434ef199843f6b2e3db4169d8fd953ba3819638f062d46d90422b64f158e21?apiKey=bef308c750544a03a3bf2b5acb540117&"
                      className="shrink-0 aspect-[1.47] w-[47px]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/fea6733f3c6591e4c702b3fb970a6f1e025b25f20aafde2e3f9229e28a5e4fc0?apiKey=bef308c750544a03a3bf2b5acb540117&"
                      className="shrink-0 w-12 aspect-[1.49]"
                    />
                  </div>
                  <div className="justify-center p-2.5 mx-5 mt-8 text-base font-semibold text-sky-400 bg-sky-100 rounded-md max-md:px-5 max-md:mr-2.5 max-md:max-w-full">
                    Add payment method
                  </div>
                  <div className="shrink-0 mx-5 mt-10 max-w-full h-px border border-solid bg-black bg-opacity-10 border-black border-opacity-10 w-[460px] max-md:mr-2.5" />
                  <div className="mx-5 mt-10 text-xl font-medium text-zinc-900 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
                    Payment summary
                  </div>
                  <div className="flex gap-5 justify-between mx-5 mt-5 text-lg leading-6 whitespace-nowrap text-neutral-500 max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
                    <div>Boost</div>
                    <div className="text-right">$29.99</div>
                  </div>
                  <div className="flex gap-5 justify-between mx-5 mt-6 text-lg leading-6 text-black whitespace-nowrap max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
                    <div>Total</div>
                    <div className="text-right">$29.99</div>
                  </div>
                  <div className="mx-5 mt-6 text-base leading-8 text-neutral-500 max-md:mr-2.5 max-md:max-w-full">
                    You will be charged after your ad has been approved and
                    <br />
                    starts running.
                  </div>
                  <div className="justify-center items-center self-center px-16 py-4 mt-16 max-w-full text-lg font-semibold leading-6 text-center text-white rounded-xl bg-[linear-gradient(92deg,#00FFAD_-36.33%,#0DF_32.04%,#4093FF_98.43%)] w-[412px] max-md:px-5 max-md:mt-10">
                    Boost Channel
                  </div>
                  <div className="mt-10 text-base leading-6 text-center text-neutral-500 max-md:max-w-full">
                    Ads are reviewed within 24 hours, although in some cases, it
                    <br />
                    may take longer. Once they're running, you can pause
                    <br />
                    spending at any time.
                  </div>
                  <div className="self-center mt-6 text-base text-center text-sky-900">
                    <span className="leading-6 text-neutral-500">
                      By creating ads, you agree to Everyone's{" "}
                    </span>
                    <span className="leading-6 text-sky-900">Terms</span>
                    <span className="leading-6"> and conditions</span>
                  </div>
                  <div className="self-center mt-6 text-base leading-5 text-center bg-clip-text bg-[linear-gradient(92deg,#00FFAD_-36.33%,#0DF_32.04%,#4093FF_98.43%)]">
                    Learn more
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostBoost;
