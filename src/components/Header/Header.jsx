import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

export default function Header() {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <Link to="/" className="nav-link"> Accueil </Link>
        <Link to="/user/12" className="nav-link"> Profil </Link>
        <Link to="/reglage" className="nav-link"> Réglage </Link>
        <Link to="/communaute" className="nav-link"> Communauté </Link>
      </div>
    </header>
  );
}