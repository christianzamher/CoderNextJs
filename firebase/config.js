// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  {getFirestore} from 'firebase/firestore'
import { getStorage } from "firebase/storage"
import { getAuth, GoogleAuthProvider } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzBhnNX1OfM4-y4zUwMQ16AvS8GTHJiwA",
  authDomain: "nextjs-c55dd.firebaseapp.com",
  projectId: "nextjs-c55dd",
  storageBucket: "nextjs-c55dd.appspot.com",
  messagingSenderId: "14691160913",
  appId: "1:14691160913:web:18d7741614039a3c74f970"
};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()

