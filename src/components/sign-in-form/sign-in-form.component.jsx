import {
  signInWithGooglePopUp,
  createUserDocumentFromAuth,
  signInUserWithEmailAndPassword,
} from "../../utils/firebase/firebase";

import Button,{BUTTON_TYPE_CLASSES} from "../button/button.component";
import FormInput from "../formInput/formInput.component";
import { useState } from "react";
import './sign-in-form.styles.scss';
const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;



  const onInputChangeHandler = (event) => {
    setFormFields({ ...formFields, [event.target.name]: event.target.value });
  };

  const signInWithGoogle = async (event) => {
    event.preventDefault();

    try {
        const response = await signInWithGooglePopUp();
    } catch (error) {
        if(error.code === 'auth/cancelled-popup-request'){
          alert('PopUp was cancelled!');
          return;
        }
        console.log('Error signing in with google ', error.message );
    }
    
  };

  const signInWithEmailAndPassword = async (event) => {
    event.preventDefault();

    try {
        const response = await signInUserWithEmailAndPassword(email, password);

    } catch (error) {
      if(error.code === 'auth/invalid-login-credentials') {
        alert('Incorrect password or email!');
        return;
      }
        console.log(`Error Signing In with Email and Password`, error.message);
    }
    
  };

  return (
    <div className="sign-in-container">
      <form onSubmit={signInWithEmailAndPassword}>
        <h2>Already have an account?</h2>
        <span>Sign In with your email and password</span>
        <FormInput
          label="Email"
          type="email"
          name="email"
          required
          onChange={onInputChangeHandler}
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          required
          onChange={onInputChangeHandler}
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type='button' onClick={signInWithGoogle} buttonType={BUTTON_TYPE_CLASSES.google}> 
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
