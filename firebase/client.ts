// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAtwf_W5nhzp0RjodEMCuAdVYW7XispYmI",
    authDomain: "prepwise-b2e37.firebaseapp.com",
    projectId: "prepwise-b2e37",
    storageBucket: "prepwise-b2e37.firebasestorage.app",
    messagingSenderId: "181245700286",
    appId: "1:181245700286:web:7afb18bb412403bb0ed6ef",
    measurementId: "G-QXB9MP0JZF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);