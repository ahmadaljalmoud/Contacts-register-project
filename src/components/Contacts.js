import React from "react";
import Contactform from "./Contactform";

const Contacts = ({companyInformation}) => {


  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4 text-center"> Contacts Register</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-5">
          <Contactform/>
        </div>
        <div className="col-md-7">
          <div> 
              
          </div>
          {/* <div>{companyInformation.map(doc =>(doc.data.fullName doc.data.mobile))}</div> */}
        </div>
      </div>
    </>
  );
};
export default Contacts;
