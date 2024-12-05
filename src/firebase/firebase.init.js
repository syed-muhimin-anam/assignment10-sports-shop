// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQipnwsiTcjVm4Dj7rpRJQfxzsFRaYoFE",
  authDomain: "dream-sports-shop.firebaseapp.com",
  projectId: "dream-sports-shop",
  storageBucket: "dream-sports-shop.firebasestorage.app",
  messagingSenderId: "424586149726",
  appId: "1:424586149726:web:0fd10ec940c3d0eec919cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);