// import { getDatabase } from "firebase/database";
import { getDatabase, ref, onChildAdded, onChildChanged, onChildRemoved } from "firebase/database";
import { getFirestore, collection } from "firebase/firestore";

import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyCJsHrcnaFSKMbrVudaBwv9czG-bKfRrAM",
    authDomain: "verbose-fiesta-1932.firebaseapp.com",
    projectId: "verbose-fiesta-1932",
    storageBucket: "verbose-fiesta-1932.appspot.com",
    messagingSenderId: "719972178115",
    appId: "1:719972178115:web:e87ed8a12d9820e863aa76",
    databaseURL: "https://verbose-fiesta-1932-default-rtdb.firebaseio.com/"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const Data = collection(db, "data");

// console.log(database)
// const db = getDatabase();