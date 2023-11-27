import React, { useState } from "react";
import Header from "./layout/Header";
import Module from "./components/Module";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { TiTick } from "react-icons/ti";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  const [modules, setModules] = useState([]);
  const [toggle, setToggle] = useState({});
  const [exist, setExist] = useState({});
  const [dayForms, setDayForms] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    console.log("formdata", formData);
  };

  const handleToggle = (elem) => {
    // Debug for toggling of select
    // console.log("toggle target", toggle[elem.id]);
    setToggle({
      ...toggle,
      [elem.id]: !toggle[elem.id],
    });
  };

  const addDayForm = () => {
    setDayForms((prevForms) => [...prevForms, { formId: uuidv4(), datas: [] }]);
    // debug for dayform differentiation
    // console.log('dayForms', dayForms)
  };

  // const addModules = (moduleName, formId) => {
  //   let moduleList = [];
  //   console.log("addModule fn", moduleName);
  //   console.log("addModule fn", formId);
  //   if (checkExisting(moduleName, modules, formId)) {
  //     moduleList = removeModule(moduleName, modules, formId);
  //     setExist({
  //       ...exist,
  //       [moduleName]: false,
  //       formId: formId,
  //     });
  //   } else {
  //     moduleList = [
  //       ...modules,
  //       { id: uuidv4(), moduleName: moduleName, inputs: [], formId: formId },
  //     ];
  //     setExist({
  //       ...exist,
  //       [moduleName]: true,
  //       formId: formId,
  //     });
  //   }
  //   setModules(moduleList);

  //   dayForms.map((form) => {
  //     form.formId === formId
  //       ? (form.datas = moduleList.filter((module) => module.formId === formId))
  //       : form.datas;
  //   });
  //   console.log("modulelist", modules);
  // };

  const addModules = (moduleName, formId) => {
    setDayForms((prevDayForms) => {
      const updatedDayForms = prevDayForms.map((form) => {
        if (form.formId === formId) {
          let moduleList = [];
          if (checkExisting(moduleName, form.datas, formId)) {
            moduleList = removeModule(moduleName, form.datas, formId);
            setExist({
              ...exist,
              [moduleName]: false,
              formId: formId,
            });
          } else {
            moduleList = [
              ...form.datas,
              {
                id: uuidv4(),
                moduleName: moduleName,
                inputs: [],
                formId: formId,
              },
            ];
            setExist({
              ...exist,
              [moduleName]: true,
              formId: formId,
            });
          }
          return { ...form, datas: moduleList };
        }
        return form;
      });
      return updatedDayForms;
    });
  };
  

  const removeModule = (moduleName, modules, formId) => {
    return modules.filter((module) => {
      return module.moduleName != moduleName || module.formId !== formId;
    });
  };

  const checkExisting = (target, list, formId) => {
    for (const el of list) {
      console.log("list element", el);
      if (target === el.moduleName && formId === el.formId) {
        return true;
      } else {
        continue;
      }
    }
    return false;
  };

  // const handleChangeInput = (e, formId, moduleId, id, inputType) => {
  //   const { value } = e.target;
  //   console.log("formId", formId);
  //   setModules((prevModules) =>
  //     prevModules.map((module) => {
  //       if (module.id === moduleId && module.formId === formId) {
  //         module.inputs = module.inputs.map((input) =>
  //           input.id === id ? { ...input, [inputType]: value } : input
  //         );
  //       }
  //       return module;
  //     })
  //   );
  // };


  const handleChangeInput = (e, formId, moduleId, id, inputType) => {
    const { value } = e.target;
  
    setDayForms((prevDayForms) => {
      const updatedDayForms = prevDayForms.map((form) => {
        if (form.formId === formId) {
          const updatedModules = form.datas.map((module) => {
            if (module.id === moduleId) {
              const updatedInputs = module.inputs.map((input) =>
                input.id === id ? { ...input, [inputType]: value } : input
              );
              return { ...module, inputs: updatedInputs };
            }
            return module;
          });
          return { ...form, datas: updatedModules };
        }
        return form;
      });
      return updatedDayForms;
    });
  };
  

  // const handleTopic = (moduleId, formId) => {
  //   setModules((prevModules) => {
  //     const updatedModules = prevModules.map((module) => {
  //       if (module.id === moduleId && module.formId === formId) {
  //         return {
  //           ...module,
  //           inputs: [
  //             ...module.inputs,
  //             { id: uuidv4(), startHour: "", endHour: "", topicName: "" },
  //           ],
  //         };
  //       }
  //       return module;
  //     });
  //     helpHandle(updatedModules, formId);
  //     return updatedModules;
  //   });
  // };

  const handleTopic = (moduleId, formId) => {
    setDayForms((prevDayForms) => {
      const updatedDayForms = prevDayForms.map((form) => {
        if (form.formId === formId) {
          const updatedModules = form.datas.map((module) => {
            if (module.id === moduleId) {
              return {
                ...module,
                inputs: [
                  ...module.inputs,
                  { id: uuidv4(), startHour: "", endHour: "", topicName: "" },
                ],
              };
            }
            return module;
          });
          return { ...form, datas: updatedModules };
        }
        return form;
      });
      return updatedDayForms;
    });
  };
  

  const helpHandle = (updatedModules, formId) => {
    setDayForms((prevDayForms) => {
      const updatedDayForms = prevDayForms.map((form) => {
        if (form.formId === formId) {
          return {
            ...form,
            datas: updatedModules
              .filter((module) => module.formId === formId)
              .map((module) => ({
                id: module.id,
                moduleName: module.moduleName,
                inputs: module.inputs,
              })),
          };
        }
        return form;
      });
      return updatedDayForms;
    });
  };
  

  return (
    <>
      <Header />
      <div className="weekly-agenda">
        <div className="container m-auto">
          <div className="weekly-inner flex py-[30px] justify-between">
            <div className="week h-fit basis-[50%]">
              <h2 className="text-center font-bold text-[30px] text-[#1F3751]">
                WEEK 11
              </h2>
              <div className="day px-[20px] py-[20px] basis-[45%] flex flex-col gap-6">
                <div className="day-head text-center font-bold text-[20px]">
                  <input
                    placeholder="Enter date"
                    className="rounded-[7px] text-center font-normal"
                  />
                  {/* 03<sup>rd</sup> of June */}
                </div>

                <div className="table-container">
                  {dayForms?.map((datas) => {
                    {
                      console.log("formdata", datas);
                    }
                    return (
                      <div className="tables flex flex-col">
                        {/* {datas?.datas.map((module) => {
                          return (
                            <div className="flex">
                              <ul className="module-container basis-[94%]">
                                {module.subject?.map((input) => {
                                  return (
                                    <li className="table-item basis-[100%] even:bg-white">
                                      <div className="flex gap-[20px] justify-between">
                                        <p className="hour-interval bg-slate-400 px-[10px] py-[6px] basis-[25%] flex items-center">
                                          {input.startHour} - {input.endHour}
                                        </p>
                                        <p className="topic-name bg-slate-400 px-[10px] py-[6px] basis-[75%]">
                                          {input.topicName}
                                        </p>
                                      </div>
                                    </li>
                                  );
                                })}
                              </ul>
                              <div className="module-name bg-[#F9A820] flex items-center basis-[5%]">
                                <p className="name rotate-90 w-[50.5px] text-center">
                                  {module.header}
                                </p>
                              </div>
                            </div>
                          );
                        })} */}
                      </div>
                    );
                  })}

                  {/* <Module /> */}
                </div>
              </div>
            </div>
            <div className="agenda-form basis-[45%] flex flex-col gap-6">
              <h2 className="text-[#1F3751] text-[30px] text-center font-bold">
                Agenda Fill Form
              </h2>
              <div className="add-day flex justify-center">
                <button
                  className="rounded-[7px] py-3 px-5 bg-red-100"
                  onClick={addDayForm}
                >
                  Add new day
                </button>
              </div>
              {dayForms?.map((form, index) => {
                {
                  console.log('formmmmdataa', dayForms)
                }
                return (
                  <div className="day-form flex flex-col gap-[15px]">
                    <h3 className="text-center text-[20px]">
                      Day {index + 1} Form
                    </h3>
                    <form
                      onSubmit={handleSubmit}
                      className="flex flex-col gap-[14px]"
                      id={form.formId}
                    >
                      <div
                        className="select-module relative flex w-full py-[5px] px-[10px] border-[1px] border-solid rounded-[7px]"
                        onClick={(e) =>
                          handleToggle(e.currentTarget.parentElement)
                        }
                      >
                        <p className="basis-[95%]">
                          {modules.length > 0
                            ? modules[modules.length - 1].moduleName
                            : "Choose one of them"}
                        </p>
                        <button type="button">
                          {!toggle[form.formId] ? (
                            <IoIosArrowDown />
                          ) : (
                            <IoIosArrowUp />
                          )}
                        </button>
                        {toggle[form.formId] ? (
                          <div className="select-sub z-10 absolute top-9 w-full bg-[#eaeaea] left-0 rounded-lg">
                            <ul>
                              <li
                                className="select-item px-2 py-3 cursor-pointer text-[#F7941E] flex justify-between"
                                onClick={(e) =>
                                  addModules(e.target.innerText, form.formId)
                                }
                              >
                                Phyton
                                {exist?.Phyton &&
                                exist.formId === form.formId ? (
                                  <TiTick className="text-[20px]" />
                                ) : null}
                              </li>
                              <li
                                className="select-item px-2 py-3 cursor-pointer text-[#F7941E] flex justify-between"
                                onClick={(e) =>
                                  addModules(e.target.innerText, form.formId)
                                }
                              >
                                Big Data
                                {exist?.["Big Data"] &&
                                exist.formId === form.formId ? (
                                  <TiTick className="text-[20px]" />
                                ) : null}
                              </li>
                              <li
                                className="select-item px-2 py-3 cursor-pointer text-[#F7941E] flex justify-between"
                                onClick={(e) =>
                                  addModules(e.target.innerText, form.formId)
                                }
                              >
                                PHP
                                {exist?.PHP && exist.formId === form.formId ? (
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
                      {form.datas?.map((module) => {
                        {
                          console.log("dayforms", module);
                        }
                        return (
                          <div
                            key={module.id}
                            className="module flex flex-col gap-[20px] animate__animated animate__fadeIn"
                          >
                            <h2 className="text-[20px] font-bold self-center">
                              Module : {module.moduleName}
                            </h2>
                            {module?.inputs?.map((input, index) => {
                              return (
                                <div
                                  key={input?.id}
                                  className="topic-container flex gap-3 items-center"
                                >
                                  <h3 className="text-[23px]">{index + 1}.</h3>
                                  <div className="hour-topic flex flex-col gap-[14px] w-full">
                                    <div className="hour-interval flex gap-[10px]">
                                      <input
                                        placeholder="Start time..."
                                        type="text"
                                        className="border-[1px] border-solid rounded-[7px] px-[5px] py-[8px]"
                                        value={input?.startHour}
                                        onChange={(e) =>
                                          handleChangeInput(
                                            e,
                                            form.formId,
                                            module.id,
                                            input.id,
                                            "startHour"
                                          )
                                        }
                                        name="startHour"
                                      />
                                      <input
                                        placeholder="End time..."
                                        type="text"
                                        className="border-[1px] border-solid rounded-[7px] px-[5px] py-[8px]"
                                        value={input?.endHour}
                                        onChange={(e) =>
                                          handleChangeInput(
                                            e,
                                            form.formId,
                                            module.id,
                                            input.id,
                                            "endHour"
                                          )
                                        }
                                        name="endHour"
                                      />
                                    </div>
                                    <div className="topic">
                                      <input
                                        placeholder="Enter topic name..."
                                        type="text"
                                        className="border-[1px] border-solid rounded-[7px] px-[5px] py-[8px] w-full"
                                        value={input?.topicName}
                                        onChange={(e) =>
                                          handleChangeInput(
                                            e,
                                            form.formId,
                                            module.id,
                                            input.id,
                                            "topicName"
                                          )
                                        }
                                        name="topic"
                                      />
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                            <div className="topic-add text-center">
                              <button
                                className="add-btn text-white bg-[#F9A820] px-5 py-3 rounded-lg"
                                type="button"
                                onClick={() => {
                                  handleTopic(module.id, form.formId);
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
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
