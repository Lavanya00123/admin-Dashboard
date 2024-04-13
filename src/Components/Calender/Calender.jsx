import React,{useState} from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import './Calender.css'
const Calender = () => {
    const [date,changeDate]=useState(new Date()) 

    function changeValue(val){
        changeDate(val)
    }
  return (
    <div className='calender-container'>
    {/* <h3>Calender</h3> */}
    <Calendar onChange={changeValue} value={date} className="custom-calender"/>
    </div>
  )
}

export default Calender 