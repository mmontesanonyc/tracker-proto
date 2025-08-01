import React from "react";
import { useLocation } from "react-router-dom";
import HeaderButtons from "./HeaderButtons";
import "./Header.css";

const Header = () => {
  const location = useLocation();
  const path = location.pathname;

  let activeButton = "home";

  if (path.startsWith("/data")) {
    activeButton = "data";
  } else if (path.startsWith("/info")) {
    activeButton = "info";
  }

  return (
    <>
      <section className="header-section">
        <div className="header-container">
          <div className="header-content">
            <h1 className="header-title">Respiratory Illness Data Tracker</h1>
            <p className="header-subtitle">
              Data insights for respiratory illnesses in New York City
            </p>
          </div>
        </div>
      </section>
      <HeaderButtons activeButton={activeButton} />
      </>
  );
};

export default Header;