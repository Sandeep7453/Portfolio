import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "webportfolio-f1a05.firebaseapp.com",
  projectId: "webportfolio-f1a05",
  storageBucket: "webportfolio-f1a05.appspot.com",
  messagingSenderId: "487458665387",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
