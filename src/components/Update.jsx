import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/add.css";

const Update = ({editContact,update}) => {
//   console.log(update);

  const [tcontact, setTcontact] = useState({
    name: "",
    email: "",
  });

  const navigate = useNavigate();

  const handSumbit = (e) => {
    e.preventDefault();
    console.log(tcontact)
    update(tcontact);
    navigate("/list");
  };
  function handChange(e) {
    setTcontact({ ...tcontact, [e.target.name]: e.target.value });
    // console.log(tcontact)
  }

  useEffect(() => {
    if (editContact) {
      setTcontact(editContact);
    }
  }, [editContact]);

  return (
    <>
      <div className="main">
        <h2>Update Contacts</h2>
        <form className="mainform">
          <div className="fdiv">
            <input
              type="text"
              name="name"
              id="name"
              onChange={handChange}
              placeholder="name"
              value={tcontact.name}
            />
          </div>
          <div className="fdiv">
            <input
              type="email"
              name="email"
              id="email"
              onChange={handChange}
              placeholder="email"
              value={tcontact.email}
            />
          </div>
          <button id="btn" onClick={handSumbit}>
            Update
          </button>
        </form>
      </div>
    </>
  );
};

export default Update;
