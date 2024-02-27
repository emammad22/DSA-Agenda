import React, { useEffect, useReducer, useState } from "react";
import Day from "../Table/Day";
import CaseStudy from "../Table/CaseStudy";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
import logo from "../../assets/dsa-logo.png";

export default function AgendaPdf() {
  console.log(1)
  const componentRef = useRef(null);
  const [componentHeight, setComponentHeight] = useState(0);
  const agendaRef = useRef();
  useEffect(() => {
    if (componentRef.current) {
      setComponentHeight(componentRef.current.getBoundingClientRect().height);
    }
    console.log(componentHeight);
  }, [componentRef.current?.getBoundingClientRect().height]);

  const colors = [
    { modulest: "#ecbe1d", modulend: "#d5215b" },
    { modulest: "#22AFA2", modulend: "#ECBE1D" },
  ];

  // React to print library
  const downloadPdf = useReactToPrint({
    content: () => agendaRef.current,
  });

  return (
    <div className="m-auto mt-6 flex flex-col gap-[1px]">
      <div className="flex flex-col items-center gap-[1px]">
        <div className="overflow-hidden flex flex-col gap-1" ref={agendaRef}>
          <div
            className="week w-[900px] h-[1400px] pt-8 relative flex flex-col items-center gap-6 bg-[#7dcdc4]"
            ref={componentRef}
          >
            <h2 className="text-center font-bold text-[30px] text-[#1F3751]">
              <input
                type="text"
                placeholder="Enter Week"
                className="rounded-[7px] outline-none border-none px-[5px] py-2 text-[18px] text-center"
              />
            </h2>
            <div className="day-container flex flex-col">
              <Day modColor={colors[0]} />
              <Day modColor={colors[1]} />
            </div>
            <div className="week-footer absolute left-8 bottom-8">
              <div className="footer-inner flex items-center gap-[120px]">
                <div className="week-logo">
                  <img src={logo} alt="dsa-logo" className="w-[120px]" />
                </div>
                <div className="week-info flex gap-5 text-white text-xs">
                  <p className="dsa-link">www.dsa.az </p>
                  <p className="dsa-privacy">Bütün hüquqlar qorunur</p>
                  <p className="dsa-name">DATA SCIENCE ACADEMY</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[900px] h-[1400px] bg-[#7dcdc4] flex flex-col gap-5 items-center py-5 relative">
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
            <div className="case-footer absolute left-8 bottom-8">
              <div className="footer-inner flex gap-[130px] items-center justify-between">
                <div className="case-logo">
                  <img src={logo} alt="dsa-logo" className="w-[120px]" />
                </div>
                <div className="case-info flex text-xs text-[white] gap-4">
                  <p className="dsa-link">www.dsa.az </p>
                  <p className="dsa-privacy">Bütün hüquqlar qorunur</p>
                  <p className="dsa-name">DATA SCIENCE ACADEMY</p>
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

      <style>
        {`
          @media print {
            @page {
              size: 238mm 372mm;
            }
          }
        `}
      </style>
    </div>
  );
}
