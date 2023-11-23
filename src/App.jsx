import React, { useState } from "react";
import Header from "./layout/Header";
import Module from "./components/Module";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { TiTick } from "react-icons/ti";
import { v4 as uuidv4 } from "uuid";

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

  const [selected, setSelected] = useState("");
  const [startHour, setStartHour] = useState("");
  const [endHour, setEndHour] = useState("");
  const [topic, setTopic] = useState("");

  const [modules, setModules] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [exist, setExist] = useState({});
  const [inputValues, setInputValues] = useState([]);

  const formData = [
    modules.map((module) => {
      return {
        header: module,
        subject: [
          subjects.filter((subject) => {
            return subject.header === module ? subject : null;
          }),
        ],
      };
    }),
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    console.log("selected", selected);
    console.log("formdata", formData);
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const addModules = (moduleName) => {
    let moduleList = [];
    if (checkExisting(moduleName, modules)) {
      moduleList = removeModule(moduleName, modules);
      setExist({
        ...exist,
        [moduleName]: false,
      });
    } else {
      moduleList = [...modules, moduleName];
      setExist({
        ...exist,
        [moduleName]: true,
      });
    }
    setModules(moduleList);
  };

  const removeModule = (moduleName, modules) => {
    return modules.filter((module) => {
      return module != moduleName;
    });
  };

  const checkExisting = (target, list) => {
    for (const el of list) {
      if (target === el) {
        return true;
      } else {
        continue;
      }
    }
    return false;
  };

  const handleChangeInput = (e, id, inputType) => {
    const { value } = e.target;
    setInputValues((prevInputValues) => {
      const newInputs = prevInputValues.map((input) => {
        input?.id == id ? { ...input, [inputType]: value } : input;
      });
      return newInputs;
    });
  };

  const handleTopic = () => {
    setInputValues([
      ...inputValues,
      { id: uuidv4(), startHour: "", endHour: "", topicName: "" },
    ]);
  };

  return (
    <>
      <Header />
      <div className="weekly-agenda">
        <div className="container m-auto">
          <div className="weekly-inner flex py-[30px] justify-between">
            <div className="week bg-slate-100 h-fit">
              <h2 className="text-center font-bold text-[30px] text-[#1F3751]">
                WEEK 11
              </h2>
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
                      <p className="name rotate-90 w-[50.5px] text-center">
                        Big Data
                      </p>
                    </div>
                  </div>
                  <Module />
                </div>
              </div>
            </div>
            <div className="agenda-form basis-[45%] flex flex-col gap-6">
              <h2 className="text-[#1F3751] text-[30px] text-center font-bold">
                Agenda Fill Form
              </h2>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-[14px]"
              >
                <div
                  className="select-module relative flex w-full py-[5px] px-[10px] border-[1px] border-solid rounded-[7px]"
                  onClick={handleToggle}
                >
                  <p className="basis-[95%]">
                    {modules.length > 0
                      ? modules[modules.length - 1]
                      : "Choose one of them"}
                  </p>
                  <button type="button">
                    {!toggle ? <IoIosArrowDown /> : <IoIosArrowUp />}
                  </button>
                  {toggle ? (
                    <div className="select-sub z-10 absolute top-9 w-full bg-[#eaeaea] left-0 rounded-lg">
                      <ul>
                        <li
                          className="select-item px-2 py-3 cursor-pointer text-[#F7941E] flex justify-between"
                          onClick={(e) => addModules(e.target.innerText)}
                        >
                          Phyton
                          {exist?.Phyton ? (
                            <TiTick className="text-[20px]" />
                          ) : null}
                        </li>
                        <li
                          className="select-item px-2 py-3 cursor-pointer text-[#F7941E] flex justify-between"
                          onClick={(e) => addModules(e.target.innerText)}
                        >
                          Big Data
                          {exist?.["Big Data"] ? (
                            <TiTick className="text-[20px]" />
                          ) : null}
                        </li>
                        <li
                          className="select-item px-2 py-3 cursor-pointer text-[#F7941E] flex justify-between"
                          onClick={(e) => addModules(e.target.innerText)}
                        >
                          PHP
                          {exist?.PHP ? (
                            <TiTick className="text-[20px]" />
                          ) : null}
                        </li>
                        <li className="select-item px-2 py-3 cursor-pointer text-[#F7941E] flex justify-between">
                          Ruby
                        </li>
                      </ul>
                    </div>
                  ) : null}
                </div>
                {modules?.map((module, index) => {
                  return (
                    <div
                      key={index}
                      className="module flex flex-col gap-[20px] animate__animated animate__fadeIn"
                    >
                      <h2 className="text-[20px] font-bold self-center">
                        Module : {module}
                      </h2>
                      {inputValues?.map((input) => {
                        return (
                          <div
                            key={input?.id}
                            className="topic-container flex gap-3 items-center"
                          >
                            <h3 className="text-[23px]">1.</h3>
                            <div className="hour-topic flex flex-col gap-[14px] w-full">
                              <div className="hour-interval flex gap-[10px]">
                                <input
                                  placeholder="Start time..."
                                  type="text"
                                  className="border-[1px] border-solid rounded-[7px] px-[5px] py-[8px]"
                                  value={input?.startHour}
                                  onChange={(e) =>
                                    handleChangeInput(e, input.id, "startHour")
                                  }
                                  name="startHour"
                                />
                                <input
                                  placeholder="End time..."
                                  type="text"
                                  className="border-[1px] border-solid rounded-[7px] px-[5px] py-[8px]"
                                  value={input?.endHour}
                                  onChange={(e) => handleChangeInput(e, input.id, 'endHour')}
                                  name="endHour"
                                />
                              </div>
                              <div className="topic">
                                <input
                                  placeholder="Enter topic name..."
                                  type="text"
                                  className="border-[1px] border-solid rounded-[7px] px-[5px] py-[8px] w-full"
                                  value={input?.topicName}
                                  onChange={(e) => handleChangeInput(e, input.id, 'topicName')}
                                  name="topic"
                                />
                              </div>
                            </div>
                          </div>
                        );
                      })}

                      {/* <div className="topic-container flex gap-3 items-center">
                        <h3 className="text-[23px]">2.</h3>
                        <div className="hour-topic flex flex-col gap-[14px] w-full">
                          <div className="hour-interval flex gap-[10px]">
                            <input
                              placeholder="Start time..."
                              type="text"
                              className="border-[1px] border-solid rounded-[7px] px-[5px] py-[8px]"
                            />
                            <input
                              placeholder="End time..."
                              type="text"
                              className="border-[1px] border-solid rounded-[7px] px-[5px] py-[8px]"
                            />
                          </div>
                          <div className="topic">
                            <input
                              placeholder="Enter topic name..."
                              type="text"
                              className="border-[1px] border-solid rounded-[7px] px-[5px] py-[8px] w-full"
                            />
                          </div>
                        </div>
                      </div> */}
                      <div className="topic-add text-center">
                        <button
                          className="add-btn text-white bg-[#F9A820] px-5 py-3 rounded-lg"
                          type="button"
                          onClick={() => {
                            handleTopic(module);
                          }}
                        >
                          Add new topic
                        </button>
                      </div>
                    </div>
                  );
                })}
              </form>
              <button
                type="submit"
                onClick={handleSubmit}
                className="py-4 px-5 rounded-lg bg-[#909398] text-[#eaeaea]"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
