import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  AiOutlineAppstore,
  AiOutlineAppstoreAdd,
  AiOutlineUser,
} from "react-icons/ai";
import { BiDollar } from "react-icons/bi";
import { LuLayoutDashboard } from "react-icons/lu";
import {
  MdOutlineLeaderboard,
  MdOutlinePostAdd,
  MdOutlineReviews,
} from "react-icons/md";
import { useDispatch } from "react-redux";
import { userLogout } from "../../../../state/slices/userSlice";
import { FiArrowLeft, FiArrowRight, FiLogOut, FiStar } from "react-icons/fi";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Sidebar = ({ user }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

  const sidebarLinks = [
    {
      name: "Dashboard",
      icon: <LuLayoutDashboard className="w-6 h-6" />,
      path: "",
    },
    {
      name: "Profile",
      icon: <AiOutlineUser className="w-6 h-6 " />,
      path: "profile",
    },
    {
      name: "All Listings",
      icon: <AiOutlineAppstore className="w-6 h-6 " />,
      path: "all-listings",
    },
    {
      name: "Add Listing",
      icon: <AiOutlineAppstoreAdd className="w-6 h-6 " />,
      path: "add-listing",
    },
    {
      name: "Posts",
      icon: <MdOutlinePostAdd className="w-6 h-6 " />,
      path: "posts",
    },
    {
      name: "Reviews",
      icon: <FiStar className="w-6 h-6 " />,
      path: "reviews",
    },
    {
      name: "Leads",
      icon: <MdOutlineLeaderboard className="w-6 h-6 " />,
      path: "leads",
    },
    {
      name: "Subscriptions",
      icon: <BiDollar className="w-6 h-6 " />,
      path: "subscriptions",
    },
  ];

  const isActiveLink = (path) => {
    if (path === "") {
      return (
        location.pathname === `/vendor/dashboard/` ||
        location.pathname === `/vendor/dashboard`
      );
    }
    return location.pathname === `/vendor/dashboard/${path}`;
  };

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div
      className={`relative h-screen  overflow-y-auto ${isSidebarCollapsed ? "p-2 pr-6" : "p-4 pr-8"} py-8 shadow-lg border-r flex justify-between items-start  `}
    >
      <div className={`h-full transition-all duration-[400ms]  flex flex-col justify-between overflow-y-auto ${isSidebarCollapsed ? " w-20 p-2" : " w-48"
        }`}>
      <div className="flex flex-col gap-8 w-full">
        <div className="flex flex-col items-center justify-start gap-6 w-full">





          <div className="flex items-center gap-4">
            <img
              src={
                user.image
                  ? user.image
                  : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              }
              alt=""
              className="rounded-full w-10 h-10 object-cover"
            />
            {!isSidebarCollapsed && (
              <h2 className="text-2xl font-semibold">{user.name}</h2>
            )}
          </div>
        </div>

        <hr className="w-full border-gray-300" />

        <div className={` flex flex-col ${isSidebarCollapsed ? "items-center" : "items-start"} gap-4 w-full`}>
          {sidebarLinks.map(({ name, icon, path }, index) => (
            <Link to={path} key={index} className={`w-full rounded-md p-2 px-4 ${isSidebarCollapsed ? "px-0" : ""} ${isActiveLink(path) ? "bg-blue-500" : ""}`} >
              <div
                className={`flex items-center ${isSidebarCollapsed ? "justify-center" : "justify-start"} w-full} cursor-pointer gap-3 ${isActiveLink(path) ? "text-white" : "text-gray-600"
                  }`}
              >
                {icon}
                { !isSidebarCollapsed &&
                <span className="text-base">{name}</span>
}
              </div>
            </Link>
          ))}
        </div>
      </div>

      <hr className="w-full border-gray-300" />

      <div className="w-full">
          <button
            className={`w-full flex gap-3 items-center justify-center px-4 py-2 border text-white border-red-500 bg-red-500 rounded-lg ${isSidebarCollapsed && "border-0"}`}
            onClick={() => {
              localStorage.removeItem("token");
              dispatch(userLogout());
              navigate("/");
            }}
          >
            <FiLogOut className="w-6 h-6"/>
            { !isSidebarCollapsed &&
            <span>Logout</span> 
}
          </button>
      </div>

      </div>

      <div className="absolute -right-5 w-10 top-1/2 transform -translate-y-1/2 z-[20] flex items-center cursor-pointer gap-2">
            {!isSidebarCollapsed && (
              <div className=" p-1 rounded-2xl bg-gray-300 pr-2 flex items-center gap-1" onClick={toggleSidebar}>
                <FaAngleLeft className="w-4 h-4 text-gray-600" />
                {/* <span>Hide</span> */}
              </div>
            )}


            {isSidebarCollapsed && (
              <div className=" p-1 rounded-2xl bg-gray-300 pr-2 flex items-center gap-1" onClick={toggleSidebar}>
                {/* <span>Open</span> */}
                <FaAngleRight className="w-4 h-4 text-gray-600" />
              </div>
            )}
          </div>
    </div>
  );
};

export default Sidebar;