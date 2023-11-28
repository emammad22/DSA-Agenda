import React, { useEffect, useState } from "react";
import Day from "../Table/Day";

export default function AgendaPdf() {
  const [days, setDays] = useState([]);

  useEffect(() => {
    const days = localStorage.getItem("formData");
    setDays(JSON.parse(days));
  }, [localStorage.getItem('formData')]);

  return (
    <div className="container m-auto">
      {days?.map((day) => {
        return <Day day={day}/>;
      })}
    </div>
  );
}
