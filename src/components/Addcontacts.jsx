import React, { useState } from "react";
import "../styles/add.css";
const Addcontacts = ({ add }) => {
  // console.log(add);
  const [tcontact, setTcontact] = useState({
    name: "",
    email: "",
  });

  const handSumbit = (e) => {
    e.preventDefault();
    // console.log(tcontact)
    if (tcontact.name === "" || tcontact.email === "") {
      alert("All fields are mandatory!");
    } else {
      add(tcontact);
    }
    setTcontact({ name: "", email: "" });
    // console.log(tcontact);
  };
  function handChange(e) {
    setTcontact({ ...tcontact, [e.target.name]: e.target.value });
    // console.log(tcontact)
  }

  return (
    <>
      <div className="main">
        <h2>Add Contact</h2>
        <form className="mainform">
          <div className="fdiv">
            {/* <label className="field">Name</label> */}
            <input
              type="text"
              name="name"
              onChange={handChange}
              placeholder="name"
              value={tcontact.name}
            />
          </div>
          <div className="fdiv">
            {/* <label className="field">Email</label> */}
            <input
              type="email"
              name="email"
              onChange={handChange}
              placeholder="email"
              value={tcontact.email}
            />
          </div>
            <button id="btn" onClick={handSumbit}>
              Add
            </button>
        </form>
      </div>
    </>
  );
};

export default Addcontacts;
