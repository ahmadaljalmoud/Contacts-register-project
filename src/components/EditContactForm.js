import React, { useState } from "react";
import firebase from "../firebase";
import Form from "react-bootstrap/Form";
import Modal from 'react-bootstrap/Modal'
import { propTypes } from "react-bootstrap/esm/Image";
const EditContactForm = (props) => {
  let [values, setValues] = useState(props);
  console.log(props);
  let handleInputChange = (e) => {
    const value = e.target.value;
    setValues({ ...values, [e.target.name]: value });
    console.log(values);
    console.log(e.target.name);
  };

  let EditData = () => {
    const db = firebase.firestore();
    db.collection("contacts").doc(props.id).set({
      fullName: values.fullName,
      mobile: values.mobile,
      email: values.email,
      address: values.address,
      type: values.type,
    });
    props.HideForm();
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    EditData(values);
    setValues("");
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="fas fa-user"></i>
          </div>
        </div>
        <input
          className="form-control"
          placeholder="Full Name"
          name="fullName"
          onChange={handleInputChange}
          value={values.fullName}
        />
      </div>
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="fas fa-mobile-alt"></i>
          </div>
        </div>
        <input
          className="form-control"
          placeholder="Mobile Number"
          name="mobile"
          onChange={handleInputChange}
          value={values.mobile}
        />
      </div>
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="fas fa-envelope"></i>
          </div>
        </div>
        <input
          className="form-control"
          placeholder="Email address"
          name="email"
          onChange={handleInputChange}
          value={values.email}
        />
      </div>
      <div className="mb-3 d-flex align-self-center">
        <label className="m-3"> Specify the contact's type:</label>
        <Form.Check
          inline
          name="type"
          value="Personal"
          checked={values.type === "Personal"}
          onChange={handleInputChange}
          label="Personal"
          type="radio"
          id="Personal"
        />
        <Form.Check
          inline
          name="type"
          value="Company"
          checked={values.type === "Company"}
          onChange={handleInputChange}
          label="Company"
          type="radio"
          id="Company"
        />
      </div>

      <div className="form-group input-group">
        <textarea
          className="form-control"
          placeholder="Address"
          name="address"
          onChange={handleInputChange}
          value={values.address}
        />
      </div>
      <div className="row">
      <div className=" col-6 form-group">
        <input
          type="submit"
          value="Edit"
          className="btn btn-outline-success btn-block"
        ></input>
      </div>
      <div className="col-6 form-group">
          <button
            onClick={() => props.HideForm()}
            className="btn btn-outline-danger btn-block"
          >
            Cancel
          </button>
        </div>
        </div>
    </form>
  );
};
export default EditContactForm;

