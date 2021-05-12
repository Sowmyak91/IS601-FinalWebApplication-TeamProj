import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
// import Calendar from 'react-calendar';
// import { Calendar } from '@fullcalendar/core';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';


function CalendarScreen() {
  const [value, onChange] = useState(new Date());
  const handleDateClick= async (action) =>{
      alert("Yo");
    console.log("Check the click function");
  };
  return (
    <div>
        <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        dateClick={handleDateClick}
        events={[
            {title : 'Report Submission', date : '2021-05-10'},
            {title : 'Final Project Submission' , date: '2021-05-11'}
        ]}
      />
        {/*<Calendar  />*/}
      {/*<Calendar*/}
      {/*  onChange={onChange}*/}
      {/*  value={value}*/}
      {/*/>*/}
    </div>
  );
}

export default CalendarScreen;