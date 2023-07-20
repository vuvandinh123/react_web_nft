/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCINvnar7MIeWAV_a5CF_OqevnRahU54RA",
  authDomain: "vvd-nft.firebaseapp.com",
  databaseURL: "https://vvd-nft-default-rtdb.firebaseio.com",
  projectId: "vvd-nft",
  storageBucket: "vvd-nft.appspot.com",
  messagingSenderId: "866454367532",
  appId: "1:866454367532:web:42ec1f93eba966e1329089",
  measurementId: "G-ZJXZNH0T2V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getDatabase(app);