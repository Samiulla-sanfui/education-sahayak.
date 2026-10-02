import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCf7h9TT7ucTU5mqIaEQnnKcI32VepI_sg",
  authDomain: "shiksha-sahayak-91c2b.firebaseapp.com",
  projectId: "shiksha-sahayak-91c2b",
  storageBucket: "shiksha-sahayak-91c2b.firebasestorage.app",
  messagingSenderId: "184146539144",
  appId: "1:184146539144:web:c1c72da3f971cecbae653d",
  measurementId: "G-EYLKY90H3Y"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
