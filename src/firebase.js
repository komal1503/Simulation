import firebase from 'firebase';

var firebaseConfig = {
	// Firebase credentials
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

export default db;
