import React, { useEffect, useState } from "react";
import "./App.css";
import Contacts from "./components/Contacts";
import firebase from "./firebase";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Contactus from "./components/Contactus";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [companyInformation, setComapnyInformation] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      await db
        .collection("contacts")
        .onSnapshot(function (querySnapshot) {
          const data = querySnapshot.docs.map(function (doc) {
            const id = doc.id;
            const data = doc.data();
            return {
              id,
              ...data,
            };
          });
          setComapnyInformation(data);
        });
    };

    fetchData();
  }, []);

  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/about"> <About /></Route>
          <Route path="/contact"><Contactus/></Route>
          <Route path="/">
            <div className="col-md-8 offset-md-2">
              <Contacts companyInformation={companyInformation} />
            </div>{" "}
          </Route>
        </Switch>
      </Router>
      {/* <div className="row">
        <div></div>
        {JSON.stringify(companyInformation)}
      </div> */}
    </>
  );
}

export default App;
