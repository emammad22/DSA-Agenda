import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Header />
      <main className="">
        <Outlet/>
      </main>
      <footer className="footer">
        <div className="container m-auto">
            <div className="footer-inner flex justify-center">
                Copyright 2023 by Mammadov.E.E  
            </div>
        </div>
      </footer>
    </>
  );
}
