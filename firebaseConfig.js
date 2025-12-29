import { initializeApp, getApps } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-storage.js";

export const firebaseConfig = {
  apiKey: "AIzaSyAeNo2vAV7htCcuASPYAyPal72ABGOeMhw",
  authDomain: "sistema-aura.firebaseapp.com",
  projectId: "sistema-aura",
  storageBucket: "sistema-aura.firebasestorage.app",
  messagingSenderId: "872957048609",
  appId: "1:872957048609:web:f3035080060fd0f12b7060"
};

export const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
