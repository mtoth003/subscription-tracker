import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCnjGvvdk8ppKvXbB2L3OsJ7NK5HMV5d4o",
  authDomain: "subscription-tracker-9fc70.firebaseapp.com",
  projectId: "subscription-tracker-9fc70",
  storageBucket: "subscription-tracker-9fc70.appspot.com",
  messagingSenderId: "1081049033480",
  appId: "1:1081049033480:web:145bf42a432dea59c31abd"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {db}