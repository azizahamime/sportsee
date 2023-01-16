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
        <Link to="/"> Accueil </Link>
        <Link to="/profil"> Profil </Link>
        <Link to="/reglage"> Réglage </Link>
        <Link to="/communaute"> Communauté </Link>
      </div>
    </header>
  );
}