import React from 'react';
import { useState } from 'react';
import { createAuthUserWithEmailAndPassword, 
         createUserDocRef } from '../../utils/firebase/firebase.utils.js'
import FormInput from '../form-input/form-input.component.jsx';
import './sign-up-form.styles.scss';
import Button from '../button/button.component.jsx';


const SignUpForm = ()=> {
    const defaultFormFields = {
        displayName: '',
        email: '',
        password: '',
        confirmPassord: '',
    };

    const [SignUpFormFields, setSignUpFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassord} = SignUpFormFields;

    const handleChange=(event)=>{
        const { name, value } = event.target;
        setSignUpFormFields({...SignUpFormFields, [name]: value})
    };

    const resetFormFields =()=>{
        setSignUpFormFields(defaultFormFields);
    };

    const handleSubmit = async (event)=>{
        event.preventDefault();

        if(password!=confirmPassord){
            alert("Passwords do not match");
            setSignUpFormFields({...SignUpFormFields, password:'', confirmPassord:''});
            return;
        };

        try{
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            const userDocRef = await createUserDocRef(user, { displayName });
            resetFormFields();
        }catch(error){
            if(error.code === "auth/email-already-in-use"){
                alert(`Can't create user, email already in use`);
            }else if(error.code === "auth/invalid-email"){
                alert(`Please enter a valid email address`);
            }else{
                console.log('user creation encountered and error', error);
            }
        };

    };

    return <div className='sign-up-container'>
                <h2>Don't have an account yet?</h2>
                <span>Sign up with your name and email</span>
                <form onSubmit={handleSubmit}>
                    <FormInput
                        label="Name"
                        required
                        type="text" 
                        name='displayName'  
                        value= {displayName}
                        onChange={handleChange}/>
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
                    <FormInput
                        label="Confirm Password"    
                        required
                        type="password" 
                        name='confirmPassord'  
                        value={confirmPassord}
                        onChange={handleChange}/>
                    <Button type='submit'>Sign Up</Button>
                </form>
    </div>
};

export default SignUpForm