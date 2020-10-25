import React from "react";
import Contactform from "./Contactform";
import SingleContact from "./SingleContact";

const Contacts = ({ companyInformation }) => {
  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4 text-center text-success"> Contacts Register</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-5">
          <Contactform />
        </div>
        <div className="col-md-7">
          <table className="table table-stripped">
            <thead className="thead-light">
              <tr>
                <th>Full Name</th>
                <th>Mobile</th>
                <th>Email</th>
                <th>Type</th>
                <th>Actions</th>
              </tr>
            </thead>
            {companyInformation.map((doc) => (
              <SingleContact {...doc} />
            ))}
          </table>
        </div>
      </div>
    </>
  );
};
export default Contacts;
