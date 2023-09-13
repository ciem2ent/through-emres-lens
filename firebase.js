// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCFvKoDtW4gDpNw1dszWLcM00uzGviDs44",
    authDomain: "through-emres-lens.firebaseapp.com",
    projectId: "through-emres-lens",
    storageBucket: "through-emres-lens.appspot.com",
    messagingSenderId: "825079623463",
    appId: "1:825079623463:web:77afc5f16ea324d2c40302"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };