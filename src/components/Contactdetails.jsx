import React from "react";
import { Link, useLocation } from "react-router-dom";
import pic from "../pic.png";
import "../styles/contactdetails.css";
const Contactdetails = (props) => {
  const location = useLocation();
  const { from } = location.state;
  const { name, email } = from;
  // console.log(name)

  return (
    <>
      <div className="maindetail">
        <div className="uicard">
          <div className="image">
            <img src={pic} alt="profile pi" width="300" height="200"/>
          </div>
          <div className="content">
            <div className="header">{name}</div>
            <div className="description">{email}</div>
          </div>
        </div>
        <div className="backbtndiv">
          <Link to={"/list"}>
            <button className="backbtn">
              Back to contact List
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Contactdetails;
