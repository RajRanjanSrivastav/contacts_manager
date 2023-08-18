import React from "react";
import { Link } from "react-router-dom";
import "../styles/contactcards.css";
const Contactcards = (props) => {
  // console.log(props.contact);
  const { name, email, id } = props.contact;
  // console.log(id);

  const handleClick = () => {
    props.editable(id);
  };

  return (
    <>
      <div className="maincard">
        <div id="item">
          <i id="img">👨🏽‍💻</i>
          <Link to={`/contactdetails/${id}`} state={{ from: props.contact }}>
            {/* <Link to={`/contactdetails/${id}`}> */}
            <div className="contact">
              <div className="header">{name}</div>
              <div>{email}</div>
            </div>
          </Link>
        </div>

        <div className="carddiv">
          <Link to={`/Update/${id}`}>
            <button className="cardbtn" onClick={handleClick}>
              📝
            </button>
          </Link>

          <button
            className="cardbtn"
            onClick={() => {
              props.clickHandle(id);
            }}
          >
            ❌
          </button>
        </div>
      </div>
    </>
  );
};

export default Contactcards;
