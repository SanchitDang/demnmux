import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA0NuRI-b5I0EWdOrSkXFTxjIA2g8AB3Jc",
  authDomain: "dnmbackend.firebaseapp.com",
  projectId: "dnmbackend",
  storageBucket: "dnmbackend.appspot.com",
  messagingSenderId: "481745165827",
  appId: "1:481745165827:web:d596d095129e147147b836",
  measurementId: "G-HWKZ636W5B"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);