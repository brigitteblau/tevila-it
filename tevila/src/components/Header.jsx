import React  from "react";
import "../styles/header.css";


export default function Header() {
  return (
    <div className="header-container">
      {/* Header principal */}
      <header className="header">
        <div className="logo-div">
        <img src="/img/logos/logo.png" alt="Tevila It" className="logo" />

        </div>
        {/* <div className="menu-icon">⋮</div> */}
      </header>

    </div>
  );
}
