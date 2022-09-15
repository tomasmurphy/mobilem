import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAjUXcRT2HDse3qrkavL3ToTcfcOe_hHTU",
  authDomain: "mobilem-5b23c.firebaseapp.com",
  projectId: "mobilem-5b23c",
  storageBucket: "mobilem-5b23c.appspot.com",
  messagingSenderId: "804162060527",
  appId: "1:804162060527:web:ada59d28e28122dfd31b1a",
  measurementId: "G-0L99PDW7H5"
};

const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app)
// const analytics = getAnalytics(app);