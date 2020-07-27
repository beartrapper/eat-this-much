import React, { useState } from "react";
import Calendar from "react-calendar";

export default function CalendarMod() {
  const [date, setDate] = useState(new Date());

  const handleChangeDate = (_date) => {
    setDate(_date);
  };

  return (
    <div class="row mt-1 ">
      <div class="col-12 col-md-8  offset-lg-1">
        <div class="row pb-5 ">
          <div class="day_header col-12 text-center">
          <div class="row pl-3 rounded shadow bg-white pt-4 pb-3">
              <h6>
                Please click on the date to retrieve your diet
              </h6>{" "}
            </div>
            <Calendar
              onChange={handleChangeDate}
              value={date}
              className="calendar-UI rounded shadow mt-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
