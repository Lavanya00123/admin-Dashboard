import React, { useState } from 'react'
import './Sidebar.css'
import {
  FaTruck,
  FaClipboardList,
  FaBoxOpen,
  FaMoneyBillAlt,
   FaCog,
  FaTools,
  FaWarehouse,
  FaUsers,
  FaShoppingBasket,
  FaShoppingCart,
} from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";

const SideBar = () => {
 
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (

  
   <div>
    <CiMenuBurger className='menu-burger' onClick={toggleSidebar}/>
    <div className={`sidebar-container ${showSidebar ? 'show-sidebar' : ''}`}>
        <div className="sidebar-header">
        <CiMenuBurger className='menu-burger' onClick={toggleSidebar}/>
        <h3>Attica Pan Masala</h3>
      </div>
      <ul className="sidebar-menu">
        <a href="/supplierManagement">
          <li>
            <FaTruck style={{ color: "#ffcc00" }}  className="icon" /> 
            Supplier
          </li>
        </a>
        <a href="/category">
          <li>
            <FaClipboardList style={{ color: "#ff6666" }} className="icon" />
            Category
          </li>
        </a>
        <a href="/items">
          <li>
            <FaBoxOpen style={{ color: "#66cc99" }} className="icon" />
            Items
          </li>
        </a>
        <a href="/purchases">
          <li>
            <FaMoneyBillAlt style={{ color: "#66ff66" }} className="icon" />
            Purchases
          </li>
        </a>
        <a href="/itemStock">
          <li>
            <FaCog style={{ color: "#ff99cc" }} className="icon" />
            Item Stock
          </li>
        </a>
        <a href="/production">
          <li>
            <FaTools style={{ color: "#cc99ff" }} className="icon" />
            Products
          </li>
        </a>
        <a href="/productStock">
          <li>
            <FaWarehouse style={{ color: "#66cccc" }} className="icon" />
            Product Stock
          </li>
        </a>
        <a href="/seller">
          <li>
            <FaUsers style={{ color: "#ff9966" }} className="icon" />
            Seller
          </li>
        </a>
        <a href="/supplies">
          <li>
            <FaShoppingBasket style={{ color: "#66cc99" }} className="icon" />
            Supplies
          </li>
        </a>
        <a href="/orders">
          <li>
            <FaShoppingCart style={{ color: "#ccccff" }} className="icon" />
            Orders
          </li>
        </a>
      </ul>
    </div>
    </div>
 
  )
}

export default SideBar 










