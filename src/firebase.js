import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp ({
    apiKey: "AIzaSyCSKPSaBMS2awFyE8qLj6MotQkl2ZmeMXM",
    authDomain: "alichat-cb6ad.firebaseapp.com",
    projectId: "alichat-cb6ad",
    storageBucket: "alichat-cb6ad.appspot.com",
    messagingSenderId: "147600315097",
    appId: "1:147600315097:web:8593e04fc32879375ae4c8"
  }).auth()