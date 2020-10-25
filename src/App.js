import React, { useEffect, useState } from "react";
import "./App.css";
import Contacts from "./components/Contacts";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Contactus from "./components/Contactus";
import "firebase/auth";
import { useFirebaseApp } from "reactfire";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SigningIn from "./components/SigningIn"

function App() {
  const firebase = useFirebaseApp();
  const [companyInformation, setComapnyInformation] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      await db.collection("contacts").onSnapshot(function (querySnapshot) {
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
    {/* <SigningIn> */}
      <Router>
        <NavBar />
        <Switch>
          <Route path="/about">
            {" "}
            <About />
          </Route>
          <Route path="/contact">
            <Contactus />
          </Route>
          <Route path="/">
            <div className="col-md-8 offset-md-2">
              <Contacts companyInformation={companyInformation} />
            </div>{" "}
          </Route>
        </Switch>
      </Router>
      {/* </SigningIn> */}
    </>
  );
}

export default App;
