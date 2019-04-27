import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyB7k5HEgovjuaeGL2LBfbgg3EvTJZxbZls",
  authDomain: "task-follower.firebaseapp.com",
  databaseURL: "https://task-follower.firebaseio.com",
  projectId: "task-follower",
  storageBucket: "task-follower.appspot.com",
  messagingSenderId: "362818681963"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
