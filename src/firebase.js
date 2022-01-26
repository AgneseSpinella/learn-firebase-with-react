
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAknyRPSd75xrvGDWWOnq5RWJSRMHPV5OU",
  authDomain: "learn-firebase-with-reac-962ba.firebaseapp.com",
  projectId: "learn-firebase-with-reac-962ba",
  storageBucket: "learn-firebase-with-reac-962ba.appspot.com",
  messagingSenderId: "890113049953",
  appId: "1:890113049953:web:08cd532ed9c28439cdf120"
};

initializeApp(firebaseConfig);
const db = getFirestore() 

export {db};