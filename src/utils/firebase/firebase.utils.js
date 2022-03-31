import {initializeApp} from 'firebase/app';
import {getAuth, GoogleAuthProvider,
        signInWithRedirect, signInWithPopup} from 'firebase/auth';
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
const googlePopupProvider = new GoogleAuthProvider();
googlePopupProvider.setCustomParameters({
    prompt: 'select_account'
    });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googlePopupProvider);

  // Firestore setup

const db = getFirestore();
export const createUserDocRef = async(UserInfoFromAuth) => {
        const userDocRef = doc(db, 'users', UserInfoFromAuth.uid);
        const userSnapShot = await getDoc(userDocRef)

        if(!userSnapShot.exists()){
          const { displayName, email } = UserInfoFromAuth;
          const dateCreated = new Date();
          try{await setDoc(userDocRef, {
            displayName,
            email,
            dateCreated
          })} catch(error){
            console.log("error creating user", error.message);
          }
            
        } 
        return userDocRef;
      }


