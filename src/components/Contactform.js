import React,{useState,useEffect} from "react";

const ContactForm = () => {

  const initialFieldValues={
    fullname:'',
    mobile:'',
    email:'',
    address:'',
  }
  const [values,setValues]=useState(initialFieldValues);

  return (
    <form autoComplete="off">
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="fas fa-user"></i>
          </div>
        </div>
        <input className="form-control" placeholder="Full Name" name="fullName" 
        value={values.fullname} />
      </div>
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="fas fa-user"></i>
          </div>
        </div>
        <input className="form-control" placeholder="Mobile Number" name="mobile" 
        value={values.mobile} />
      </div>
    </form>
  );
};
export default ContactForm;
