import { useReactToPrint } from "react-to-print";
import logo from "../../assets/dsa-logo.png";
import CaseStudy from "../Table/CaseStudy";
import { useRef } from "react";


export default function Midterm() {
  const agendaRef = useRef();


    // React to print library
    const downloadPdf = useReactToPrint({
        content: () => agendaRef.current,
    });

    return (
        <div className="m-auto mt-6 flex flex-col gap-[1px] items-center ">
            <div className="flex flex-col items-center justify-center gap-[1px] ">
                <div className="overflow-hidden flex flex-col gap-1"  ref={agendaRef}>



                    <div className="week w-[900px] h-[1400px] bg-[#7dcdc4] flex flex-col gap-5 items-center py-5 relative pt-56">
                        <h2 className=" bg-white w-1/2 outline-none border-none px-[5px] py-2 text-2xl text-center font-bold">
                            DSA Midterm Exam
                        </h2>
                        <div className="case-study-inner flex flex-col gap-7 w-4/6">
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
