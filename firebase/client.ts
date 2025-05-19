// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAtwf_W5nhzp0RjodEMCuAdVYW7XispYmI",
    authDomain: "prepwise-b2e37.firebaseapp.com",
    projectId: "prepwise-b2e37",
    storageBucket: "prepwise-b2e37.firebasestorage.app",
    messagingSenderId: "181245700286",
    appId: "1:181245700286:web:7afb18bb412403bb0ed6ef",
    measurementId: "G-QXB9MP0JZF",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);