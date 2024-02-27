import React from "react";
import logo from "../assets/academysvg.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="header p-[20px] bg-slate-500">
        <div className="container m-auto">
          <div className="header-inner flex items-center gap-[30px]">
            <Link to='/'>
              <div className="header-logo">
                <img src={logo} />
              </div>
            </Link>
            <div className="header-nav">
              <ul className="nav flex gap-[20px]">
                <Link to="/">
                  <li className="nav-item text-[18px] cursor-pointer font-light">
                    Week
                  </li>
                </Link>
                <Link to='/midterm'>
                  <li className="nav-item text-[18px] cursor-pointer font-light">
                    Midterm
                  </li>
                </Link>
                <Link to='/final'>
                  <li className="nav-item text-[18px] cursor-pointer font-light">
                    Final
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
