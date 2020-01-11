import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDI_j3sYLNJ6GNdKY9op7FdMKQfwNew-oY",
    authDomain: "crown-b1c84.firebaseapp.com",
    databaseURL: "https://crown-b1c84.firebaseio.com",
    projectId: "crown-b1c84",
    storageBucket: "crown-b1c84.appspot.com",
    messagingSenderId: "346763828806",
    appId: "1:346763828806:web:6c125f31e3e0b591e23447",
    measurementId: "G-N5Q0E048JB"
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider =  new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;