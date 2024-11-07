import { RiContactsFill } from "react-icons/ri";
import { MdTableBar } from "react-icons/md";
import { IoFastFoodSharp } from "react-icons/io5";
import { IoBagHandleSharp } from "react-icons/io5";
import { AiOutlineMenuFold } from "react-icons/ai";
import { useEffect, useState } from "react";
import adminImg from "../../../assets/alif.jpg";
import { Link, useNavigate } from "react-router-dom";
import { BsBoxArrowRight } from "react-icons/bs";

const Sidebar = () => {

  const navigate =useNavigate()
  const [items, setItems] = useState([]);
  const { userName, phoneNumber } = items;

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("user"));
    if (items) {
      setItems(items);
    }
  }, []);

  const logout =()=>{
     localStorage.removeItem('token')
     localStorage.removeItem('user')
     navigate('/login');
  }

  return (
    <div className="sidebar-section d-flex flex-column flex-shrink-0 p-3 ">
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0   link-dark text-decoration-none justify-content-between"
      >
        <div className="admin-img">
          <img src={adminImg} alt="" className="admin-images" />
        </div>

        <div className="admin-intro d-flex flex-column">
          <span className="">{userName}</span>
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

      <button onClick={logout} className="btn logout-btn py-2 rounded-5 fw-bold d-flex justify-content-center gap-2 align-items-center">
        <BsBoxArrowRight />
        logout
      </button>
    </div>
  );
};

export default Sidebar;
