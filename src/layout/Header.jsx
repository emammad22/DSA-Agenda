import React from "react";
import logo from "../assets/academysvg.svg";

export default function Header() {
  return (
    <>
      <header className="header p-[20px] bg-slate-500">
        <div className="container m-auto">
          <div className="header-inner flex items-center gap-[30px]">
            <div className="header-logo">
              <img src={logo} />
            </div>
            <div className="header-nav">
              <ul className="nav flex gap-[20px]">
                <li className="nav-item text-[18px] cursor-pointer font-light">
                  Week
                </li>
                <li className="nav-item text-[18px] cursor-pointer font-light">
                  Midterm
                </li>
                <li className="nav-item text-[18px] cursor-pointer font-light">
                  Others
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
