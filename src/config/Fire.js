import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/app'


const config  = {
    apiKey: "AIzaSyBlFmGrIcCgYHtwNYNiGalK6Q3d6NWy5TI",
    authDomain: "e-doc-78839.firebaseapp.com",
    databaseURL: "https://e-doc-78839-default-rtdb.firebaseio.com",
    projectId: "e-doc-78839",
    storageBucket: "e-doc-78839.appspot.com",
    messagingSenderId: "545092091425",
    appId: "1:545092091425:web:b0392bc92e76e677946d60",
    measurementId: "G-T6GVN9BWCS"
  };
const fire = firebase.initializeApp(config);
export default fire;