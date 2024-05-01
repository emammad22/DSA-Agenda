import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import AgendaPdf from "./components/FullAgenda/AgendaPdf";
import Midterm from "./components/FullAgenda/Midterm";
import Final from "./components/FullAgenda/Final";
import Career from "./components/FullAgenda/Career";
export default function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
        <Route path="/" element={<AgendaPdf />} />
          <Route path="/midterm" element={<Midterm />} />
          <Route path="/final" element={<Final />} />
          <Route path="/career" element={<Career />} />


          {/* <Route path="/week-agenda" element={} /> */}
        </Route>
      </Routes>
    </>
  );
}
