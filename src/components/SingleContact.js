import React, { useState, useEffect } from "react";

const SingleContact = () => {
  const [newCell, setNewCell] = useState;

  return
  <table className="table table-borderless table-stripped">
    <thead className="thead-light">
      <tr>
        <th>Full Name</th>
        <th>Mobile</th>
        <th>Email</th>
        <th>Type</th>
      </tr>
    </thead>
    <tbody>
      {companyInformation.map((doc) => (
        <tr key={}>
          <td>{doc.data.fullName}</td>
          <td>{doc.data.mobile}</td>
          <td>{doc.data.email}</td>
          <td className="bg-light">
            <a
              className="btn text-primary"
              onClick={() => {
                setCurrentId(key);
              }}
            >
              <i className="fas fa-pencil-alt"></i>
            </a>
            <a
              className="btn text-danger"
              onClick={() => {
                onDelete(key);
              }}
            >
              <i className="far fa-trash-alt"></i>
            </a>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
};

export default SingleContact;
