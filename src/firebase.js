import * as firebase from "firebase"



const firebaseConfig = {
    apiKey: "AIzaSyDJ2xbcP36ZG61ZM1DvPHpSh-MDGJQ5nsQ",
    authDomain: "react-contact-3a23a.firebaseapp.com",
    databaseURL: "https://react-contact-3a23a.firebaseio.com",
    projectId: "react-contact-3a23a",
    storageBucket: "react-contact-3a23a.appspot.com",
    messagingSenderId: "267180670202",
    appId: "1:267180670202:web:ed628d509b38eb3ca69d43"
};
firebase.initializeApp(firebaseConfig);
// export const auth = firebase.auth();
export default firebase;
