import React, { useEffect, useState } from 'react';
import './App.css';
import Contacts from './components/Contacts';
import firebase from "./firebase";
function App() {

  const [companyInformation, setComapnyInformation] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      await db
        .collection("contacts").get().then(function(querySnapshot) {
          const data = querySnapshot.docs.map(function (doc){
            return {
               id: doc.id,
               data: doc.data(),
            }
            
          })
          setComapnyInformation(data)})}
          
    fetchData();
  }, []);


  return (
    <div className= "row">
      {/* <div></div> */}
      {/* {JSON.stringify(companyInformation)} */}
      <div className="col-md-8 offset-md-2">
        <Contacts companyInformation={companyInformation}/>
      </div> 
    </div>
  );
}

export default App;
