import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD-Iv4sBpV3pDK9zSE1Ed6jfVX6F0ejWBk",
    authDomain: "clone-ecf1f.firebaseapp.com",
    projectId: "clone-ecf1f",
    storageBucket: "clone-ecf1f.appspot.com",
    messagingSenderId: "462591219094",
    appId: "1:462591219094:web:a5a6e960620b99f02db9b7",
    measurementId: "G-JGG95E8SYG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db , auth ,provider};