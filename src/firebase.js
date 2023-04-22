import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCrVeq7tRezvQDApSkZuH3X-75euO07oa8",
  authDomain: "youtupe-clone-793a1.firebaseapp.com",
  projectId: "youtupe-clone-793a1",
  storageBucket: "youtupe-clone-793a1.appspot.com",
  messagingSenderId: "596981043455",
  appId: "1:596981043455:web:aa0700a82c996550e0bcca",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
const storage = getStorage();
const provider = new GoogleAuthProvider();
const timestamp = serverTimestamp();

export { app, auth, db, storage, provider, timestamp };
