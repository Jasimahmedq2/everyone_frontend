import React, { useState } from 'react';

const Toggle = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown along with the checkbox
  };

  return (
    <div className="relative">
      <label className='autoSaverSwitch relative inline-flex cursor-pointer select-none items-center'>
        <input
          type='checkbox'
          className='sr-only'
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <span
          className={`slider mr-3 flex h-[26px] w-[50px] items-center rounded-full p-1 duration-200 ${
            isChecked ? 'bg-primary' : 'bg-[#CCCCCE]'
          }`}
        >
          <span
            className={`dot h-[18px] w-[18px] rounded-full bg-white duration-200 ${
              isChecked ? 'translate-x-6' : ''
            }`}
          ></span>
        </span>
        <span className='label flex items-center text-sm font-medium text-black'>
         {/* <span className='pl-1'> {isChecked ? 'On' : 'Off'} </span> */}
        </span>
      </label>

      {isDropdownOpen && (
        <div className="absolute top-full left-0 mt-6 w-60 bg-white rounded-xl shadow-md z-10">
         <div className="flex flex-col p-3 bg-white rounded-xl shadow-sm max-w-[241px]">
      <div className="flex gap-2.5 py-2.5 pl-2.5">
        <div className="flex gap-2 text-xl whitespace-nowrap text-zinc-900">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/94a921c2174971df1e074858ebf43652d52293f1bc0f7fe394e6c7a3850d0a76?apiKey=bef308c750544a03a3bf2b5acb540117&"
            className="shrink-0 w-5 aspect-square"
          />
          <div className="my-auto">Friends</div>
        </div>
        <div className="flex flex-col justify-center items-start self-start py-0.5 fill-neutral-200">
          <div className="shrink-0 bg-white rounded-full h-[15px] w-[15px]" />
        </div>
      </div>
      <div className="flex gap-2.5 py-2.5 pl-2.5 mt-4">
        <div className="flex gap-2 text-xl whitespace-nowrap text-zinc-900">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/12b54ce6f0b4e58a311d751e7ec6c58566e3ca1286fae10a867c3d348fc469da?apiKey=bef308c750544a03a3bf2b5acb540117&"
            className="shrink-0 w-5 aspect-square"
          />
          <div className="my-auto">Business</div>
        </div>
        <div className="flex flex-col justify-center items-start self-start px-4 py-0.5 fill-green-400">
          <div className="shrink-0 bg-white rounded-full h-[15px] w-[15px]" />
        </div>
      </div>
      <div className="flex gap-2.5 py-2.5 pl-2.5 mt-4">
        <div className="flex gap-2 text-xl whitespace-nowrap text-zinc-900">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b823845ec4e1d49470be40d225afe2086a2101b13f54560abe968ca1aa14177?apiKey=bef308c750544a03a3bf2b5acb540117&"
            className="shrink-0 w-5 aspect-square"
          />
          <div className="my-auto">Dating</div>
        </div>
        <div className="flex flex-col justify-center items-start self-start px-4 py-0.5 fill-green-400">
          <div className="shrink-0 bg-white rounded-full h-[15px] w-[15px]" />
        </div>
      </div>
    </div>
       
        </div>
      )}
    </div>
  );
}

export default Toggle;
