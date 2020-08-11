
  import firebase from 'firebase';

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAJtxoqSLEP8xcvt0Wmsoy7X8f2UyCQad0",
    authDomain: "instagram-clone-e8f92.firebaseapp.com",
    databaseURL: "https://instagram-clone-e8f92.firebaseio.com",
    projectId: "instagram-clone-e8f92",
    storageBucket: "instagram-clone-e8f92.appspot.com",
    messagingSenderId: "771201203314",
    appId: "1:771201203314:web:7c8bd31198762de27ad6eb"
  });

  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  const storage = firebaseApp.storage();

  export {db, auth, storage};