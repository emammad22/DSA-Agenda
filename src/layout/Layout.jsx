import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet/>
      </main>
      {/* <footer className="footer">
        <div className="container">
            <div className="footer-inner">
                Copyright 2023 by Mammadov.E.E  
            </div>
        </div>
      </footer> */}
    </>
  );
}
