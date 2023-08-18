import React, { useState} from "react";
import '../styles/header.css'
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const [list, setList] = useState(true);

  const chk = ()=>{
    if(list)
    {
      navigate('/add');
    }
    else{
      navigate('/list');
    }
    setList(!list);
  }
 
  
  
  return (
    <>
      <div className="container">
        <h2>contact manager</h2>
        <button className="hbtn" onClick={chk}>{list?'Add contacts':'Contact list'}</button>
      </div>
    </>
  );
  };

export default Header;
