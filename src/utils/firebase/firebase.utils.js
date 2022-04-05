import {initializeApp} from 'firebase/app';
import {getAuth, GoogleAuthProvider,
        signInWithRedirect, signInWithPopup,
        createUserWithEmailAndPassword, 
        signInWithEmailAndPassword} from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBLHJTohBkU1CEqVkaYsfjMYe4A1fWjmRg",
    authDomain: "crwn-clothing-db-ac766.firebaseapp.com",
    projectId: "crwn-clothing-db-ac766",
    storageBucket: "crwn-clothing-db-ac766.appspot.com",
    messagingSenderId: "518191472230",
    appId: "1:518191472230:web:32c2b10a5134874313d7a7",
    measurementId: "G-JZFQGFL04Q"
  };
  
  // Initialize Firebase
const crwnClothingWebApp = initializeApp(firebaseConfig);

  // Authentication setup

export const auth = getAuth();

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: 'select_account'
    });

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
// export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

  // Firestore setup

const db = getFirestore();
export const createUserDocRef = async(UserInfoFromAuth, addInfo={}) => {
        if(!UserInfoFromAuth)return;
        const userDocRef = doc(db, 'users', UserInfoFromAuth.uid);
        console.log(UserInfoFromAuth.uid);
        const userSnapShot = await getDoc(userDocRef);

        if(!userSnapShot.exists()){

          const { displayName, email } = UserInfoFromAuth;
          const dateCreated = new Date();

          try{await setDoc(userDocRef, {
            displayName,
            email,
            dateCreated,
            ...addInfo,
          })} catch(error){
            console.log("error creating user", error.message);
          }
            
        } 
        return userDocRef;
      }


  // Sign Up with Email and Password

export const createAuthUserWithEmailAndPassword = async(email, password) => {
  if(!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

  // Sign in with Email and Password
export const checkAuthWithEmailAndPassword= async(email, password) => {
  if(!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};