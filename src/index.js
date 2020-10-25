import React, {Suspense}from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { FirebaseAppProvider } from 'reactfire';
import firebase from './firebase';

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebase}>
    <Suspense fallback={<h3>Loading...</h3>}>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </Suspense>
  </FirebaseAppProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
