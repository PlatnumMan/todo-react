import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDmG7RGlbHkB6fQHk_m8r8EuudW2vheXbM",
  authDomain: "todo-app-e390e.firebaseapp.com",
  projectId: "todo-app-e390e",
  storageBucket: "todo-app-e390e.appspot.com",
  messagingSenderId: "895963397995",
  appId: "1:895963397995:web:90e7a8a724bbcf2b5f962e",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
