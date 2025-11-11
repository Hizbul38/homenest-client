// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbkYVvP-Z6dqCI5Bd3nmu8DJOhLsWpZ3k",
  authDomain: "homenest-project.firebaseapp.com",
  projectId: "homenest-project",
  storageBucket: "homenest-project.firebasestorage.app",
  messagingSenderId: "153203238251",
  appId: "1:153203238251:web:5769d011aa122e701d582e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;