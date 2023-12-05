import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import AgendaPdf from "./components/FullAgenda/AgendaPdf";
export default function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<AgendaPdf />} />
          {/* <Route path="/week-agenda" element={} /> */}
        </Route>
      </Routes>
    </>
  );
}
