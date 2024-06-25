import React from 'react';

const PostPopup = () => {
    return (
        <div>
             <div className="flex justify-center items-center px-16 py-14 bg-white rounded-3xl max-md:px-5">
      <div className="justify-end w-full max-w-[1215px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[58%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
             
              {/* Button */}
              <div className="px-7 py-10 bg-white rounded-xl shadow max-md:px-5 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">

                  <div className="flex flex-col w-[48%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col max-md:mt-5">
                      <div className="text-xl font-semibold text-zinc-900">
                        Boost or Feature for more reach
                      </div>
                      <div className="mt-5 text-base text-blue-500 underline">
                        View Post Insights
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <div className="flex grow gap-4 mt-3 font-normal max-md:mt-10">
                      <div className="justify-center text-sm px-3 py-3 text-rose-500 rounded border-rose-500 border">
                        Boost Post
                      </div>
                      
                      <div className="flex flex-col justify-center px-5 py-3 rounded border-teal-400  border-[0.775px]">
                        <div className="bg-clip-text bg-[linear-gradient(92deg,#00FFAD_-36.33%,#0DF_32.04%,#4093FF_98.43%)]">
                          Feature Post
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center mt-7 bg-white rounded-3xl max-md:max-w-full">
                <div className="flex overflow-hidden relative flex-col items-end pb-8 w-full min-h-[861px] max-md:max-w-full">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/60e80c39142abf9bf015d135ef38252ca99a86d0590d91f5bc5b0e6f5689ec45?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/60e80c39142abf9bf015d135ef38252ca99a86d0590d91f5bc5b0e6f5689ec45?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/60e80c39142abf9bf015d135ef38252ca99a86d0590d91f5bc5b0e6f5689ec45?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/60e80c39142abf9bf015d135ef38252ca99a86d0590d91f5bc5b0e6f5689ec45?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/60e80c39142abf9bf015d135ef38252ca99a86d0590d91f5bc5b0e6f5689ec45?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/60e80c39142abf9bf015d135ef38252ca99a86d0590d91f5bc5b0e6f5689ec45?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/60e80c39142abf9bf015d135ef38252ca99a86d0590d91f5bc5b0e6f5689ec45?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/60e80c39142abf9bf015d135ef38252ca99a86d0590d91f5bc5b0e6f5689ec45?apiKey=bef308c750544a03a3bf2b5acb540117&"
                    className="object-cover absolute inset-0 size-full"
                  />
                  <div className="flex relative gap-2.5 self-stretch py-1.5 pl-1.5 text-sm rounded-xl bg-black bg-opacity-50 text-zinc-300 max-md:flex-wrap">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f509d109a9eaea93c7e5ba037de330b7462a83675aae18b5c63c5817fb5afac1?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f509d109a9eaea93c7e5ba037de330b7462a83675aae18b5c63c5817fb5afac1?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f509d109a9eaea93c7e5ba037de330b7462a83675aae18b5c63c5817fb5afac1?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f509d109a9eaea93c7e5ba037de330b7462a83675aae18b5c63c5817fb5afac1?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f509d109a9eaea93c7e5ba037de330b7462a83675aae18b5c63c5817fb5afac1?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f509d109a9eaea93c7e5ba037de330b7462a83675aae18b5c63c5817fb5afac1?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f509d109a9eaea93c7e5ba037de330b7462a83675aae18b5c63c5817fb5afac1?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f509d109a9eaea93c7e5ba037de330b7462a83675aae18b5c63c5817fb5afac1?apiKey=bef308c750544a03a3bf2b5acb540117&"
                      className="shrink-0 aspect-square w-[31px]"
                    />
                    <div className="flex gap-2.5 justify-between my-auto max-md:flex-wrap">
                      <div>Like a Rolling Stone</div>
                      <div>Bob Dylan • Way down we go (slowed)</div>
                      <div>Kaleo • Way down we go (slowed)</div>
                    </div>
                  </div>
                  <div className="flex relative gap-5 justify-between self-stretch mx-5 mt-4 max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e5b684ad30eb87d848e1fbd650e06d3518278daf738198b5b0c63e92e07884a5?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e5b684ad30eb87d848e1fbd650e06d3518278daf738198b5b0c63e92e07884a5?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e5b684ad30eb87d848e1fbd650e06d3518278daf738198b5b0c63e92e07884a5?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e5b684ad30eb87d848e1fbd650e06d3518278daf738198b5b0c63e92e07884a5?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e5b684ad30eb87d848e1fbd650e06d3518278daf738198b5b0c63e92e07884a5?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e5b684ad30eb87d848e1fbd650e06d3518278daf738198b5b0c63e92e07884a5?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e5b684ad30eb87d848e1fbd650e06d3518278daf738198b5b0c63e92e07884a5?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e5b684ad30eb87d848e1fbd650e06d3518278daf738198b5b0c63e92e07884a5?apiKey=bef308c750544a03a3bf2b5acb540117&"
                      className="shrink-0 aspect-square w-[30px]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/32e5e79596530c0b527d0db6b1038543033edbf90c7da696d517c79d3ca1ee57?apiKey=bef308c750544a03a3bf2b5acb540117&"
                      className="shrink-0 aspect-square w-[30px]"
                    />
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b01255411e7de3b70ae9e2d7534d4de70cd28fa5b404c260dd66d92e3e22165?apiKey=bef308c750544a03a3bf2b5acb540117&"
                    className="mt-36 mr-7 aspect-square w-[47px] max-md:mt-10 max-md:mr-2.5"
                  />
                  <div className="relative mt-1 mr-7 text-xs font-semibold tracking-wide text-center text-white max-md:mr-2.5">
                    11.9K
                  </div>
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f6528661c20a070ab0970d05c9e3c96d2466cb8e6ac98e0a744ccc5dfc7e6cc4?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f6528661c20a070ab0970d05c9e3c96d2466cb8e6ac98e0a744ccc5dfc7e6cc4?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f6528661c20a070ab0970d05c9e3c96d2466cb8e6ac98e0a744ccc5dfc7e6cc4?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f6528661c20a070ab0970d05c9e3c96d2466cb8e6ac98e0a744ccc5dfc7e6cc4?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f6528661c20a070ab0970d05c9e3c96d2466cb8e6ac98e0a744ccc5dfc7e6cc4?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f6528661c20a070ab0970d05c9e3c96d2466cb8e6ac98e0a744ccc5dfc7e6cc4?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f6528661c20a070ab0970d05c9e3c96d2466cb8e6ac98e0a744ccc5dfc7e6cc4?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f6528661c20a070ab0970d05c9e3c96d2466cb8e6ac98e0a744ccc5dfc7e6cc4?apiKey=bef308c750544a03a3bf2b5acb540117&"
                    className="mt-3 mr-7 aspect-square w-[47px] max-md:mr-2.5"
                  />
                  <div className="relative mt-2.5 mr-7 text-xs font-semibold tracking-wide text-center text-white max-md:mr-2.5">
                    11.9K
                  </div>
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7e6c853c7ce988d7fea5f5f72fd63947ec62f619168f0c80b8bdf28b3e892809?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e6c853c7ce988d7fea5f5f72fd63947ec62f619168f0c80b8bdf28b3e892809?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e6c853c7ce988d7fea5f5f72fd63947ec62f619168f0c80b8bdf28b3e892809?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e6c853c7ce988d7fea5f5f72fd63947ec62f619168f0c80b8bdf28b3e892809?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e6c853c7ce988d7fea5f5f72fd63947ec62f619168f0c80b8bdf28b3e892809?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e6c853c7ce988d7fea5f5f72fd63947ec62f619168f0c80b8bdf28b3e892809?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e6c853c7ce988d7fea5f5f72fd63947ec62f619168f0c80b8bdf28b3e892809?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e6c853c7ce988d7fea5f5f72fd63947ec62f619168f0c80b8bdf28b3e892809?apiKey=bef308c750544a03a3bf2b5acb540117&"
                    className="mt-3 mr-7 aspect-square w-[47px] max-md:mr-2.5"
                  />
                  <div className="relative mt-2.5 mr-7 text-xs font-semibold tracking-wide text-center text-white max-md:mr-2.5">
                    11.9K
                  </div>
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/49712f5307b5fa0ddd1c2b4afff8311052f5b0bee7d607d07d3679f12609c385?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/49712f5307b5fa0ddd1c2b4afff8311052f5b0bee7d607d07d3679f12609c385?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/49712f5307b5fa0ddd1c2b4afff8311052f5b0bee7d607d07d3679f12609c385?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/49712f5307b5fa0ddd1c2b4afff8311052f5b0bee7d607d07d3679f12609c385?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/49712f5307b5fa0ddd1c2b4afff8311052f5b0bee7d607d07d3679f12609c385?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/49712f5307b5fa0ddd1c2b4afff8311052f5b0bee7d607d07d3679f12609c385?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/49712f5307b5fa0ddd1c2b4afff8311052f5b0bee7d607d07d3679f12609c385?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/49712f5307b5fa0ddd1c2b4afff8311052f5b0bee7d607d07d3679f12609c385?apiKey=bef308c750544a03a3bf2b5acb540117&"
                    className="mt-3 mr-7 aspect-square w-[47px] max-md:mr-2.5"
                  />
                  <div className="relative mt-2.5 mr-7 text-xs font-semibold tracking-wide text-center text-white max-md:mr-2.5">
                    11.9K
                  </div>
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9f3e4363804ef894f004a1dc6a6396a8a83c5db833fa942d8dfcc59beaf95121?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f3e4363804ef894f004a1dc6a6396a8a83c5db833fa942d8dfcc59beaf95121?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f3e4363804ef894f004a1dc6a6396a8a83c5db833fa942d8dfcc59beaf95121?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f3e4363804ef894f004a1dc6a6396a8a83c5db833fa942d8dfcc59beaf95121?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f3e4363804ef894f004a1dc6a6396a8a83c5db833fa942d8dfcc59beaf95121?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f3e4363804ef894f004a1dc6a6396a8a83c5db833fa942d8dfcc59beaf95121?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f3e4363804ef894f004a1dc6a6396a8a83c5db833fa942d8dfcc59beaf95121?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f3e4363804ef894f004a1dc6a6396a8a83c5db833fa942d8dfcc59beaf95121?apiKey=bef308c750544a03a3bf2b5acb540117&"
                    className="mt-3 mr-7 aspect-square w-[47px] max-md:mr-2.5"
                  />
                  <div className="flex relative gap-3.5 items-center self-center mt-48 max-md:flex-wrap max-md:mt-10">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/155ddba160f400e4bbb026eb4cb768b9e35515cf14ff35034b7b521f974e3816?apiKey=bef308c750544a03a3bf2b5acb540117&"
                      className="shrink-0 self-stretch w-5 aspect-square"
                    />
                    <div className="flex gap-1.5 self-stretch my-auto max-md:flex-wrap">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d5a1fac2bc521f3af0ee1a7e498434241420373114dd88ca8d8b0b04d98979ea?apiKey=bef308c750544a03a3bf2b5acb540117&"
                        className="shrink-0 aspect-[0.93] fill-white w-[15px]"
                      />
                      <div className="shrink-0 my-auto max-w-full h-1 backdrop-blur-[10.699999809265137px] bg-white bg-opacity-30 rounded-[30px] w-[450px]" />
                    </div>
                    <div className="self-stretch my-auto text-xs text-white">
                      00:05/01:00
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[42%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col py-7 w-full bg-white rounded-3xl shadow max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col px-5 max-md:max-w-full">
                <div className="flex gap-5 w-full text-zinc-900 max-md:flex-wrap max-md:max-w-full">
                  <div className="flex flex-auto gap-2">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/633c4a577b749c102ddda395beb9efd0ca882260d9e2680de551bc38c6cfed7f?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/633c4a577b749c102ddda395beb9efd0ca882260d9e2680de551bc38c6cfed7f?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/633c4a577b749c102ddda395beb9efd0ca882260d9e2680de551bc38c6cfed7f?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/633c4a577b749c102ddda395beb9efd0ca882260d9e2680de551bc38c6cfed7f?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/633c4a577b749c102ddda395beb9efd0ca882260d9e2680de551bc38c6cfed7f?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/633c4a577b749c102ddda395beb9efd0ca882260d9e2680de551bc38c6cfed7f?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/633c4a577b749c102ddda395beb9efd0ca882260d9e2680de551bc38c6cfed7f?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/633c4a577b749c102ddda395beb9efd0ca882260d9e2680de551bc38c6cfed7f?apiKey=bef308c750544a03a3bf2b5acb540117&"
                      className="shrink-0 self-start aspect-square w-[57px]"
                    />
                    <div className="flex flex-col">
                      <div className="text-base font-bold">
                        <span className="text-zinc-900">Dennis Callis</span>{" "}
                        <span className=" text-zinc-900">@denniscallis</span>
                      </div>
                      <div className="mt-1 text-base">
                        Video Video TitleVideo TitleVideo TitleVideo TitleTitle
                      </div>
                    </div>
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a63543a5405b221967ef290feec7b79348474be19d9935edb0cb92314600577?apiKey=bef308c750544a03a3bf2b5acb540117&"
                    className="shrink-0 self-start w-6 aspect-square"
                  />
                </div>
                <div className="flex gap-4 mt-5 text-base text-black max-md:flex-wrap">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/eeb2da355a65d89a5bbc549e81312deaf525506807b4818099d9014c04e0c231?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/eeb2da355a65d89a5bbc549e81312deaf525506807b4818099d9014c04e0c231?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/eeb2da355a65d89a5bbc549e81312deaf525506807b4818099d9014c04e0c231?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/eeb2da355a65d89a5bbc549e81312deaf525506807b4818099d9014c04e0c231?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/eeb2da355a65d89a5bbc549e81312deaf525506807b4818099d9014c04e0c231?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/eeb2da355a65d89a5bbc549e81312deaf525506807b4818099d9014c04e0c231?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/eeb2da355a65d89a5bbc549e81312deaf525506807b4818099d9014c04e0c231?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/eeb2da355a65d89a5bbc549e81312deaf525506807b4818099d9014c04e0c231?apiKey=bef308c750544a03a3bf2b5acb540117&"
                    className="shrink-0 w-14 aspect-[2.17]"
                  />
                  <div>
                    <span className="text-zinc-600">Liked by </span>Ahmad ALi{" "}
                    <span className="text-zinc-600">and 124k others</span>
                  </div>
                </div>
              </div>
              <div className="shrink-0 mt-7 h-px border border-solid bg-black bg-opacity-10 border-black border-opacity-10 max-md:max-w-full" />
              <div className="flex flex-col justify-center px-2 mt-8 mr-4 ml-4 max-md:mr-2.5 max-md:max-w-full">
                <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
                  <div className="flex gap-1.5 justify-between text-sm font-bold text-slate-800">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1ea2cc987747b9afe7e2ea6cb415c0781678971ef25cabea9ec22693ee17d97a?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1ea2cc987747b9afe7e2ea6cb415c0781678971ef25cabea9ec22693ee17d97a?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1ea2cc987747b9afe7e2ea6cb415c0781678971ef25cabea9ec22693ee17d97a?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1ea2cc987747b9afe7e2ea6cb415c0781678971ef25cabea9ec22693ee17d97a?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1ea2cc987747b9afe7e2ea6cb415c0781678971ef25cabea9ec22693ee17d97a?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1ea2cc987747b9afe7e2ea6cb415c0781678971ef25cabea9ec22693ee17d97a?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1ea2cc987747b9afe7e2ea6cb415c0781678971ef25cabea9ec22693ee17d97a?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1ea2cc987747b9afe7e2ea6cb415c0781678971ef25cabea9ec22693ee17d97a?apiKey=bef308c750544a03a3bf2b5acb540117&"
                      className="shrink-0 rounded-full aspect-square w-[30px]"
                    />
                    <div className="my-auto">Judith Rodriguez</div>
                  </div>
                  <div className="flex gap-2.5 pr-2.5 my-auto">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d8dfd2e0334a4f96da51e4e3633c10d80a41fec261f8158edbc9cfded2859a1?apiKey=bef308c750544a03a3bf2b5acb540117&"
                      className="shrink-0 aspect-[1.06] w-[18px]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b402410633fd315fad1433b16d9163bc663ed0cbd6987032aa8b84ff6c5858b5?apiKey=bef308c750544a03a3bf2b5acb540117&"
                      className="shrink-0 aspect-[1.06] w-[18px]"
                    />
                  </div>
                </div>
                <div className="mt-2 text-sm leading-4 text-stone-900 max-md:max-w-full">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  sagittis neque sit amet lacus sodales, id maximus neque
                  molestie
                </div>
                <div className="flex gap-2.5 self-start mt-2.5 text-xs text-slate-500">
                  <div>2 mins ago </div>
                  <div>Reply</div>
                </div>
                <div className="self-center mt-3.5 text-sm font-bold leading-4 text-slate-500">
                  View 23 replies
                </div>
              </div>
              <div className="flex gap-5 justify-between mt-5 mr-6 ml-6 max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
                <div className="flex gap-1.5 justify-between text-sm font-bold text-slate-800">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cd7170835c5532e6fe7740a983acf6f98e5f0832868275b3151d6207632823f9?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd7170835c5532e6fe7740a983acf6f98e5f0832868275b3151d6207632823f9?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd7170835c5532e6fe7740a983acf6f98e5f0832868275b3151d6207632823f9?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd7170835c5532e6fe7740a983acf6f98e5f0832868275b3151d6207632823f9?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd7170835c5532e6fe7740a983acf6f98e5f0832868275b3151d6207632823f9?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd7170835c5532e6fe7740a983acf6f98e5f0832868275b3151d6207632823f9?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd7170835c5532e6fe7740a983acf6f98e5f0832868275b3151d6207632823f9?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd7170835c5532e6fe7740a983acf6f98e5f0832868275b3151d6207632823f9?apiKey=bef308c750544a03a3bf2b5acb540117&"
                    className="shrink-0 rounded-full aspect-square w-[30px]"
                  />
                  <div className="my-auto">Kurt Bates</div>
                </div>
                <div className="flex gap-2.5 pr-2.5 my-auto">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d7a28fda1fa37eda7bbca92d4faf7b3eb3c5b1175290b34fe487c9e33b81cee?apiKey=bef308c750544a03a3bf2b5acb540117&"
                    className="shrink-0 aspect-[1.06] w-[18px]"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ecd949057735069ece39a1103d8d0404c4eb8b87f45e247a16552f9123900e11?apiKey=bef308c750544a03a3bf2b5acb540117&"
                    className="shrink-0 aspect-[1.06] w-[18px]"
                  />
                </div>
              </div>
              <div className="mt-2 mr-6 ml-6 text-sm leading-4 text-stone-900 max-md:mr-2.5 max-md:max-w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                sagittis neque sit amet lacus sodales, id maximus neque molestie
              </div>
              <div className="flex gap-2.5 self-start mt-2.5 ml-6 text-xs text-slate-500 max-md:ml-2.5">
                <div>2 mins ago </div>
                <div>Reply</div>
              </div>
              <div className="flex gap-5 justify-between mt-5 mr-6 ml-6 max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
                <div className="flex gap-1.5 justify-between text-sm font-bold text-slate-800">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d8532c9b3c9f8689d20f32b85f1ac8c6ba871db6c3991abf7f33df7006efacbb?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8532c9b3c9f8689d20f32b85f1ac8c6ba871db6c3991abf7f33df7006efacbb?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8532c9b3c9f8689d20f32b85f1ac8c6ba871db6c3991abf7f33df7006efacbb?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8532c9b3c9f8689d20f32b85f1ac8c6ba871db6c3991abf7f33df7006efacbb?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8532c9b3c9f8689d20f32b85f1ac8c6ba871db6c3991abf7f33df7006efacbb?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8532c9b3c9f8689d20f32b85f1ac8c6ba871db6c3991abf7f33df7006efacbb?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8532c9b3c9f8689d20f32b85f1ac8c6ba871db6c3991abf7f33df7006efacbb?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8532c9b3c9f8689d20f32b85f1ac8c6ba871db6c3991abf7f33df7006efacbb?apiKey=bef308c750544a03a3bf2b5acb540117&"
                    className="shrink-0 rounded-full aspect-[0.97] w-[30px]"
                  />
                  <div className="my-auto">Kimberly Mastrangelo</div>
                </div>
                <div className="flex gap-2.5 pr-2.5 my-auto">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/df5ab395dbc69c1240103e1840f55883ab372ff361031acdfcbdf4c3e14915d6?apiKey=bef308c750544a03a3bf2b5acb540117&"
                    className="shrink-0 aspect-square w-[18px]"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b51ada1cafb8a4fbaab3b32ee8db0ae48acb9c9718703e1e1d1894344b4b2df?apiKey=bef308c750544a03a3bf2b5acb540117&"
                    className="shrink-0 aspect-square w-[18px]"
                  />
                </div>
              </div>
              <div className="mt-2 mr-6 ml-6 text-sm leading-4 text-stone-900 max-md:mr-2.5 max-md:max-w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                sagittis neque sit amet lacus sodales, id maximus neque molestie
              </div>
              <div className="flex gap-2.5 self-start mt-2.5 ml-6 text-xs text-slate-500 max-md:ml-2.5">
                <div>2 mins ago </div>
                <div>Reply</div>
              </div>
              <div className="flex gap-5 justify-between mt-5 mr-6 ml-6 max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
                <div className="flex gap-1.5 justify-between text-sm font-bold text-slate-800">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2ec2e88a05c678f13b04da4f0e3c060406a2ac7196abca104e1f6193f42ec0b3?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ec2e88a05c678f13b04da4f0e3c060406a2ac7196abca104e1f6193f42ec0b3?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ec2e88a05c678f13b04da4f0e3c060406a2ac7196abca104e1f6193f42ec0b3?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ec2e88a05c678f13b04da4f0e3c060406a2ac7196abca104e1f6193f42ec0b3?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ec2e88a05c678f13b04da4f0e3c060406a2ac7196abca104e1f6193f42ec0b3?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ec2e88a05c678f13b04da4f0e3c060406a2ac7196abca104e1f6193f42ec0b3?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ec2e88a05c678f13b04da4f0e3c060406a2ac7196abca104e1f6193f42ec0b3?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ec2e88a05c678f13b04da4f0e3c060406a2ac7196abca104e1f6193f42ec0b3?apiKey=bef308c750544a03a3bf2b5acb540117&"
                    className="shrink-0 rounded-full aspect-[0.97] w-[30px]"
                  />
                  <div className="my-auto">Joshua Jones</div>
                </div>
                <div className="flex gap-2.5 pr-2.5 my-auto">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/777dd78f7dfeb959c82af65d12e9df8c67698e2e6c91842387751face19b0ecd?apiKey=bef308c750544a03a3bf2b5acb540117&"
                    className="shrink-0 aspect-square w-[18px]"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/00f9da0ac220bf96eeedf1f3daed9c6f097898596143176fd2545f07ec764f24?apiKey=bef308c750544a03a3bf2b5acb540117&"
                    className="shrink-0 aspect-square w-[18px]"
                  />
                </div>
              </div>
              <div className="mt-2 mr-6 ml-6 text-sm leading-4 text-stone-900 max-md:mr-2.5 max-md:max-w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                sagittis neque sit amet lacus sodales, id maximus neque molestie
              </div>
              <div className="flex gap-2.5 self-start mt-2.5 ml-6 text-xs text-slate-500 max-md:ml-2.5">
                <div>2 mins ago </div>
                <div>Reply</div>
              </div>
              <div className="flex gap-5 justify-between mt-5 mr-6 ml-6 max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
                <div className="flex gap-1.5 justify-between text-sm font-bold text-slate-800">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f0c218fd1428862930f188957d2a9b235a7ab5d00df7c9a24643eeb02df4621b?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0c218fd1428862930f188957d2a9b235a7ab5d00df7c9a24643eeb02df4621b?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0c218fd1428862930f188957d2a9b235a7ab5d00df7c9a24643eeb02df4621b?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0c218fd1428862930f188957d2a9b235a7ab5d00df7c9a24643eeb02df4621b?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0c218fd1428862930f188957d2a9b235a7ab5d00df7c9a24643eeb02df4621b?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0c218fd1428862930f188957d2a9b235a7ab5d00df7c9a24643eeb02df4621b?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0c218fd1428862930f188957d2a9b235a7ab5d00df7c9a24643eeb02df4621b?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0c218fd1428862930f188957d2a9b235a7ab5d00df7c9a24643eeb02df4621b?apiKey=bef308c750544a03a3bf2b5acb540117&"
                    className="shrink-0 rounded-full aspect-square w-[30px]"
                  />
                  <div className="my-auto">Lorri Warf</div>
                </div>
                <div className="flex gap-2.5 pr-2.5 my-auto">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5935089ebb95e9fcbceb1da295591d115df4d6e491e45eeca50949d3af4841ed?apiKey=bef308c750544a03a3bf2b5acb540117&"
                    className="shrink-0 aspect-square w-[18px]"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d3799248148b67c92989860f3d1e4ce172f425634606a29b6c379b3b269360a?apiKey=bef308c750544a03a3bf2b5acb540117&"
                    className="shrink-0 aspect-square w-[18px]"
                  />
                </div>
              </div>
              <div className="mt-2 mr-6 ml-6 text-sm leading-4 text-stone-900 max-md:mr-2.5 max-md:max-w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                sagittis neque sit amet lacus sodales, id maximus neque molestie
              </div>
              <div className="flex gap-2.5 self-start mt-2.5 ml-6 text-xs text-slate-500 max-md:ml-2.5">
                <div>2 mins ago </div>
                <div>Reply</div>
              </div>
              <div className="flex gap-0 mx-7 mt-10 max-md:flex-wrap max-md:mr-2.5">
                <div className="flex flex-col justify-center px-4 py-3.5 bg-slate-100 rounded-[110px] max-md:px-5">
                  <div className="flex gap-5 justify-between w-full">
                    <div className="text-sm text-slate-500">Add comment...</div>
                    <div className="flex gap-4 justify-between px-px">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/32e19f8886181f1c7808b7586d1bd18818e5836af09eaf7eac33edbc41e2fca7?apiKey=bef308c750544a03a3bf2b5acb540117&"
                        className="shrink-0 self-start aspect-square fill-rose-500 w-[17px]"
                      />
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e723ed9b0f3773da04bd1954963cca10e1e2beee2138b74c5ebbdf004b0d9b57?apiKey=bef308c750544a03a3bf2b5acb540117&"
                        className="shrink-0 aspect-square w-[19px]"
                      />
                    </div>
                  </div>
                </div>
                <div className="justify-center px-5 py-4 text-sm font-medium whitespace-nowrap rounded-[82px] text-zinc-900">
                  Send
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

export default PostPopup;