import React from "react";
import Module from "./Module";

export default function Day({ day }) {
  return (
    <div className="day w-[700px] px-[20px] py-[20px] basis-[45%] flex flex-col gap-6">
      <div className="day-head text-center font-bold text-[20px]">
        <input
          placeholder="Enter date"
          className="rounded-[7px] text-center font-normal outline-none"
        />
      </div>

      <div className="table-container bg-white px-7 py-7">
        <div className="tables flex flex-col">
          <Module />
          <div className="lunch flex basis-[95%]">
            <div className="flex basis-[90%] gap-[20px]">
              <p className="basis-[21.5%] px-[10px] py-[6px] bg-slate-200">
                12:35-13:05
              </p>
              <p className="basis-[64%] px-[10px] py-[6px] bg-slate-200">
                Lunch Time
              </p>
            </div>
          </div>
          <Module />
        </div>
      </div>
    </div>
  );
}



// Dynamic version of day
{/* {day.datas?.map((module, modIndex) => {
            return (
              <>
                <Module key={modIndex} module={module} modIndex={modIndex} />
                {modIndex === 0 ? (
                  <div className="lunch flex basis-[95%]">
                    <div className="flex basis-[90%] gap-[20px]">
                      <p className="basis-[21.5%] px-[10px] py-[6px] bg-slate-200">
                        12:35-13:05
                      </p>
                      <p className="basis-[64%] px-[10px] py-[6px] bg-slate-200">
                        Lunch Time
                      </p>
                    </div>
                  </div>
                ) : null}
              </>
            );
          })} */}