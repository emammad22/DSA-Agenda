import React, { useState } from "react";

export default function Module({ clr, data }) {
  const [topicHeights, setTopicHeights] = useState([
    "18px",
    "18px",
    "18px",
    "18px",
    "18px",
  ]);

  const handleTopicHeight = (index, e) => {
    const textarea = e.target;
    textarea.style.height = "1px"; // Set a temporary height
    textarea.style.height = `${textarea.scrollHeight}px`;
    // const newHeight = [...topicHeights];
    // newHeight[index] = "auto";
    // newHeight[index] = `${e.target.scrollHeight}px`;
    // setTopicHeights(newHeight);
  };

  return (
    <>
      <div className="flex">
        <ul className="module-container basis-[80%] self-center">
          {data.map((time, index) => {
            const textareaId = `topic-${index}`;
            return (
              <li key={index} className="table-item basis-[100%]">
                <div className="flex gap-[20px] justify-between">
                  <p
                    className={`hour-interval ${
                      index % 2 === 0 ? "bg-slate-100" : "bg-slate-200"
                    } px-[10px] py-[6px] basis-[25%] flex items-center`}
                  >
                    <input
                      type="text"
                      value={time}
                      className={`${
                        index % 2 === 0 ? "bg-slate-100" : "bg-slate-200"
                      } w-full text-center outline-none border-none`}
                    />
                  </p>
                  <p
                    className={`topic-name ${
                      index % 2 === 0 ? "bg-slate-100" : "bg-slate-200"
                    } px-[10px] py-[6px] basis-[75%]`}
                  >
                    <textarea
                      id={textareaId}
                      rows="4"
                      cols="50"
                      className={`resize-none ${
                        index % 2 === 0 ? "bg-slate-100" : "bg-slate-200"
                      } w-full border-none outline-none text-[14px]`}
                      style={{ height: `${topicHeights[index]}` }}
                      onInput={(e) => handleTopicHeight(index, e)}
                    />
                  </p>
                </div>
              </li>
            );
          })}
          
        </ul>
        <div className="module-name flex basis-[5%] gap-5">
          <div className="w-[15px]" style={{ background: `${clr}` }}></div>
          <p className="name w-[60.5px] self-center">
            <input
              type="text"
              className="bg-white w-full text-center outline-none border-none"
              placeholder="Module"
            />
          </p>
        </div>
      </div>
    </>
  );
}

// Dynamic version of modules

// <>
//       <div className="flex">
//         <ul className="module-container basis-[80%] self-center">
//           {/* {module.inputs?.map((input, index) => { */}
//             {/* return ( */}
//               {/* <> */}
//                 <li className="table-item basis-[100%]">
//                   <div className="flex gap-[20px] justify-between">
//                     <p className="hour-interval bg-slate-400 px-[10px] py-[6px] basis-[25%] flex items-center">
//                       {/* {input.startHour} - {input.endHour} */}
//                     </p>
//                     <p className="topic-name bg-slate-400 px-[10px] py-[6px] basis-[75%]">
//                       {/* {input.topicName} */}
//                     </p>
//                   </div>
//                 </li>
//                 {/* {handleListItem(modIndex, index)} */}
//               {/* </> */}
//             {/* ); */}
//           {/* })} */}
//         </ul>
//         <div className="module-name bg-[#F9A820] flex items-center basis-[5%]">
//           <p className="name rotate-90 w-[60.5px] text-center">
//             {/* {module.moduleName} */}
//           </p>
//         </div>
//       </div>
//     </>
