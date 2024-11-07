import React from "react";
import SideBar from "../../Components/DashBoard_Components/SideBar/SideBar";
import NavBar from "../../Components/DashBoard_Components/NavBar/NavBar";

const Dashboard = () => {
  return (
    <div className="row g-0">
      <div className="col-2 ">
        <SideBar></SideBar>
      </div>
      <div className="col-10 p-0">
        <NavBar></NavBar>
      </div>
    </div>
  );
};

export default Dashboard;
