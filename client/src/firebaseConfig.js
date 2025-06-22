import { initializeApp } from 'firebase/app';
import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';
import { getFirestore, doc, setDoc, collection } from 'firebase/firestore'; // Dodaj collection

const firebaseConfig = {
    apiKey: "AIzaSyAwsyL9GpjWv4J-KHPeHELJtLlIqfGFsuA",
    authDomain: "learnify-66410.firebaseapp.com",
    projectId: "learnify-66410",
    storageBucket: "learnify-66410.appspot.com",
    messagingSenderId: "18799992832",
    appId: "1:18799992832:web:c69e4b73b0d1ec2c51b8e5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

setPersistence(auth, browserLocalPersistence)
    .catch((error) => {
        console.error("Error setting persistence:", error);
    });

// Eksportuj wszystkie potrzebne funkcje
export { auth, db, doc, setDoc, collection }; // Dodaj collection do eksportu