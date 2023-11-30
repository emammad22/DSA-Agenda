import React from "react";

export default function Module({ module, modIndex }) {
  // Deprecated 30.11.2023
  // const handleListItem = (modIndex, inputIndex) => {
  //   if (modIndex === 0 && inputIndex === 2) {
  //     return <></>;
  //   } else if (modIndex === 1 && inputIndex == 2) {
  //     return <></>;
  //   } else {
  //     return (
  //       <>
  //         <li className="table-item basis-[100%]">
  //           <div className="flex gap-[20px] justify-between">
  //             <p className="minute bg-slate-200 px-[10px] py-[6px] basis-[25%] flex items-center">
  //               10 minute
  //             </p>
  //             <p className="topic-name bg-slate-200 px-[10px] py-[6px] basis-[75%]">
  //               Coffee break
  //             </p>
  //           </div>
  //         </li>
  //       </>
  //     );
  //   }
  // };

  // document.getElementById("myTextarea").addEventListener("input", function () {
  //   var inputText = this.value.replace(/\n/g, "<br>");
  //   document.getElementById("displayArea").innerHTML = inputText;
  // });

  return (
    <>
      <div className="flex">
        <ul className="module-container basis-[80%] self-center">
          <li className="table-item basis-[100%]">
            <div className="flex gap-[20px] justify-between">
              <p className="hour-interval bg-slate-100 px-[10px] py-[6px] basis-[25%] flex items-center">
                <input
                  type="text"
                  className="bg-slate-100 w-full text-center outline-none border-none"
                />
              </p>
              <p className="topic-name bg-slate-100 px-[10px] py-[6px] basis-[75%]">
                <textarea
                  rows="4"
                  cols="50"
                  className="resize-none bg-slate-100 h-[25px] w-full border-none outline-none"
                />
              </p>
            </div>
          </li>
          <li className="table-item basis-[100%]">
            <div className="flex gap-[20px] justify-between">
              <p className="hour-interval bg-slate-200 px-[10px] py-[6px] basis-[25%] flex items-center">
                <input
                  type="text"
                  className="bg-slate-200 w-full text-center outline-none border-none"
                />
              </p>
              <p className="topic-name bg-slate-200 px-[10px] py-[6px] basis-[75%]">
                <textarea
                  rows="4"
                  cols="50"
                  className="resize-none bg-slate-200 h-[25px] w-full border-none outline-none"
                />
              </p>
            </div>
          </li>
          <li className="table-item basis-[100%]">
            <div className="flex gap-[20px] justify-between">
              <p className="hour-interval bg-slate-100 px-[10px] py-[6px] basis-[25%] flex items-center">
                <input
                  type="text"
                  className="bg-slate-100 w-full text-center outline-none border-none"
                />
              </p>
              <p className="topic-name bg-slate-100 px-[10px] py-[6px] basis-[75%]">
                <textarea
                  rows="4"
                  cols="50"
                  className="resize-none bg-slate-100 h-[25px] w-full border-none outline-none"
                />
              </p>
            </div>
          </li>
          <li className="table-item basis-[100%]">
            <div className="flex gap-[20px] justify-between">
              <p className="hour-interval bg-slate-200 px-[10px] py-[6px] basis-[25%] flex items-center">
                <input
                  type="text"
                  className="bg-slate-200 w-full text-center outline-none border-none"
                />
              </p>
              <p className="topic-name bg-slate-200 px-[10px] py-[6px] basis-[75%]">
                <textarea
                  rows="4"
                  cols="50"
                  className="resize-none bg-slate-200 h-[25px] w-full border-none outline-none"
                />
              </p>
            </div>
          </li>
          <li className="table-item basis-[100%]">
            <div className="flex gap-[20px] justify-between">
              <p className="hour-interval bg-slate-100 px-[10px] py-[6px] basis-[25%] flex items-center">
                <input
                  type="text"
                  className="bg-slate-100 w-full text-center outline-none border-none"
                />
              </p>
              <p className="topic-name bg-slate-100 px-[10px] py-[6px] basis-[75%]">
                <textarea
                  rows="4"
                  cols="50"
                  className="resize-none bg-slate-100 h-[25px] w-full border-none outline-none"
                />
              </p>
            </div>
          </li>
        </ul>
        <div className="module-name flex basis-[5%] gap-5">
          <div className="w-[15px] bg-[#F9A820]"></div>
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
