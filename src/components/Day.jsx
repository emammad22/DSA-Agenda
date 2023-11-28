import React from "react";
import Module from "./Module";

export default function Day({day}) {
  return (
    <div className="day px-[20px] py-[20px] basis-[45%] flex flex-col gap-6">
      <div className="day-head text-center font-bold text-[20px]">
        <input
          placeholder="Enter date"
          className="rounded-[7px] text-center font-normal outline-none"
        />
      </div>

      <div className="table-container">
        <div className="tables flex flex-col">
          {day.datas?.map((module, modIndex) => {
            return (
            //   <div className="flex">
            //     <ul className="module-container basis-[94%]">
            //       {module.inputs?.map((input, index) => {
            //         return (
            //           <>
            //             <li className="table-item basis-[100%]">
            //               <div className="flex gap-[20px] justify-between">
            //                 <p className="hour-interval bg-slate-400 px-[10px] py-[6px] basis-[25%] flex items-center">
            //                   {input.startHour} - {input.endHour}
            //                 </p>
            //                 <p className="topic-name bg-slate-400 px-[10px] py-[6px] basis-[75%]">
            //                   {input.topicName}
            //                 </p>
            //               </div>
            //             </li>
            //             {handleListItem(modIndex, index)}
            //           </>
            //         );
            //       })}
            //     </ul>
            //     <div className="module-name bg-[#F9A820] flex items-center basis-[5%]">
            //       <p className="name rotate-90 w-[50.5px] text-center">
            //         {module.moduleName}
            //       </p>
            //     </div>
            //   </div>
            <Module key={modIndex} module={module} modIndex={modIndex}/>
            );
          })}
        </div>

        {/* <Module /> */}
      </div>
    </div>
  );
}
