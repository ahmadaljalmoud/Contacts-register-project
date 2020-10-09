import { database } from "firebase";
import React, { useState, useEffect } from "react";
import firebase from "../firebase";

const ContactForm = (props) => {
  let [values, setValues] = useState({
    fullName: "",
    mobile: "",
    email: "",
    address: "",
    type: "",
  });

  let handleInputChange = (e) => {
    const value = e.target.value;
    setValues({ ...values, [e.target.name]: value });
    console.log(setValues);
    console.log(e.target.name);
  };

  let addData = () => {
    const db = firebase.firestore();
    db.collection("contacts").add({
      fullName: values.fullName,
      mobile: values.mobile,
      email: values.email,
      address: values.address,
    });
    setValues("");
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    addData(values);
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
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="fas fa-bars"></i>
          </div>
        </div>
        <input
          className="form-control"
          placeholder="Type: Personal or Company"
          name="type"
          onChange={handleInputChange}
          value={values.type}
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
      <div className="form-group">
        <input
          type="submit"
          value="Add New Contact"
          className="btn btn-outline-success btn-block"
        ></input>
      </div>
    </form>
  );
};
export default ContactForm;
