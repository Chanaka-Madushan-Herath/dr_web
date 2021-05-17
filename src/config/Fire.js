import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/app'


const config  = {
    apiKey: "AIzaSyDabzW_-vlymaOTqx_npOiHKZWY88Lgmkw",
    authDomain: "e-dr-6637d.firebaseapp.com",
    databaseURL: "https://e-dr-6637d-default-rtdb.firebaseio.com",
    projectId: "e-dr-6637d",
    storageBucket: "e-dr-6637d.appspot.com",
    messagingSenderId: "754784507400",
    appId: "1:754784507400:web:76e91aee4ea88d13c563bd",
    measurementId: "G-HLREL2JLGQ"
  };
const fire = firebase.initializeApp(config);
export default fire;