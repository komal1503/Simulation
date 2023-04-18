import React, { Component } from "react";
import fire from "./config/fire";
import { useNavigate } from "react-router-dom";
import adjuster from "./components/adjuster.jpeg";
import machine from "./components/datamc.png"
import "./types.css";
const Home = () => {
  const navigate = useNavigate();

  const adj_handleNavigation = () => {
    navigate("/data_adj");
  };

  const mc_handleNavigation = () => {
    navigate("/data_mc");
  };

  return (
    <div>
      <div className="head">
        <h1>CHOOSE THE ITEM FOR WHICH YOU HAVE TO ENTER THE DATA</h1>
      </div>

      <div className="mains">
        <h1 className="data">INPUT DATA</h1>
        <div className="calc">
          <div className="mc">
            <img src={machine} className="machine" />
            <button className="adjbtn" onClick={mc_handleNavigation}>
              Machine
            </button>
          </div>
          <div className="adj">
            <img src={adjuster} className="machine" />
            <button className="adjbtn" onClick={adj_handleNavigation}>
              Adjuster
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
