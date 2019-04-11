import firebase from 'firebase/app'; // /app saves us space by only importing the essentials
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDNZ5uG8_v4FaL62oNvz1-IJ8BOq0N-k3Y",
    authDomain: "event-dashboard-dee20.firebaseapp.com",
    databaseURL: "https://event-dashboard-dee20.firebaseio.com",
    projectId: "event-dashboard-dee20",
    storageBucket: "",
    messagingSenderId: "853274025457"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots:true});

export default firebase;