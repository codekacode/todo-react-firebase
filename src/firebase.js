// import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyA-8T1YG4n44YrkITNwRcv5bFtomhsHn6I",
  authDomain: "todo-react-firebase-64df2.firebaseapp.com",
  projectId: "todo-react-firebase-64df2",
  storageBucket: "todo-react-firebase-64df2.appspot.com",
  messagingSenderId: "964437857008",
  appId: "1:964437857008:web:a7bb1352de1f5e6c572835"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();

export { db };