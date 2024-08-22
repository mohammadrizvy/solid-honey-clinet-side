import React from "react";
import { Link, Outlet } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { FaUsersGear, FaUserTie } from "react-icons/fa6";
import { RiListSettingsLine, RiMoneyDollarCircleLine } from "react-icons/ri";
import { IoBagAddOutline } from "react-icons/io5";
import { LuShoppingBag, LuContact } from "react-icons/lu";
import { CalendarRange, ListTodo, User, Mail } from "lucide-react";
import DashboardNavbar from "../../Dashboard/DashboardNavbar/DashboardNavbar";
import DashboardItems from "../../Components/DashboardItems/DashboardItems";

const DashboardLayout = () => {
  return (
    <div className="drawer w-full lg:drawer-open">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <DashboardNavbar />
        <div className="p-6">
          <Outlet />
        </div>
        <label
          htmlFor="my-drawer"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side pb-10 h-full bg-base-200">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
         <ul className="menu bg-base-200 text-base-content w-60  overflow-y-auto p-4 h-full ">
        <img
            className="w-[100px] mb-4 mx-auto"
            src={
              "https://i.ibb.co/jhD85Kp/logo2024-07-06-21-35-31-66896443c7133-1-removebg-preview.png"
            }
            alt="Logo"
          />
          <DashboardItems></DashboardItems>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
