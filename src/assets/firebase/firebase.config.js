// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoKO9OCP8Qs7UVG1q3g9kFzvV7zog4GqA",
  authDomain: "technology-and-electroni-53df3.firebaseapp.com",
  projectId: "technology-and-electroni-53df3",
  storageBucket: "technology-and-electroni-53df3.appspot.com",
  messagingSenderId: "370960079911",
  appId: "1:370960079911:web:13021479bb319804804202"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;