import React from "react";
import "../pages/Notfound.css";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="notfound-container">
      <h1 className="notfound-title">404</h1>
      <p className="notfound-message">Oops! Page Not Found</p>
      {/* <img src={notFoundImage} alt="Not Found" className="notfound-image" /> */}
      <button className="notfound-link" onClick={() => navigate("/overview")}>
        Go to Overview
      </button>
    </div>
  );
};

export default NotFound;
