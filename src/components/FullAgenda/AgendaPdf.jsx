import React, { useEffect, useState } from "react";
import Day from "../Table/Day";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function AgendaPdf() {
  const [days, setDays] = useState([]);

  const downloadPdf = ()=>{
    const pdf = document.getElementById('agenda')
    html2canvas(pdf, {scale : 2}).then((canvas)=>{
      const imgData = canvas.toDataURL('img/png');
      const doc = new jsPDF('p','mm', 'a4');
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight)
      doc.save('agenda.pdf')
    })

    localStorage.removeItem('formData')
  }

  useEffect(() => {
    const days = localStorage.getItem("formData");
    setDays(JSON.parse(days));
  }, [localStorage.getItem("formData")]);

  return (
    <div className="container m-auto mt-6 flex flex-col gap-[20px]">
      <div className="flex flex-col items-center">
        <div className="week w-[700px]" id="agenda">
          <h2 className="text-center font-bold text-[30px] text-[#1F3751]">
            WEEK 11
          </h2>
          {days?.map((day) => {
            return <Day day={day} />;
          })}
        </div>
        <div className="basis-[50%]"></div>
      </div>
      <div className="download-container self-center">
        <button onClick={downloadPdf} className="bg-slate-200 rounded-lg px-[10px] py-[6px]">Download</button>
      </div>
    </div>
  );
}
