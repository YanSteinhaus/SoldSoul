import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCeyY0HA9KKVwXBpZTZBxrODlPw7hZ-hjw",
  authDomain: "feed-69e52.firebaseapp.com",
  databaseURL: "https://feed-69e52-default-rtdb.firebaseio.com",
  projectId: "feed-69e52",
  storageBucket: "feed-69e52.appspot.com",
  messagingSenderId: "995656564640",
  appId: "1:995656564640:web:b52276b1a55462ea4d2ec5",
  measurementId: "G-Z64HP8TVKJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const redesocial = getFirestore(app);

export { redesocial };
