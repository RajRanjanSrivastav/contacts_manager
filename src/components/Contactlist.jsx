import React from "react";
import Contactcards from "./Contactcards";
const Contactlist = (props) => {
  const deleteItem = (id) => {
    props.getId(id);
  };

  const editItem = (id) => {
    props.edit(id);
  };
  const rederCard = props.contacts.map((e) => {
    return (
      <Contactcards
        contact={e}
        key={e.id}
        clickHandle={deleteItem}
        editable={editItem}
      />
    );
  });

  return <div>{rederCard}</div>;
};

export default Contactlist;
