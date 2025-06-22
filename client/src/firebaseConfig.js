import { initializeApp } from 'firebase/app';
import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';
import { getFirestore, doc, setDoc, collection } from 'firebase/firestore'; // Dodaj collection

const firebaseConfig = {
    apiKey: "API-KEY",
    authDomain: "API-KEY",
    projectId: "API-KEY",
    storageBucket: "API-KEY",
    messagingSenderId: "API-KEY",
    appId: "API-KEY"
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