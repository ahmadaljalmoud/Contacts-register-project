import React from "react";
import firebase from "../firebase";
const SingleContact = (props) => {


  const editButton = () => {
    const db = firebase.firestore();
    db.collection("contacts")
      .doc(props.id)
      .set({ ...props});
  };
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
