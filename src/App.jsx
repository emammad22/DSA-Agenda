import React, { useState } from "react";
import Header from "./layout/Header";
import Module from "./components/Module";

export default function App() {
  const initialData = [
    {
      header: "Phyton",
      subject: [
        {
          time: "10:00 - 12:00",
          title: "Object Oriented Prog. Inheritance",
        },
        {
          time: "13:00 - 15:00",
          title: "Polymorphism",
        },
      ],
    },
  ];

  const [formFields, setFormFields] = useState([
    {
      id: 0,
      value: "",
    },
  ]);
  const [data, setData] = useState(initialData);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <>
      <Header />
      <div className="weekly-agenda">
        <div className="container m-auto">
          <div className="weekly-inner flex py-[30px] justify-between">
            <div className="week bg-slate-100">
              <h2 className="text-center font-bold text-[30px] text-[#1F3751]">WEEK 11</h2>
              <div className="day px-[20px] py-[20px] basis-[45%]">
                <div className="day-head text-center font-bold text-[20px]">
                  03<sup>rd</sup> of June
                </div>
                <div className="table-container">
                  <div className="tables flex">
                    <ul className="module-container basis-[94%]">
                      <li className="table-item">
                        <div className="flex gap-[20px]">
                          <p className="hour-interval bg-slate-400 px-[10px] py-[6px]">
                            10:00 - 10:45
                          </p>
                          <p className="topic-name bg-slate-400 px-[10px] py-[6px]">
                            Working with image data: channels, matrices,
                            dimenstions
                          </p>
                        </div>
                      </li>
                      <li className="table-item">
                        <div className="flex gap-[20px]">
                          <p className="hour-interval bg-slate-300 px-[10px] py-[6px]">
                            10:00 - 10:45
                          </p>
                          <p className="topic-name bg-slate-300 px-[10px] py-[6px]">
                            Working with image data: channels, matrices,
                            dimenstions
                          </p>
                        </div>
                      </li>
                      <li className="table-item">
                        <div className="flex gap-[20px]">
                          <p className="hour-interval bg-slate-400 px-[10px] py-[6px]">
                            10:00 - 10:45
                          </p>
                          <p className="topic-name bg-slate-400 px-[10px] py-[6px]">
                            Working with image data: channels, matrices,
                            dimenstions
                          </p>
                        </div>
                      </li>
                    </ul>
                    <div className="module-name bg-[#F9A820] flex items-center basis-[5%]">
                      <p className="name rotate-90 w-[50.5px] text-center">Big Data</p>
                    </div>
                  </div>
                  <Module />
                </div>
              </div>
            </div>
            <div className="agenda-form basis-[45%]">
              <h2 className="text-[#1F3751] text-[30px] text-center font-bold">Agenda Fill Form</h2>
              <form onSubmit={handleSubmit}>
                <div className="select-module">
                  <select className="w-full py-[5px] px-[10px]">
                    <option value="Phyton">Phyton</option>
                    <option value="R">R</option>
                    <option value="Big Data">Big Data</option>
                  </select>
                </div>
              </form>
              <button type="submit" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
