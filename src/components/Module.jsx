import React from "react";

export default function Module() {
  return (
    <div className="tables flex">
      <ul className="module-container basis-[94%]">
        <li className="table-item">
          <div className="flex gap-[20px]">
            <p className="hour-interval bg-slate-400 px-[10px] py-[6px]">
              10:00 - 10:45
            </p>
            <p className="topic-name bg-slate-400 px-[10px] py-[6px]">
              Working with image data: channels, matrices, dimenstions
            </p>
          </div>
        </li>
        <li className="table-item">
          <div className="flex gap-[20px]">
            <p className="hour-interval bg-slate-300 px-[10px] py-[6px]">
              10:00 - 10:45
            </p>
            <p className="topic-name bg-slate-300 px-[10px] py-[6px]">
              Working with image data: channels, matrices, dimenstions
            </p>
          </div>
        </li>
        <li className="table-item">
          <div className="flex gap-[20px]">
            <p className="hour-interval bg-slate-400 px-[10px] py-[6px]">
              10:00 - 10:45
            </p>
            <p className="topic-name bg-slate-400 px-[10px] py-[6px]">
              Working with image data: channels, matrices, dimenstions
            </p>
          </div>
        </li>
      </ul>
      <div className="module-name bg-[#F9A820] flex items-center basis-[5%]">
        <p className="name rotate-90 text-center">Phyton</p>
      </div>
    </div>
  );
}
