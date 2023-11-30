import React from "react";
import Module from "./Module";

export default function Day({ day }) {
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
              <>
                <Module key={modIndex} module={module} modIndex={modIndex} />
                {modIndex === 0 ? (
                  <div className="lunch flex basis-[100%]">
                    <div className="flex basis-[80%] gap-[20px] justify-between">
                      <p className="basis-[30.3%] px-[10px] py-[6px] bg-slate-200">
                        12:35-13:05
                      </p>
                      <p className="basis-[95%] px-[10px] py-[6px] bg-slate-200">
                        Lunch Time
                      </p>
                    </div>
                  </div>
                ) : null}
              </>
            );
          })}
        </div>

        {/* <Module /> */}
      </div>
    </div>
  );
}
