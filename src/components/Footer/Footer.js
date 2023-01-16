import React from "react";
import { Link } from "react-router-dom";
import yoga from "../../assets/yoga.svg";
import natation from "../../assets/natation.svg";
import syclisme from "../../assets/syclisme.svg";
import poids from "../../assets/poids.svg";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div></div>
        <div className="nav-footer">
          <Link to="">
            <img src={yoga} alt="yoga" />
          </Link>
          <Link to="">
            <img src={natation} alt="natation" />
          </Link>
          <Link to="">
            <img src={syclisme} alt="syclisme" />
          </Link>
          <Link to="">
            <img src={poids} alt="poids" />
          </Link>

        </div>
        <p> Copyright, SportSee 2022</p>
      </div>
    </footer>
  );
}