import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Contactlist from "./components/Contactlist";
import Contactdetails from "./components/Contactdetails";
import Addcontacts from "./components/Addcontacts";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Update from "./components/Update";
import Home from "./components/Home";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const [editContact, seteditContacts] = useState(null);

  const add = (tcontact) => {
    setContacts([...contacts, { ...tcontact, id: contacts.length + 1 }]);
    // console.log(tcontact);
  };

  useEffect(() => {
    const retrive = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // console.log(retrive);
    if (retrive) setContacts(retrive);
  }, []);

  // console.log(contacts);
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const deleteList = (id) => {
    const newContact = contacts.filter((e) => {
      return e.id !== id;
    });
    setContacts(newContact);
  };

  const editList = (id) => {
    const editContact = contacts.find((e) => {
      return e.id === id;
    });
    seteditContacts(editContact);
  };

  const updateEdit = (newEdit) => {
    const index = contacts.findIndex((v) => v.id === newEdit.id);
    const finalUp = [...contacts];
    finalUp.splice(index, 1, newEdit);
    setContacts(finalUp);
  };

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Addcontacts add={add} />} />
          <Route
            path="/list"
            element={
              <Contactlist
                contacts={contacts}
                getId={deleteList}
                edit={editList}
              />
            }
          />
          <Route path="/contactdetails/:id" element={<Contactdetails />} />
          <Route
            path="/Update/:id"
            element={<Update editContact={editContact} update={updateEdit} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
