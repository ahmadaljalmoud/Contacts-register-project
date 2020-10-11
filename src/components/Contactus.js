import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Contactus = () => {
  return (
    <>
      <div className="col-md-12">
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          Contact us
        </h2>
        <p className="text-center w-responsive mx-auto mb-2">
          Do you have any questions? Please do not hesitate to contact us
          directly.
        </p>
        <p className="text-center w-responsive mb-5">
          Our team will come back to you within a matter of hours to help you.
        </p>    
      </div>
      <div classNameName="row ">
        <div className="col-md-12 text-center">
          <ul className="list-unstyled mb-0">
            <li>
              <i className="fas fa-map-marker-alt fa-2x"></i>
              <p>Istanbul, 34000, Turkey</p>
            </li>

            <li>
              <i className="fas fa-phone mt-4 fa-2x"></i>
              <p>+90 534 616 4224</p>
            </li>

            <li>
              <i className="fas fa-envelope mt-4 fa-2x"></i>
              <p>ahmad.galmod@gmail.com</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Contactus;
