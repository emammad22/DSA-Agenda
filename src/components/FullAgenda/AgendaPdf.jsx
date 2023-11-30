import React, { useEffect, useState } from "react";
import Day from "../Table/Day";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import CaseStudy from "../Table/CaseStudy";

export default function AgendaPdf() {
  const [days, setDays] = useState([]);

  const downloadPdf = () => {
    const pdf = document.getElementById("agenda");
    html2canvas(pdf).then((canvas) => {
      const imgData = canvas.toDataURL("img/png");
      const doc = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: [710, 797], // Width x Height
      });
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, "PNG", 200, 50, 390, componentHeight - 200);
      doc.save("agenda.pdf");
    });

    // localStorage.removeItem("formData");
  };

  useEffect(() => {
    const days = localStorage.getItem("formData");
    setDays(JSON.parse(days));
  }, [localStorage.getItem("formData")]);

  return (
    <div className="container m-auto mt-6 flex flex-col gap-[20px]">
      <div className="flex flex-col items-center gap-[20px]">
        <div
          className="overflow-hidden flex flex-col items-center gap-[20px]"
          id="agenda"
        >
          <div className="week w-[900px] flex flex-col items-center">
            <h2 className="text-center font-bold text-[30px] text-[#1F3751]">
              WEEK 11
            </h2>
            {days?.map((day) => {
              return <Day day={day} />;
            })}
          </div>
          <div className="w-[900px] bg-[#7dcdc4] flex flex-col gap-5 items-center py-5">
            <h2>
              <input
                type="text"
                placeholder="Enter Week"
                className="rounded-[7px] outline-none border-none px-[5px] py-2 text-[20px] text-center"
              />
            </h2>
            <div className="case-study-inner flex flex-col gap-7">
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
                        <p className="case-topi px-3 bg-slate-300 basis-[75%] flex items-center">
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
                          className="bg-slate-100 outline-none border-none bais-[75%] px-3"
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
                        <p className="case-topi px-3 bg-slate-300 basis-[75%] flex items-center">
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
                          className="bg-slate-100 outline-none border-none bais-[75%] px-3"
                        />
                        {/* </p> */}
                      </div>
                    </li>
                    <li className="case-item">
                      <div className="flex gap-5 w-full">
                        <p className="case-hour py-2 px-3 bg-slate-300 basis-[25%] flex justify-center items-center">
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
            </div>
          </div>
        </div>
      </div>
      <div className="download-container self-center">
        <button
          onClick={downloadPdf}
          className="bg-slate-200 rounded-lg px-[10px] py-[6px]"
        >
          Download
        </button>
      </div>
    </div>
  );
}
