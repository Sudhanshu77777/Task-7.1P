import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyB7iqzU101V0HKkdHDlB_RtQ1dWsqrpL8A",
  authDomain: "sample-firebase-ai-app-4fcf5.firebaseapp.com",
  projectId: "sample-firebase-ai-app-4fcf5",
  storageBucket: "sample-firebase-ai-app-4fcf5.appspot.com",
  messagingSenderId: "1096639628284",
  appId: "1:1096639628284:web:3fd0f1ebbaa54a43916879"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); 

export { auth, db }; 
