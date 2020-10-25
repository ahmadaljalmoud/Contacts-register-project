import React, { useState } from "react";
import firebase from "../firebase";
import EditContactForm from "./EditContactForm"
const SingleContact = (props) => {
  const [show, setShow] = useState(false);

  const editButton = () => {
    setShow(true);
  }
  const HideForm=()=>{
    setShow(false);

  }
  const onDelete = () => {
    const db = firebase.firestore();
    db.collection("contacts").doc(props.id).delete();
  };

  // console.log(props.id);
  return (
    // <h1>I am here</h1>

    <tbody>
      <tr>
        <td>{props.fullName}</td>
        <td>{props.mobile}</td>
        <td>{props.email}</td>
        <td>{props.type}</td>
        <td className="bg-light">
        {show && <EditContactForm {...props} HideForm={HideForm}/>}
          <i
            className="btn text-primary"
            onClick={() => {
              editButton(props);
            }}
          >
            <i className="fas fa-pencil-alt"></i>
          </i>
          <i
            className="btn text-danger"
            onClick={() => {
              onDelete(props);
            }}
          >
            <i className="far fa-trash-alt"></i>
          </i>
        </td>
      </tr>
    </tbody>
  );
};

export default SingleContact;
