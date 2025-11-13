import React, { useState } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Sidebar from "../sidebar/Sidebar";
import "./MainLayout.css";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className={`main-layout ${darkMode ? "dark" : ""}`}>
      <Header
        darkMode={darkMode}
        toggleDarkMode={() => setDarkMode((v) => !v)}
        toggleSidebar={() => setSidebarOpen((v) => !v)}
      />
      
      {/* Overlay for mobile sidebar */}
      <div
        className={`sidebar-overlay ${sidebarOpen ? "open" : ""}`}
        onClick={() => setSidebarOpen(false)}
        aria-hidden={!sidebarOpen}
      />

      <div className="main-container">
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)}  />
        <div className="content-area">
          <div className="content-wrapper">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;