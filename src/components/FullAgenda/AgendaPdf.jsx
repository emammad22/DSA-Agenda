import React, { useEffect, useState } from "react";
import Day from "../Table/Day";
import CaseStudy from "../Table/CaseStudy";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";

export default function AgendaPdf() {
  const [days, setDays] = useState([]);
  const agendaRef = useRef();

  const colors = [
    { modulest: "#ecbe1d", modulend: "#d5215b" },
    { modulest: "#22AFA2", modulend: "#ECBE1D" },
  ];

  // React to print library
  const downloadPdf = useReactToPrint({
    content: () => agendaRef.current,
  });
  useEffect(() => {
    const days = localStorage.getItem("formData");
    setDays(JSON.parse(days));
  }, [localStorage.getItem("formData")]);

  return (
    <div className="m-auto mt-6 flex flex-col gap-[20px]">
      <div className="flex flex-col items-center gap-[20px]">
        <div
          className="overflow-hidden flex flex-col gap-6"
          ref={agendaRef}
        >
          <div className="week w-[900px] flex flex-col items-center">
            <h2 className="text-center font-bold text-[30px] text-[#1F3751]">
              <input
                type="text"
                placeholder="Enter Week"
                className="rounded-[7px] outline-none border-none px-[5px] py-2 text-[20px] text-center"
              />
            </h2>
            {/* {days?.map((day) => {
              return <Day day={day} />;
            })} */}
            <Day modColor={colors[0]} />
            <Day modColor={colors[1]} />
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
              <CaseStudy />
              <CaseStudy />
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
