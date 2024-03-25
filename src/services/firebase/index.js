import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDPObl4JYzP5v7nDdTJj5xIgQIGSAYguJ0",
  authDomain: "ecommerce-nairtamarasimes.firebaseapp.com",
  projectId: "ecommerce-nairtamarasimes",
  storageBucket: "ecommerce-nairtamarasimes.appspot.com",
  messagingSenderId: "5845333942",
  appId: "1:5845333942:web:a77f28148cc3f48dee7317"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore (app)
