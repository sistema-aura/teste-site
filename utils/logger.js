import { initializeApp, getApps } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";
import { firebaseConfig } from "../firebaseConfig.js";

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function logAction(action, itemType, itemName = "") {
  try {
    await addDoc(collection(db, "logs"), {
      action,
      itemType,
      itemName,
      userName: localStorage.getItem("selectedAgent") || "Desconhecido",
      timestamp: serverTimestamp()
    });
  } catch (e) {
    console.warn("Erro ao criar log:", e);
  }
}
