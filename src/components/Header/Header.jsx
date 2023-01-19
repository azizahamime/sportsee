import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import Connection from "../connection";

export default function Header() {
  const { data, isLoading} = Connection();
  const users = data.users;
  console.log(users );
  return (
    <header>
      <div className="container">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <Link to="/" className="nav-link"> Accueil </Link>
        <span className="nav-link profil"> Profil 
          <div className="dropdown">
            { isLoading ? (
                 <span> telechargement</span>
              ):(
                users.map((user) => <Link to={`/user/${user.id}`} key={user.id}>{user.userInfos.firstName}</Link>)
              )
            }            
          </div>
        </span>
        <Link to="/reglage" className="nav-link"> Réglage </Link>
        <Link to="/communaute" className="nav-link"> Communauté </Link>
      </div>
    </header>
  );
}