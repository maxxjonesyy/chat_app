import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC40ySYxYX6RXPPIMVKAd-ibQfAYEMEsVE",
  authDomain: "chat-app-3fd6e.firebaseapp.com",
  projectId: "chat-app-3fd6e",
  storageBucket: "chat-app-3fd6e.appspot.com",
  messagingSenderId: "168308962958",
  appId: "1:168308962958:web:204794d90710193fe5fbdf",
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);

export { provider, auth, signInWithPopup };
