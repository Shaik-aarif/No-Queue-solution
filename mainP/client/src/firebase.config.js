import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDi_RQML4W0Ewmqg1Tcod09fepRb9LzuVM",
    authDomain: "no-queue-29740.firebaseapp.com",
    databaseURL: "https://no-queue-29740-default-rtdb.firebaseio.com",
    projectId: "no-queue-29740",
    storageBucket: "no-queue-29740.appspot.com",
    messagingSenderId: "68357992024",
    appId: "1:68357992024:web:9bf88e180233c414bfa42d",
    measurementId: "G-GGJWYD7F3L"
  };

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };