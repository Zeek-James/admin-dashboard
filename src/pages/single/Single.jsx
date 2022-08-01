import React from "react";
import NavBar from "../../components/navbar/NavBar";
import SideBar from "../../components/sidebar/SideBar";
import "./single.scss";

const Single = () => {
  return (
    <div className="single">
      <SideBar />
      <div className="singleContainer">
        <NavBar />
        <div className="top">
          <div className="left">
            <h1 className="title">Information</h1>
            <div className="item">
              <img src="" alt="" className="itemImg" />
              details
            </div>
          </div>
          <div className="right"></div>
          <div className="bottom"></div>
        </div>
      </div>
    </div>
  );
};

export default Single;
