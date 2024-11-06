import { RiContactsFill } from "react-icons/ri";
import { MdTableBar } from "react-icons/md";
import { IoFastFoodSharp } from "react-icons/io5";
import { IoBagHandleSharp } from "react-icons/io5";
import { AiOutlineMenuFold } from "react-icons/ai";
import { useEffect, useState } from "react";
import adminImg from '../../../assets/alif.jpg'

const Sidebar = () => {
 
  

 const [items, setItems] = useState([]);

 useEffect(() => {
   const items = JSON.parse(localStorage.getItem("user"));
   if (items) {
     setItems(items);
   }
 }, []);

 const {userName, phoneNumber}=items;



 console.log( typeof items,'local Storage data');

  return (
    <div className="sidebar-section d-flex flex-column flex-shrink-0 p-3 ">
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
      >
        <div className="admin-img">
          <img src={ adminImg} alt="" className="admin-images" />
        </div>

        <div className="admin-intro">
          <span>{userName}</span>
          <span>{phoneNumber}</span>
        </div>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto gap-3">
        <li className="nav-item rounded-3">
          <a
            href="#"
            className="nav-link text-danger d-flex align-items-center gap-2"
            aria-current="page"
          >
            <RiContactsFill />
            Employees
          </a>
        </li>
        <li className="nav-item rounded-3">
          <a
            href="#"
            className="nav-link  text-danger d-flex align-items-center gap-2 "
          >
            <MdTableBar />
            Tables
          </a>
        </li>
        <li className="nav-item rounded-3">
          <a
            href="#"
            className="nav-link d-flex align-items-center text-danger gap-2"
          >
            <IoFastFoodSharp />
            Foods
          </a>
        </li>
        <li className="nav-item rounded-3">
          <a
            href="#"
            className="nav-link d-flex align-items-center text-danger gap-2"
          >
            <IoBagHandleSharp />
            New Order
          </a>
        </li>
        <li className="nav-item rounded-3">
          <a
            href="#"
            className="nav-link  d-flex align-items-center gap-2 text-danger"
          >
            <AiOutlineMenuFold />
            Orders
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
