import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
// import Calendar from 'react-calendar';
// import { Calendar } from '@fullcalendar/core';
import FullCalendar from '@fullcalendar/react';
import cloneDeep from "lodash/cloneDeep";
import {FaTrash, FaPlusSquare} from "react-icons/fa";
import dayGridPlugin from '@fullcalendar/daygrid';
import Form from "@rjsf/core";

const inputFormSchema = {
  "title": "Add Event form",
  "description": "A simple add event form.",
  "type": "object",
  "required": [
    "title",
    "date"
  ],
  "properties": {
    "title": {
      "type": "string",
      "title": "Event Name",
    },
    "date": {
        "type": "string",
        "title": "Enter Date(yyyy-mm-dd)"
    }
  }
}
const uiSchema = {}

function CalendarScreen() {
  const [value, onChange] = useState(new Date());
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);
  const [formData, setFormData] = useState({});
  const [event, addEvent] = useState([]);
              // Event -> {title : 'Report Submission', date : '2021-05-10'},
  const handleDateClick= async (action) =>{
      alert("Yo");
    console.log("Check the click function");
  };
  const handleDelete = (event) =>{
    console.log("Check events here to be deleted", event);
    addEvent(prevData =>{
        let nextData = cloneDeep(prevData);
        nextData.pop();
        return nextData;
    });
    // debugger;
  }
  const handleSubmit = (formData) =>{
      console.log("Check Form Submit", formData)
      if(formData.formData.title){
          addEvent(prevData => {
            let nextData = cloneDeep(prevData);
            nextData.push(formData.formData)
            console.log("===>",nextData);
            return nextData;
          });
          console.log("Check Event",event);

      }
      // addEvent(formData.formData.)
  }
  // const handleChange = (formData) =>{
  //     // console.log("check formData",formData);
  //     // setFormData(formData.formData);
  // }
  return (
    <div>
        <div className="flex-container">
            <Form schema={inputFormSchema} onSubmit={handleSubmit}/>
            <h1><FaTrash onClick={()=>handleDelete(event)}/></h1>
        </div>
        {event &&
        <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        // dateClick={handleDateClick}
        events={event}
      />
        }


    </div>
  );
}

export default CalendarScreen;