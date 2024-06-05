import React from 'react';

const VideoSection = () => {
    return (
        <div className='mt-6'>
       <div className="flex flex-col text-xl max-w-[314px]">
      <div className="flex overflow-hidden relative flex-col px-3 py-4 w-full text-white whitespace-nowrap rounded-2xl aspect-[0.85]">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a50e7b3a81f84364decc2c41c9da34790c8d616442648fbd005e13a94e2ce406?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a50e7b3a81f84364decc2c41c9da34790c8d616442648fbd005e13a94e2ce406?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a50e7b3a81f84364decc2c41c9da34790c8d616442648fbd005e13a94e2ce406?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a50e7b3a81f84364decc2c41c9da34790c8d616442648fbd005e13a94e2ce406?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a50e7b3a81f84364decc2c41c9da34790c8d616442648fbd005e13a94e2ce406?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a50e7b3a81f84364decc2c41c9da34790c8d616442648fbd005e13a94e2ce406?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a50e7b3a81f84364decc2c41c9da34790c8d616442648fbd005e13a94e2ce406?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a50e7b3a81f84364decc2c41c9da34790c8d616442648fbd005e13a94e2ce406?apiKey=bef308c750544a03a3bf2b5acb540117&"
          className="object-cover absolute inset-0 size-full"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/250b75bdffc38a9a549c205b0eb9218d30cc4bb6cbdfa55d4bca5aaf176bb4f5?apiKey=bef308c750544a03a3bf2b5acb540117&"
          className="self-end w-6 aspect-square"
        />
        <div className="flex relative gap-2.5 self-start mt-72">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a72f17f1d29e51635eb644312331f8e0ce809e42bc25e348f671bf36b4a9a063?apiKey=bef308c750544a03a3bf2b5acb540117&"
            className="shrink-0 my-auto w-5 aspect-square"
          />
          <div>1.5M</div>
        </div>
      </div>
      <div className="mt-4 w-full font-medium text-zinc-900">
        Few Words from video title her...
      </div>
    </div>
        </div>
    );
};

export default VideoSection;