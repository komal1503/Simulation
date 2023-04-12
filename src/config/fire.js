//import firebase from 'firebase';
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/database"
const firebaseConfig = {
    apiKey: "AIzaSyCqrh-qwdBaf041vnZlRWOWXZ8dduUIHCc",
    authDomain: "simulation-42792.firebaseapp.com",
    projectId: "simulation-42792",
    storageBucket: "simulation-42792.appspot.com",
    messagingSenderId: "273670731356",
    appId: "1:273670731356:web:fa40124fc9ed9c52ac5899",
    measurementId: "G-DT9YN4PB94"
  };

  const fire=firebase.initializeApp(firebaseConfig)
export default fire;