import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDhd7JTPtf4KN2jnxypyjQkg_W0rhTNDIY",
    authDomain: "actodo-c053d.firebaseapp.com",
    databaseURL: "https://actodo-c053d.firebaseio.com",
    projectId: "actodo-c053d",
    storageBucket: "actodo-c053d.appspot.com",
    messagingSenderId: "71108548468",
    appId: "1:71108548468:web:3db88efd7fa4fce92b3e21"
});

const db = firebaseApp.firestore();

export default db;
