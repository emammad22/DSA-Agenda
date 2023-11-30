import React from "react";

export default function CaseStudy() {
  return (
    <div className="case-first  bg-white  p-6 flex flex-col items-center gap-3">
      <h3 className="date-case rounded-lg">
        <input
          type="text"
          className="outline-none border-none rounded-lg text-center px-[5px] py-1 text-[18px] font-bold"
          placeholder="Enter Date"
        />
      </h3>
      <div className="case-table-st w-[500px]">
        <ul className="w-full">
          <li className="case-item">
            <div className="flex gap-5 w-full">
              <p className="case-hour py-2 px-3 bg-slate-300 basis-[25%] flex justify-center items-center">
                <input
                  type="text"
                  className="border-none outline-none bg-slate-300 text-center"
                />
              </p>
              <p className="case-topi px-3 bg-slate-300 basis-[85%] flex items-center">
                <input
                  type="text"
                  className="bg-slate-300 outline-none border-none w-full"
                />
              </p>
            </div>
          </li>
          <li className="case-item">
            <div className="flex gap-5 w-full">
              {/* <p className="case-hour py-1 px-3 bg-slate-100 basis-[25%] flex justify-center items-center"> */}
              <input
                type="text"
                className="border-none outline-none basis-[25%] py-1 px-3 bg-slate-100 text-center"
              />
              {/* </p> */}
              {/* <p className="case-topi px-3 bg-slate-100 basis-[75%] flex items-center"> */}
              <input
                type="text"
                className="bg-slate-100 outline-none border-none bais-[75%] px-3 w-full"
              />
              {/* </p> */}
            </div>
          </li>
          <li className="case-item">
            <div className="flex gap-5 w-full">
              <p className="case-hour px-3 bg-slate-300 basis-[25%] flex justify-center items-center">
                <input
                  type="text"
                  className="border-none outline-none bg-slate-300 text-center"
                />
              </p>
              <p className="case-topi py-2 px-3 bg-slate-300 basis-[75%] flex items-center">
                {/* <textarea className="border-none outline-none bg-slate-300 w-full h-[22px] px-3 flex items-center" /> */}
                <input
                  type="text"
                  className="bg-slate-300 outline-none border-none w-full"
                />
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
