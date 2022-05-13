import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, signInWithEmailAndPassword, GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9j53jFJPQsi7Iz7hSm3u8nwQkKOW1xic",
  authDomain: "crown-clothing-4ca87.firebaseapp.com",
  projectId: "crown-clothing-4ca87",
  storageBucket: "crown-clothing-4ca87.appspot.com",
  messagingSenderId: "255793876928",
  appId: "1:255793876928:web:27596e647fcd87733f8225"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account'
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation) => {

  if(!userAuth) return;

  const userDocRef = doc(db, 'users',  userAuth.uid);
  const userSnapshot = await getDoc(userDocRef)
  
  if(!userSnapshot.exists()){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try{
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      })
    }catch(e) {
      console.log('error creating user ', e)
    }
  }
  return userDocRef; 
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return
  return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInUserWithEmailAndPassword = async (email, password) => {  
  return await signInWithEmailAndPassword(auth, email, password);
}