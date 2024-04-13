import React,{useState} from 'react'
import './Dashboard.css'
import SideBar from '../SideBar/SideBar';

import { IoMdHome } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import SalesState from '../SalesState/SalesState';
import { CiMenuBurger } from "react-icons/ci";
import BarChart from '../Charts/BarChart'
import PieChart from '../Charts/PieChart';
import LineChart from '../Charts/LineChart';
import Calender from '../Calender/Calender';
import TodoList from '../TodoList/TodoList';

const Dashboard = () => {
  
  
  return (
   <>
   <div className='container'>
  
   <div className='profile-container'>
    <h4>Attica Pan Masala</h4>
   <div className='row-container'>
   <CgProfile className='profile'/>

  <button className='btn-grad'>Logout</button>
  </div> 
    </div>
   
   <div className='content-container'>
   <div className='home-image'> 
        <div className='icon-container'>
      <IoMdHome className='icon'/>
      </div>
      <h3 style={{paddingLeft:15}}> Admin Dashboard</h3>
      </div>
   </div>
    <div className='card-container'>
      
     
     <div className='card'>
     <div className='card1'>
     <p style={{fontWeight:500,fontSize:18}}> Daily Sales</p>
      <p style={{fontWeight:700,fontSize:22}}>25413</p>
      <p style={{fontWeight:500,fontSize:18}}>Increased by 12%</p>

       
     </div>
     <div className='card2'>

     <p style={{fontWeight:500,fontSize:18}}>Weekly Sales</p>
       <p style={{fontWeight:700,fontSize:22}}>$ 15000</p>
       <p style={{fontWeight:500,fontSize:18}}>Increased by 60%</p>
      
     </div>
     <div className='card3'>
     <p style={{fontWeight:500,fontSize:18}}>Weekly orders</p>
      <p style={{fontWeight:700,fontSize:22}}>42,254</p>
      <p style={{fontWeight:500,fontSize:18}}>Increased by 40%</p>
     </div>
     <div className='card4'>
     <p style={{fontWeight:500,fontSize:18}}>Visitors Online</p>
      <p style={{fontWeight:700,fontSize:22}}>5024</p>
      <p style={{fontWeight:500,fontSize:18}}>Increased by 10%</p>
     </div>
     </div>
     <section>
     <div className='charts'>
     <SalesState/>
     <PieChart/> 
     </div>
     <BarChart/>
    {/* <LineChart/> */}
    <div className='todo-calender'>
    <Calender/>
    <TodoList/>
     
    </div>
 
     </section>
    </div>
    </div>
    </>
  )
}

export default Dashboard


