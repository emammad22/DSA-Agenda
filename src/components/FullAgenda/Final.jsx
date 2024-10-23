import { useReactToPrint } from "react-to-print";
import logo from "../../assets/dsa-logo.png";
import CaseStudy from "../Table/CaseStudy";
import { useRef } from "react";

export default function Final() {
  const agendaRef = useRef();

  // React to print library
  const downloadPdf = useReactToPrint({
    content: () => agendaRef.current,
  });

  return (
    <div className="m-auto mt-6 flex flex-col gap-[1px]">
      <div className="flex flex-col items-center gap-[1px]">
        <div className="overflow-hidden flex flex-col gap-1" ref={agendaRef}>
          <div className="week w-[900px] h-[1400px] bg-[#7dcdc4] flex flex-col gap-5 items-center py-5 relative pt-56">
            <h2 className=" bg-white w-1/2 outline-none border-none px-[5px] py-2 text-2xl text-center font-bold">
              DSA Final Exam
            </h2>

            <div className="case-study-inner flex flex-col gap-7 bg-white h-fit py-3 px-8 text-center w-5/6">
              <div className=" flex  flex-col justify-between w-full ">
                <input type="text" className="focus:outline-none text-center  text-2xl mb-1" placeholder="DATE" />
                <div className="flex justify-between ">
                  <input className=" bg-slate-200 text-center focus:outline-none" />
                  <div className="flex w-full">
                    <input className="bg-slate-200 flex justify-between ml-3 w-full focus:outline-none pl-3 py-1" />{" "}
                    <div className="bg-[#ecbe1d] w-4 h-full"></div>
                  </div>
                </div>
                <div className="flex justify-between ">
                  <input value="15 minutes" className=" bg-slate-100 text-center focus:outline-none" />
                  <div className="flex w-full">
                    <input
                      value="Coffee Break"
                      className="bg-slate-100 flex justify-between ml-3 w-full focus:outline-none pl-3 py-1"
                    />{" "}
                    <div className="bg-[#ecbe1d] w-4 h-full"></div>
                  </div>
                </div>
                <div className="flex justify-between ">
                  <input className=" bg-slate-200 text-center focus:outline-none" />
                  <div className="flex w-full">
                    <input className="bg-slate-200 flex justify-between ml-3 w-full focus:outline-none pl-3 py-1" />{" "}
                    <div className="bg-[#ecbe1d] w-4 h-full"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="case-study-inner flex flex-col gap-7 bg-white h-fit py-3 px-8 text-center w-5/6">
              <div className=" flex  flex-col justify-between w-full ">
                <input type="text" className="focus:outline-none text-center  text-2xl mb-1" placeholder="DATE" />
                <div className="flex justify-between ">
                  <input className=" bg-slate-200 text-center focus:outline-none" />
                  <div className="flex w-full">
                    <input className="bg-slate-200 flex justify-between ml-3 w-full focus:outline-none pl-3 py-1" />{" "}
                    <div className="bg-[#d5215b] w-4 h-full"></div>
                  </div>
                </div>
                <div className="flex justify-between ">
                  <input value="15 minutes" className=" bg-slate-100 text-center focus:outline-none" />
                  <div className="flex w-full">
                    <input
                      value="Coffee Break"
                      className="bg-slate-100 flex justify-between ml-3 w-full focus:outline-none pl-3 py-1"
                    />{" "}
                    <div className="bg-[#d5215b] w-4 h-full"></div>
                  </div>
                </div>
                <div className="flex justify-between ">
                  <input className=" bg-slate-200 text-center focus:outline-none" />
                  <div className="flex w-full">
                    <input className="bg-slate-200 flex justify-between ml-3 w-full focus:outline-none pl-3 py-1" />{" "}
                    <div className="bg-[#d5215b] w-4 h-full"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="case-study-inner flex flex-col gap-7 bg-white h-fit py-3 px-8 text-center w-5/6">
              <div className=" flex  flex-col justify-between w-full ">
                <input type="text" className="focus:outline-none text-center  text-2xl mb-1" placeholder="DATE" />
                <div className="flex justify-between ">
                  <input className=" bg-slate-200 text-center focus:outline-none" />
                  <div className="flex w-full">
                    <input className="bg-slate-200 flex justify-between ml-3 w-full focus:outline-none pl-3 py-1" />{" "}
                    <div className="bg-[#22afa2] w-4 h-full"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="case-study-inner flex flex-col gap-7 bg-white h-fit py-3 px-8 text-center w-5/6">
              <div className=" flex  flex-col justify-between w-full ">
                <input type="text" className="focus:outline-none text-center  text-2xl mb-1" placeholder="DATE" />
                <div className="flex justify-between ">
                  <input className=" bg-slate-200 text-center focus:outline-none" />
                  <div className="flex w-full">
                    <input className="bg-slate-200 flex justify-between ml-3 w-full focus:outline-none pl-3 py-1" />{" "}
                    <div className="bg-[#ecbe1d] w-4 h-full"></div>
                  </div>
                </div>
              </div>
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
        <button onClick={downloadPdf} className="bg-slate-200 rounded-lg px-[10px] py-[6px]">
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
