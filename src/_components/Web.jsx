import React from "react";

import "boxicons/css/boxicons.min.css"; 

const Web = () => {
  return (
    <>
      <div className="bg-zinc-900 h-[120vh]">
        <div className="">
          <div className="pt-20 text-3xl transition-all duration-500 font-sedgwick-ave-display pl-80 text-slate-500 hover:text-slate-400">
            <h2>My Techstack</h2>
            <hr className="h-px my-4 bg-gray-100 border-0 rounded w-44 md:my-5 dark:bg-gray-700"></hr>
          </div>
          <div className="flex pt-10 space-x-5 ml-80">
            <div className="flex items-center w-40 p-3 mt-4 ml-6 space-x-2 overflow-hidden text-white transition-colors rounded-md cursor-pointer select-none bg-neutral-600/10 text-black/50 hover:bg-neutral-600/15">
              <div className="flex items-center justify-center p-1.5 rounded-lg ring-1 ring-black/5 bg-[#2f74c0]/10">
                <i className="text-2xl bx bxl-html5 text-[#FF400C]"></i>
              </div>
              <span className="flex-1 truncate text-neutral-500 ">HTML5</span>
            </div>
            <div className="flex items-center w-40 p-3 mt-4 ml-6 space-x-2 overflow-hidden text-white transition-colors rounded-md cursor-pointer select-none bg-neutral-600/10 text-black/50 hover:bg-neutral-600/15">
              <div className="flex items-center justify-center p-1.5 rounded-lg ring-1 ring-black/5 bg-[#2f74c0]/10">
                <i className="text-2xl bx bxl-tailwind-css text-[#0EA5E9]"></i>
              </div>
              <span className="flex-1 truncate text-neutral-500 ">
                Tailwind CSS
              </span>
            </div>
            <div className="flex items-center w-40 p-3 mt-4 ml-6 space-x-2 overflow-hidden text-white transition-colors rounded-md cursor-pointer select-none bg-neutral-600/10 text-black/50 hover:bg-neutral-600/15">
              <div className="flex items-center justify-center p-1.5 rounded-lg ring-1 ring-black/5 bg-[#2f74c0]/10">
                <i className="text-2xl bx bxl-react text-[#49D4FD]"></i>
              </div>
              <span className="flex-1 truncate text-neutral-500 ">React JS</span>
            </div>
            <div className="flex items-center w-40 p-3 mt-4 ml-6 space-x-2 overflow-hidden text-white transition-colors rounded-md cursor-pointer select-none bg-neutral-600/10 text-black/50 hover:bg-neutral-600/15">
              <div className="flex items-center justify-center p-1.5 rounded-lg ring-1 ring-black/5 bg-[#2f74c0]/10">
                <i className="text-2xl bx bxl-nodejs text-[#64B04E]"></i>
              </div>
              <span className="flex-1 truncate text-neutral-500 ">Node JS</span>
            </div>
            <div className="flex items-center w-40 p-3 mt-4 ml-6 space-x-2 overflow-hidden text-white transition-colors rounded-md cursor-pointer select-none bg-neutral-600/10 text-black/50 hover:bg-neutral-600/15">
              <div className="flex items-center justify-center p-1.5 rounded-lg ring-1 ring-black/5 bg-[#2f74c0]/10">
                <i className="text-2xl bx bxl-mongodb text-[#52B043]"></i>
              </div>
              <span className="flex-1 truncate text-neutral-500 ">Mongo DB</span>
            </div>
            <div className="flex items-center w-40 p-3 mt-4 ml-6 space-x-2 overflow-hidden text-white transition-colors rounded-md cursor-pointer select-none bg-neutral-600/10 text-black/50 hover:bg-neutral-600/15">
              <div className="flex items-center justify-center p-1.5 rounded-lg ring-1 ring-black/5 bg-[#2f74c0]/10">
                <i className="text-2xl bx bxl-python text-[#FFD646]"></i>
              </div>
              <span className="flex-1 truncate text-neutral-500 ">Python</span>
            </div>
          </div>
          <hr className="h-px mr-20 my-9 ml-80 bg-slate-700 dark:bg-gray-700"/> 
        </div>
        <div>
        <div className="pt-20 text-3xl transition-all duration-500 font-sedgwick-ave-display pl-80 text-slate-500 hover:text-slate-400">
            <h2>Working Environment</h2>
            <hr className="h-px my-4 bg-gray-100 border-0 rounded w-44 md:my-5 dark:bg-gray-700"></hr>
          </div>
<div>
  
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
