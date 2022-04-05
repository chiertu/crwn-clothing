import React from "react";
import { useState } from "react";
import Button from '../button/button.component.jsx';
import { signInWithGooglePopup, 
         createUserDocRef,
         checkAuthWithEmailAndPassword } from '../../utils/firebase/firebase.utils.js';
import FormInput from "../form-input/form-input.component.jsx";
import './sign-in-form.styles.scss';
// import { useEffect } from "react";
// import { auth, signInWithGoogleRedirect} from '../../utils/firebase/firebase.utils.js'
// import { getRedirectResult } from "firebase/auth";


const SignInForm =()=>{
    const defaultFormFields = {
        email: '',
        password: '',
    };
    const [SignInFormFields, setSignInFormFields] = useState(defaultFormFields);
    const {email, password} = SignInFormFields;
    const handleChange=(event)=>{
        const { name, value } = event.target;
        setSignInFormFields({...SignInFormFields, [name]: value})
    };



    const resetFormFields =()=>{
        setSignInFormFields(defaultFormFields);
    };



    const handleSubmit = async (event)=>{
        event.preventDefault();
        try{
            const { user } = await checkAuthWithEmailAndPassword(email, password);
            console.log(user);
            resetFormFields();
        }catch(error){
            switch(error.code){
                case "auth/wrong-password":
                    alert("Wrong password, please try again");
                    break;
                case "auth/user-not-found":
                    alert("No user associated with this email");
                    break;
                case "auth/invalid-email":
                    alert("Invalid email address, please reenter")
                default:
                    console.log(error);
            };
        };

    };

    // useEffect(async()=>{
    //     const { user } = await getRedirectResult(auth);
    //     const userDocRef = await createUserDocRef(user);}, []);
    // <button onClick={signInWithGoogleRedirect}>Sign in with Google redirect</button> */}
    const logInWithGooglePopup = async() => {
            const { user } = await signInWithGooglePopup();
            await createUserDocRef(user);
        };

    return(
        <div className="sign-in-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your name and email</span>
            <form onSubmit={handleSubmit}>
                    <FormInput
                        label="Email"
                        required
                        type="email" 
                        name='email'  
                        value={email}
                        onChange={handleChange}/>
                    <FormInput
                        label="Password"
                        required
                        type="password" 
                        name='password'  
                        value={password}
                        onChange={handleChange}/>
                    <div className="buttons-container">
                        <Button onClick={handleSubmit} type="submit">Sign In</Button>
                        <Button onClick={logInWithGooglePopup} buttonAesthetic='google' type="button">Google Sign In</Button>
                    </div>
                </form>
        </div>
    );
};

export default SignInForm;