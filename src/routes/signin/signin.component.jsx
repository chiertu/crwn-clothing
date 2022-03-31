import React from "react";
import { signInWithGooglePopup, 
         createUserDocRef} from '../../utils/firebase/firebase.utils.js'

const SignIn =()=>{

    const logInWithGooglePopup = async() => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocRef(user);
        
    }


    return(
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logInWithGooglePopup}>
                Sign In With Google Popup
                </button>
        </div>
        
    );
};

export default SignIn;