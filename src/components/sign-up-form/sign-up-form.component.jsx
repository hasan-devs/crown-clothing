import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";
import FormInput from "../formInput/formInput.component";
import './sign-up.styles.scss';
import Button from "../button/button.component";
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passowords don't match");
      return;
    }

    try {
      const response = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      const { user } = response;
      const userDoc = await createUserDocumentFromAuth(user, { displayName });
    } catch (error) {
      console.log(`Error creating an auth user : ${error.message}`);
    }
  };

  const onInputChangeHandler = (event) => {
    console.log(`name : ${event.target.name} | value : ${event.target.value}`);
    setFormFields({ ...formFields, [event.target.name]: event.target.value });
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>sign up form</span>
      <form onSubmit={onSubmitHandler}>
        <FormInput
          label="Display Name"
          type="text"
          onChange={(event) => onInputChangeHandler(event)}
          name="displayName"
          value={displayName}
          required
        />
        <FormInput
          label="Email"
          type="email"
          onChange={(event) => onInputChangeHandler(event)}
          name="email"
          value={email}
          required
        />
        <FormInput
          label="Password"
          type="password"
          onChange={(event) => onInputChangeHandler(event)}
          name="password"
          value={password}
          required
        />
        <FormInput
          label="Confirm Password"
          type="password"
          onChange={(event) => onInputChangeHandler(event)}
          name="confirmPassword"
          value={confirmPassword}
          required
        />
        {/* <button type="submit">Sign Up</button> */}
        <Button type="submit" buttonType="inverted">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
