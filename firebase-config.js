// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";
import { db, auth } from './firebase-config.js'; // Pakai ./

const firebaseConfig = {
    apiKey: "AIzaSyBIaLzkNM0KqPVKxuMNmardLqcrr2kYTWQ",
    authDomain: "database-idbm.firebaseapp.com",
    projectId: "database-idbm",
    storageBucket: "database-idbm.firebasestorage.app",
    messagingSenderId: "1052290789133",
    appId: "1:1052290789133:web:36b513630b7a87154eca44",
    measurementId: "G-EQLBB94DY2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Export agar bisa dipakai di file lain
export { auth, db, storage };