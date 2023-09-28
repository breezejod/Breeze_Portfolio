import React from "react";

import "boxicons/css/boxicons.min.css"; //importing the css for the boxicons

const Web = () => {
  return (
    <>
      <div className="bg-zinc-900 h-[120vh]">
        <div className="">
          <div className="pt-20 text-3xl transition-all duration-500 font-sedgwick-ave-display pl-80 text-slate-500 hover:text-slate-400">
            <h2>My Techstack</h2>
            <hr className="h-px my-4 bg-gray-100 border-0 rounded w-44 md:my-5 dark:bg-gray-700"></hr>
          </div>
          <div className="pt-10 ml-80">
          <div className="flex items-center w-40 p-3 ml-6 space-x-2 overflow-hidden text-white transition-colors rounded-md cursor-pointer select-none bg-neutral-600/10 text-black/50 hover:bg-neutral-600/15">
              <div className="flex items-center justify-center p-1.5 rounded-lg ring-1 ring-black/5 bg-[#2f74c0]/10">
                <i className="text-2xl bx bxl-html5 text-[#FF400C]"></i>
              </div>
              <span class="flex-1 truncate text-neutral-500 ">HTML5</span>
            </div>
            <div className="flex items-center w-40 p-3 mt-4 ml-6 space-x-2 overflow-hidden text-white transition-colors rounded-md cursor-pointer select-none bg-neutral-600/10 text-black/50 hover:bg-neutral-600/15">
              <div className="flex items-center justify-center p-1.5 rounded-lg ring-1 ring-black/5 bg-[#2f74c0]/10">
                <i className="text-2xl bx bxl-javascript text-[#F0DB4F]"></i>
              </div>
              <span class="flex-1 truncate text-neutral-500 ">Javascript</span>
            </div>
            <div className="flex items-center w-40 p-3 mt-4 ml-6 space-x-2 overflow-hidden text-white transition-colors rounded-md cursor-pointer select-none bg-neutral-600/10 text-black/50 hover:bg-neutral-600/15">
              <div className="flex items-center justify-center p-1.5 rounded-lg ring-1 ring-black/5 bg-[#2f74c0]/10">
                <i className="text-2xl bx bxl-tailwind-css text-[#0EA5E9]"></i>
              </div>
              <span class="flex-1 truncate text-neutral-500 ">Tailwind CSS</span>
            </div>
          
          </div>
        </div>
      </div>
      <style>
        {`
          ::-webkit-scrollbar {
            width: 7px;
          }

          ::-webkit-scrollbar-thumb {
            background-color: #6b8095;
            border-radius: 4px;
          }

          ::-webkit-scrollbar-track {
            background-color: #333;
          }
        `}
      </style>
    </>
  );
};

export default Web;
