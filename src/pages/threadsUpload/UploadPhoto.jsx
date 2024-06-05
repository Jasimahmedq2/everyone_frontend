import React from "react";

const UploadPhoto = () => {
  const handleImageUpload = (event) => {
    // Handle the image upload logic here
    console.log('Uploaded image:', event.target.files[0]);
  };
  return (
    <div>
       <div className="flex justify-center items-center px-16 py-20 text-sm text-center capitalize bg-blue-50 rounded-[30px] text-zinc-900 max-md:px-5">
      <div className="flex flex-col items-center mt-3 max-w-full w-[856px]">
        <div className="text-3xl font-bold text-zinc-600 w-[367px]">
          Select the Image which you want to upload
        </div>
        <div className="flex flex-col justify-center self-stretch mt-14 bg-white max-md:mt-10 max-md:max-w-full">
          <div className="flex justify-center items-center px-16 py-20 rounded-3xl border-dashed border-[3px] border-zinc-600 max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col items-center mt-5 mb-5 max-w-full w-[280px]">
      <label htmlFor="imageUpload" className="cursor-pointer">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/aef8ee17a63b58a29128c7b0f362f7dd2fe0e89b5fdcb00a016d3efb2c1229c5?apiKey=bef308c750544a03a3bf2b5acb540117&"
          className="max-w-full aspect-square w-[148px]"
          alt="Preview"
        />
        <div className="self-stretch mt-8 text-2xl font-semibold">
          Drag and drop Image file
        </div>
        <div className="mt-5">OR</div>
      </label>
      <input
        type="file"
        id="imageUpload"
        accept="image/*"
        className="hidden"
        onChange={handleImageUpload}
      />
      <div
        className="justify-center items-center px-16 py-4 mt-10 max-w-full text-white whitespace-nowrap bg-rose-600 rounded-lg w-[191px] max-md:px-5 cursor-pointer"
        onClick={() => document.getElementById('imageUpload').click()}
      >
        Browse
      </div>
    </div>
          </div>
        </div>
        <div className="mt-12 font-medium w-[307px] max-md:mt-10">
          JPG, JPEG or PNG, 720x1280 resolution or higher, Less than 50 MB
        </div>
      </div>
    </div>
    </div>
  );
};

export default UploadPhoto;
