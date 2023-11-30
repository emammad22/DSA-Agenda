import React from "react";

export default function Module({ module, modIndex }) {
  const handleListItem = (modIndex, inputIndex) => {
    if (modIndex === 0 && inputIndex === 2) {
      return <></>;
    } else if (modIndex === 1 && inputIndex == 2) {
      return <></>;
    } else {
      return (
        <>
          <li className="table-item basis-[100%]">
            <div className="flex gap-[20px] justify-between">
              <p className="minute bg-slate-200 px-[10px] py-[6px] basis-[25%] flex items-center">
                10 minute
              </p>
              <p className="topic-name bg-slate-200 px-[10px] py-[6px] basis-[75%]">
                Coffee break
              </p>
            </div>
          </li>
        </>
      );
    }
  };

  return (
    <>
      <div className="flex">
        <ul className="module-container basis-[80%] self-center">
          {module.inputs?.map((input, index) => {
            return (
              <>
                <li className="table-item basis-[100%]">
                  <div className="flex gap-[20px] justify-between">
                    <p className="hour-interval bg-slate-400 px-[10px] py-[6px] basis-[25%] flex items-center">
                      {input.startHour} - {input.endHour}
                    </p>
                    <p className="topic-name bg-slate-400 px-[10px] py-[6px] basis-[75%]">
                      {input.topicName}
                    </p>
                  </div>
                </li>
                {handleListItem(modIndex, index)}
              </>
            );
          })}
        </ul>
        <div className="module-name bg-[#F9A820] flex items-center basis-[5%]">
          <p className="name rotate-90 w-[60.5px] text-center">
            {module.moduleName}
          </p>
        </div>
      </div>
    </>
  );
}
