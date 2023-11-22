import React from "react";
import "../styles/LayoutStyles.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { adminMenu, userMenu } from "./../Data/data";
//import { CopyrightFooter } from "./Signup_logindecor";
import { Badge, message } from "antd";
import Logo from "../assets/Logo.png";

const Layout = ({ children }) => {
  const { user } = useSelector((state) => state.user);
  const location = useLocation();
  const navigate = useNavigate();

  // Logout function
  const handleLogout = async () => {
    localStorage.clear();
    message.success("Logout Successfully");
    // await dispatch(clearUserDataAction());
    navigate("/login");
    // await new Promise((resolve) => setTimeout(resolve, 100));
  };

  // Doctor menu
  const doctorMenu = [
    {
      name: "Home",
      path: "/",
      icon: "fa-solid fa-house",
    },
    {
      name: "Appointments",
      path: "/doctor-appointments",
      icon: "fa-solid fa-list",
    },
    {
      name: "Profile",
      path: `/doctor/profile/${user?._id}`,
      icon: "fa-solid fa-user",
    },
  ];

  // Rendering menu list
  const SidebarMenu = user?.isAdmin ? adminMenu : user?.isDoctor ? doctorMenu : userMenu;

  return (
    <>
      <div className="main">
        <div className="layout">
          <div className="sidebar">
            <div className="logo">
              <img src={Logo} alt="logo here" />
              <h6>Pristyn Hospital</h6>
            </div>
            <div className="menu">
              {SidebarMenu.map((menu) => {
                const isActive = location.pathname === menu.path;
                return (
                  <div key={menu.name} className={`menu-item ${isActive && "active"}`}>
                    <Link to={menu.path}>
                      <i className={menu.icon}></i>
                      {menu.name}
                    </Link>
                  </div>
                );
              })}
              <div className="divider"></div>
              <div className={`menu-item logout`} onClick={handleLogout}>
                <i className="fa-solid fa-right-from-bracket"></i>
                <Link to="/login">Logout</Link>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="header">
              <div className="header-content">
                <button className="link-btn header-btn">
                <Link to="/profile">{user?.name}</Link>
                </button>
                {/* count={user && user.notification.length} */}
                <button className="link-btn header-btn">
                  <Badge
                    count={user && user.notification.length}
                    onClick={() => navigate("/notification")}
                    style={{ cursor: "pointer" }}
                  >
                    <i className="fa-solid fa-bell"></i>
                  </Badge>
                </button>
              
              </div>
            </div>
            <div className="body">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
